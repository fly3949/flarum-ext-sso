<?php

/*
 * This file is part of fly3949/flarum-ext-sso.
 *
 * Copyright (c) 2020 Fly3949.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Fly3949\SSO;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/resources/less/admin.less'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\Routes('forum'))
        ->get('/session/sso_login', 'session.sso_login', Controllers\SsoController::class),
//        ->get('/session/test', 'session.test', Controllers\TestController::class),

    function (Dispatcher $events) {
        $events->subscribe(Listener\AddLogoutRedirect::class);
        $events->subscribe(Listener\LoadSettingsFromDatabase::class);
    },
];
