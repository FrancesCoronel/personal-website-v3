---
title: "Meetup Dice \U0001F3B2"
date: 2016-01-11 00:00:00 +0000
description: A simple Node.js application for picking a random RSVP’d member from
  a Meetup.
banner: https://i.imgur.com/fvvVFr9.png
categories:
- portfolio

---
# Overview

[![Meetup Dice -
Winner](https://fvcproductions.files.wordpress.com/2016/01/meetupdice-winner.png)](https://fvcproductions.files.wordpress.com/2016/01/meetupdice-winner.png) Meetup Dice - Winner

## Check out the web app at [`meetfvc.herokuapp.com`](https://meetfvc.herokuapp.com).

So for my [Norfolk.js Meetup group](https://meetup.com/NorfolkJS), they like to give out prizes through a raffle every [Meetup](https://meetup.com). The method they used was messy with a simple console application (I think). Anyway, I just wanted a better visual experience for choosing a random person to give a prize to.

Right now, unfortunately, this web app just works for the Meetup groups I’m a part of but eventually, I’d like to be able to use the [Meetup API](https://www.meetup.com/meetup_api/) to get it to work for anybody’s Meetup profile.

#### Full credit goes to the contributors below who originally created the app. It had a pretty rough layout though so I made a lot of visual changes.

> Basically, it’s simple Node.js application for picking a random RSVP’d member from a Meetup.

### Screenshots

TODO: [gallery type="rectangular" size="full" ids="3859,3860,3861,3862" ]

### Setup

        MEETUP_API_KEY=1234567890 node web.js

### Deployment

To deploy on Heroku with your API key (which will publicly display all of your Meetups):

        heroku apps:create my-app-name
        git push heroku master
        heroku config:set MEETUP_API_KEY=1234567890

### Tools

* [Bootstrap 4](https://v4-alpha.getbootstrap.com/)
* [Sublime Text](https://github.com/fvcproductions/Sublime)
* [CodeKit](https://incident57.com/codekit/)

## Contributors

* [Harlan Harris](https://github.com/HarlanH)
* [Devin Castro](https://github.com/ddcast)
* [Chetan Shenoy](https://github.com/cshenoy)
* [Sheng Zhao](https://github.com/itsheng)
* [FVCproductions](https://github.com/fvcproductions)

### Contributing

> To get started…

* 🍴 Fork me.
* 🔨 Hack away.
* 🔃 Create a new pull request.

## GitHub Repo

* View the project at [`github.com/fvcproductions/meetup-dice`](https://github.com/fvcproductions/meetup-dice).
* Forked from [`github.com/datacommunitydc/meetup-dice`](https://github.com/datacommunitydc/meetup-dice).
