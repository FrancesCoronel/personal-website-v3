---
title: Launch a Todo App Using Laravel Homestead ✅️
date: 2017-01-13
excerpt: Our goal? To launch a simple to-do app using Laravel Homestead on macOS.
header:
    image: https://fvcproductions.files.wordpress.com/2017/01/home.png
tags:
    - laravel
    - laravel 5
    - laravel 5.3
    - todo
    - todo app
    - todo app laravel
---

## Our goal? To launch a simple to-do app using Laravel Homestead on macOS.

This is **QUITE a tedious process** (if you ask me), but I'll try to condense it into a simple 30 step process (LOL). 😂

This is how the completed app looks like.

## You will need...

- Basic **Terminal** Knowledge
  - I will be referring to a lot of commands you'll have to type in.

## Installation Process

1. Download [**Vagrant**](https://www.vagrantup.com/)
2. Download [**VirtualBox**](https://www.virtualbox.org/wiki/Downloads)
3. Clone or download [my sample to-do app](https://github.com/fvcproductions/ds-todos)
    - **Option 1.** Use a GitHub client like [Tower](https://git-tower.com)
    - **Option 2.** `git clone https://github.com/fvcproductions/ds-todos.git`
    - Make note of the file path for this repo by using `pwd`, i.e. `~/Dropbox/github/ds-todos`
4. `cd ~ && vagrant box laravel/homestead`
5. They will ask for the provider so we are going to enter in `1` since we are using **VirtualBox**
6. `cd ~ && mkdir Code`
    - We will need this folder later
7. Clone down **Laravel Homestead** and install it in a folder called `Homestead` using`cd ~ && git clone https://github.com/laravel/homestead.git Homestead`
8. Initialize Homestead using `cd Homestead && bash init.sh`
9. While still in `~/Homestead` folder, `sudo nano /private/etc/hosts` to edit the hosts file and add on [these two lines (refer below)](#hosts)
10. Create a key to authorize ssh using `cd ~/Homestead && ssh-keygen -t rsa -b 4096`
11. Hit **Enter** twice (you don't have to enter a password)
12. Time to start up **Vagrant** using `cd ~/Homestead && vagrant up` and enter password when asked
13. Edit the `Homestead.yaml` file to configure locations of code using `nano ~/.homestead/Homestead.yaml` and make the`folder` and `sites` sections [look like this (refer below)](#yaml-config)
    - ❗ Anytime you edit this `Homestead.yaml` file, you have to perform the next 3 steps in order for it to work, so let's go ahead and do those now.
14. Stop vagrant temporarily by using `vagrant halt`
15. Reload `yaml` configurations by using `vagrant reload --provision` and enter password when asked
16. While still in `~/Homestead` folder, use `vagrant ssh` to enter into your `Vagrant` setup
17. Enter into your `Code` folder you created earlier and then your `ds-todos` app using `cd ~/Code/ds-todos`
18. While you're in your `ds-todos` folder, use `composer install` to install the necessary dependencies for the to-do app
19. You will also need to configure your environment for `ds-todos` by creating an `.env` file and [typing the following in (refer below)](#env) using `touch .env && nano .env`
20. Use `php artisan migrate` to migrate the app data over
21. Then use `php artisan db:seed` to seed the database
22. Finally, use `php artisan key:generate` to generate an app key for security purposes
23. At this point, you should be able to head over to `https://ds-todos.app` in your browser and marvel at being able to set this all up! 🎉

## Optional - Compiling SASS

If you want to compile `SASS` files, you will first have to install all npm dependencies using `npm i`. Then just perform a `gulp watch` and you're good to go. Anytime you edit the `SASS` files, `gulp` will check it and compile it down to `CSS`.

### Hosts

```text
192.168.10.10  homestead.app
192.168.10.10  ds-todos.app
```

> [Go to the next step.](#after-hosts)

### YAML Config

❗ Since my `ds-todos` code is located in `~Dropbox/github/ds-todos`, that's where I map it to. However, you probably have it located elsewhere so make sure to get the right file path of that app using `pwd` in **Terminal**.

```yaml
folders:
    - map: ~/Code
        to: /home/vagrant/Code
        type: "nfs"
    - map: ~/Dropbox/github/ds-todos
        to: /home/vagrant/Code/ds-todos
        type: "nfs"

sites:
    - map: homestead.app
        to: /home/vagrant/Code/Laravel/public
    - map: ds-todos.app
        to: /home/vagrant/Code/ds-todos/public
```

> [Go to the next step.](#after-yaml)

### [Environment Setup]

```text
APP_ENV=local
APP_DEBUG=true
APP_KEY=SomeRandomString
APP_URL=https://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret

CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_DRIVER=sync

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
```

> [Go to the next step.](#after-env)

### Helpful Resources

- [Great video on installation process](https://vimeo.com/164946495)
- [Laravel Homestead Documentation](https://laravel.com/docs/5.3/homestead)