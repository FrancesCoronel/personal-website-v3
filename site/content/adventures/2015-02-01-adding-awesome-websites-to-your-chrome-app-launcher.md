---
title: "Adding Awesome Websites To Your Chrome App Launcher"
date: 2015-02-01
description: "Add all your favorite websites to Chrome's App Launcher."
banner: //fvcproductions.files.wordpress.com/2015/02/c10fchrome_mac_app_launcher_0.jpg?w=1024&h=435&crop=1
tags:
    - 128x128
    - alchemize
    - awwwards
    - bento
    - briefbox
    - chrome
    - chrome app launcher
    - chrome extensions
    - chrome web store
    - codepen
    - codrops
    - codyhouse
    - coment.me
    - DropBox
    - egghead.io
    - extension
    - extensions
    - famo.us university
    - gettemplate
    - google+
    - googl
    - u
    - hackathon starter
    - html5up
    - icon
    - info:onepagelove.com
    - launcher
    - load unpacked extension
    - manifest.json
    - one page love
    - online image editor
    - pattern library
    - pixel icon generator
    - png
    - png files
    - search query
    - shrthnd
    - sitedrop
    - Sublime Text 3
    - template
    - the stocks
    - toolbar
    - typeform
    - very nice sites
    - web store
    - Websites
categories:
    - blog
---

# So in your [launcher](//chrome.google.com/webstore/launcher), you have all these lovely links to useful Google Apps and any apps you can find in the Chrome Web Store.

![](//core0.staticworld.net/images/article/2013/02/applaunchersplash-100026310-orig.png)

Unfortunately, if you have a website you visit regularly but isn't available in the Chrome Web Store, there's not much you can do.

You can always use **bookmarks,** but if you're like me, you know too many bookmarks tend to suck and end up just being a useless clutter of links you never end up actually benefitting from.

So all in all, it looks like clutter and a ridiculous \# of bookmark folders are your best options.

![](//developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_496x150.png)

**UNLESS YOU COULD ADD YOUR OWN LINKS TO THE APP LAUNCHER.**

**DUN DUN DUN…………………**

Tutorial time.

## Things You'll Need

> icons below were created using this [Pixel Icon Generator](//www.iconj.com/pixel_icon_generator.php)

![](//fvcproductions.files.wordpress.com/2015/02/chrome.png)

[Chrome](//www.google.com/chrome/) (derp)

![](//fvcproductions.files.wordpress.com/2015/02/sublime1.png)

[A text editor](//www.sublimetext.com/) (I prefer Sublime Text)

![](//fvcproductions.files.wordpress.com/2015/02/google.png)

[Google-fu](//www.urbandictionary.com/define.php?term=google-fu) (Just a little!)

# Step 1

> Choose which website you want to add! 😍
>
> > I chose [One Page Love](//onepagelove.com/), which is a _One Page_ website design gallery showcasing the best _Single Page_ website designs from around the web. ![](//fvcproductions.files.wordpress.com/2015/02/one-page-love.png)

# Step 2

> Create a folder with he name of the site you want to add to your Chrome App Launcher.
>
> ![](//fvcproductions.files.wordpress.com/2015/02/folders.png)
>
> > You're going to end up having two files with each folder/app you create:

* `manifest.json` which holds all the information about your app
* `.png` file which is going to be a **128x128** icon that will represent your website

> > The png can actually be any size, but 128x128 is ideal.
> >
> > You'll need both for this to work (there can be errors!).

## Step 3

> Open up your text editor and type in the following:

    {
        "manifest_version": 2,

        "name": "One Page Love",

        "description": "One Page Love is a One Page website design gallery showcasing the best Single Page website designs from around the web.",

        "version": "1.0",

        "icons":
        {
            "128": "onepagelove.png"
        },

        "app":
        {
            "urls":
            [
                "//onepagelove.com/"
            ],

            "launch":
            {
                "web_url": "//onepagelove.com/"
            }
        },

        "permissions":
        [
            "unlimitedStorage",
            "notifications"
        ]
    }

> The above example works with the _One Page Love_ website.
>
> ![](//fvcproductions.files.wordpress.com/2015/02/screenshot-2015-02-01-19-43-50.png)

## Step 4

> There are 4 variables you're going to change to work for your website in the above code:

* `name` : site title
* `description` : site description
* `128` under `icon` : png file name
* `urls` under `app` and the `web_url` under `launch` : site url

> > A handy tip to get the description for the website fast is by using the query `info:onepagelove.com` in Google which will provide information about the url. No spaces, or else it doesn't work.
> >
> > ![](//fvcproductions.files.wordpress.com/2015/02/screenshot-2015-02-01-19-51-41.png)

## Step 5

> Now save this file that you've edited to work with your website as `manifest.json` into the folder you created in **Step 2**.

## Step 6

> Time to get your icon!
>
> > You can accelerate your search by going to `Search tools` &gt; > > `Size` &gt; `Exactly...` &gt; `Width: 128 px, Height: 128 px` and then by typing in `filetype:png` into the Google search to select specifically for PNG files.
> >
> > ![](//fvcproductions.files.wordpress.com/2015/02/screenshot-2015-02-01-20-15-20.png) > > ![](//fvcproductions.files.wordpress.com/2015/02/screenshot-2015-02-01-20-16-32.png)

## Step 7

> You're ready to add the extension!
>
> Head over to `chrome://extensions` or use your toolbar to get there.
>
> > ![](//fvcproductions.files.wordpress.com/2015/02/loading-e1422840256797.png)
>
> Click `Load unpacked extension...`
>
> Choose the folder with your files that you created **Step 4**.

## Step 8

> Your website will now show up in the extensions!
>
> > ![](//fvcproductions.files.wordpress.com/2015/02/extensions.png)
>
> And once it shows up in your extensions, it'll also show up in the `Chrome App Launcher`.
>
> > ![](//fvcproductions.files.wordpress.com/2015/02/complete-e1422839649943.png)
>
> That's it. Congratulations! 😊
