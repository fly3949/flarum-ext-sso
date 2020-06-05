<?php


namespace Fly3949\SSO\Controllers;

use Exception;
use Fly3949\SSO\Services\UserRegisterService;
use Laminas\Diactoros\Response\HtmlResponse;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;

class SsoController implements RequestHandlerInterface
{
    private $registerService;

    public function __construct(UserRegisterService $registerService)
    {
        $this->registerService = $registerService;
    }

    public function handle(Request $request): Response
    {
        // TODO: get secret key by settings.
        $secret = '';

        try {
            $query = $request->getQueryParams();
            $email = $query['email'];
            $id = $query['id'];
            $username = $query['username'];
            $time = $query['time'];
            $signature = $query['signature'];
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }

        if ($signature != hash_hmac('sha256', $email . $id . $username . $time, $secret)) {
            throw new Exception("wrong signature");
        }

        $session = $request->getAttribute('session');
        $this->registerService->registerAndLogin($session, $username, $email);

        return new HtmlResponse('<html lang="en"><head><title>Loading...</title><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"></head><body><h1>Loading...</h1><script>window.location.href = "/"</script></body></html>');
    }
}
