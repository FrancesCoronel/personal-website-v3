---
title: View LinkedIn Profiles Without Logging In
date: 2017-02-06
description: You want to view someone on LinkedIn but you don't have a profile and have no desire to create an account. 👀
image: https://i.imgur.com/10PHLUS.png
aliases:
  - /portfolio/2017/02/06/view-linkedin-profiles-without-logging-in/
  - /portfolio/view-linkedin-profiles-without-logging-in/
  - /2017/02/06/view-linkedin-profiles-without-logging-in-/
  - /2017/02/06/view-linkedin-profiles-without-logging-in/
categories:
  - portfolio
tags:
  - tutorial
---

## The Problem

You want to view someone on [LinkedIn](https://linkedin.com/in/fvcproductions) but you don't have a profile and have no desire to create an account.

_Or_ you want to view a profile but without the person knowing and you're definitely not willing to spend all that cash on the premium upgrade which would allow you to do that (it's <!-- prettier-ignore -->$25+/month!!!). 💸 💸 💸

Either way, LinkedIn wants you to sign in and will have an annoying popup that looks like the following:

![LinkedIn Popup](https://i.imgur.com/38oabN0.png)

## The Solution

Let's get rid of this of this annoying popup and continue browsing profiles with 3 simple steps.

> To Note. You will need to use Chrome.

### Step 1. [Download StyleBot as a Chrome extension](https://chrome.google.com/webstore/detail/stylebot/oiaejidbmkiecgbjeifoejpgmdaleoha?hl=en)

![Stylebot ChromeExtension](https://i.imgur.com/aYFu75E.png)

### Step 2. Add a new style

Click on the Stylebot extension and select `Options`.

![Options](https://i.imgur.com/yVoibzs.png)

Select the `Add a new style...` button.

![Add a new style](https://i.imgur.com/so4wcql.png)

Enter `linkedin.com` as the URL and the following CSS code.

> Don't forget to hit `Save`!

![LinkedIn Style](https://i.imgur.com/0XB0v4k.png)

```css
#ad {
  display: none;
}

#advocate-modal {
  background: none;
}

#advocate-modal .modal-content {
  display: none;
}

.reg-upsell {
  display: none;
}

body.advocate-modal-visible {
  overflow: initial;
}
```

### Step 3. That's it! 😁

![Bill Gates](https://i.imgur.com/10PHLUS.png)

> No more ads or popups!

Note in the screenshot above that I have the Stylebot extension enabled and am browsing in `Incognito`.

This way, I can still be logged into LinkedIn but whenever I need to, I can also discretely view profiles without letting the other person know.

#### Troubleshooting

If you are still seeing the annoying popup, make sure that the Stylebot extension is enabled and refresh the page.

Also, make sure the URL of the profile you want to view is formatted as

```txt
https://www.linkedin.com/in/USERNAME_HERE
```

or you may still end up seeing the popup.
