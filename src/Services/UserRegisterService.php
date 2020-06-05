<?php


namespace Fly3949\SSO\Services;


use Exception;
use Flarum\Http\AccessToken;
use Flarum\Http\SessionAuthenticator;
use Flarum\User\Event\LoggedIn;
use Flarum\User\User;
use Illuminate\Contracts\Session\Session;
use Illuminate\Support\Str;

class UserRegisterService
{
    /**
     * @var SessionAuthenticator
     */
    protected $authenticator;

    /**
     * @var Session
     */
    protected $session;

    /**
     * @param SessionAuthenticator $authenticator
     */
    public function __construct(SessionAuthenticator $authenticator)
    {
        $this->authenticator = $authenticator;
    }

    /**
     * Register and login.
     *
     * @param Session $session
     * @param string $username
     * @param string $email
     * @return array
     * @throws Exception
     */
    public function registerAndLogin(Session $session, string $username, string $email)
    {
        $this->session = $session;

        $user = $this->find($email);
        if (!$user) {
            // do register
            $user = $this->register($username, $email);
        }
        return $this->login($user);
    }

    /**
     * Find user by email.
     *
     * @param string $email
     * @return mixed
     */
    public function find(string $email)
    {
        return User::where('email', $email)->first();
    }

    /**
     * Create a new user.
     *
     * @param string $email
     * @param string $username
     * @return User
     * @throws Exception
     */
    public function register(string $username, string $email)
    {
        if (User::where('email', $email)->exists()) {
            throw new Exception("user already exists.");
        }

        $password = Str::random(20);
        $user = User::register(
            $username,
            $email,
            $password
        );
        $user->activate();
        $user->save();

        return $user;
    }

    /**
     * Login a user.
     *
     * @param User $user
     * @return array
     */
    public function login(User $user)
    {
        $token = AccessToken::generate($user->id, 3600);
        $token->save();

        $this->authenticator->logIn($this->session, $user->id);

        event(new LoggedIn($user, $token));

        return [
//            'token' => $token->token,
            'userId' => $user->id
        ];
    }
}
