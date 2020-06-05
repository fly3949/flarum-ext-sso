<?php


namespace Fly3949\SSO\Controllers;

use Exception;
use Flarum\Settings\SettingsRepositoryInterface;
use Fly3949\SSO\Services\UserRegisterService;
use Laminas\Diactoros\Response\HtmlResponse;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;

class SsoController implements RequestHandlerInterface
{
    /**
     * @var UserRegisterService
     */
    private $registerService;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * SsoController constructor.
     * @param UserRegisterService $registerService
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(UserRegisterService $registerService, SettingsRepositoryInterface $settings)
    {
        $this->registerService = $registerService;
        $this->settings = $settings;
    }

    /**
     * @param Request $request
     * @return Response
     * @throws Exception
     */
    public function handle(Request $request): Response
    {
        $secret = $this->settings->get('fly3949-sso.secret_key');
        $query = $request->getQueryParams();
        $email = $query['email'];
        $id = $query['id'];
        $username = $query['username'];
        $time = $query['time'];
        $signature = $query['signature'];

        if ($signature != hash_hmac('sha256', $email . $id . $username . $time, $secret)) {
            throw new Exception("wrong signature");
        }

        $session = $request->getAttribute('session');
        $this->registerService->registerAndLogin($session, $username, $email);

        return new HtmlResponse('<html lang="en"><head><title>Loading...</title><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"></head><body><h1>Loading...</h1><script>window.location.href = "/"</script></body></html>');
    }
}
