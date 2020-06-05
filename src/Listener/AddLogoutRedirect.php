<?php

namespace Fly3949\SSO\Listener;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Event\LoggedOut;
use Illuminate\Contracts\Events\Dispatcher;

class AddLogoutRedirect
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function subscribe(Dispatcher $events)
    {
        $events->listen(LoggedOut::class, [$this, 'addLogoutRedirect']);
    }

    public function addLogoutRedirect()
    {
        $url = $this->settings->get('fly3949-sso.logout_url');
        if ($url) {
            header('Location: ' . $url);
            die();
        }
    }
}
