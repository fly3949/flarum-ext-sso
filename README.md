# Flarum SSO

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/fly/flarum-ext-sso.svg)](https://packagist.org/packages/fly3949/flarum-ext-sso)

A [Flarum](http://flarum.org) extension. A SSO extension for flarum.

### !!! Attention !!!

It is NOT fully tested. DON'T install it in production.

### Installation

Use [Bazaar](https://discuss.flarum.org/d/5151-flagrow-bazaar-the-extension-marketplace) or install manually with composer:

```sh
composer require fly3949/flarum-ext-sso
```

### How To Use

After installation, you should generate a secret key (strong enough) and fill it into the extension setting page.

Then, in your app, redirect your user to the login url:

```
https://example.com/session/sso_login?
    email=example@example.com &
    id=1 &
    username=example &
    time=1591359188 &
    signature=3ec02dd23291fbed8faac4cef71b5f284c0ff955cc1d27f5e30efabe4ee40008
```

Here is the example code (in a Laravel app):

```php
$email = 'example@example.com';
$id = 1;
$username = 'example';
$now = Carbon::now()->timestamp;
$secret = env('FLARUM_SSO_KEY'); // for example: VRSW1xDk1e1gsC8zIOaOiJhg6xTKrqm4o6Gt7LAS

$data = [
    'email' => $email,
    'id' => $id,
    'username' => $username,
    'time' => $now,
    'signature' => hash_hmac('sha256', $email . $id . $username . $now, $secret)
];

$query = http_build_query($data);

return redirect('https://example.com/session/sso_login?' . $query);
```

### Updating

```sh
composer update fly3949/flarum-ext-sso
```

### Links

- [Packagist](https://packagist.org/packages/fly3949/flarum-ext-sso)

### Thanks To

- [maicol07/flarum-ext-sso](https://github.com/maicol07/flarum-ext-sso)
