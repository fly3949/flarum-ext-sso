<?php

namespace Fly3949\SSO\Listener;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class LoadSettingsFromDatabase
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * LoadSettingsFromDatabase constructor.
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }

    /**
     * @param Serializing $event
     */
    public function prepareApiAttributes(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $settings = [
                'signup_url',
                'login_url',
                'logout_url',
                'disable_login_btn',
                'disable_signup_btn'
            ];
            foreach ($settings as $setting) {
                $event->attributes['fly3949-sso.' . $setting] = $this->settings->get('fly3949-sso.' . $setting);
            }

            $event->attributes['fly3949-sso.enabled'] = $this->settings->get('fly3949-sso.secret_key') ? true : false;
        }
    }
}
