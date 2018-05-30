---
title: Meetup Dice 🎲
date: 2016-01-11
description: A simple Node.js application for picking a random RSVP’d member from a Meetup.
banner: https://i.imgur.com/fvvVFr9.png
aliases:
  - /portfolio/meetup-dice/
categories:
  - portfolio
  - web
  - oss
tags:
  - meetups
  - heroku
---

![Meetup Dice - Winner](https://fvcproductions.files.wordpress.com/2016/01/meetupdice-winner.png)

So for my [Norfolk.js Meetup group](//meetup.com/NorfolkJS), they like to give out prizes through a raffle every [Meetup](//meetup.com). The method they used was messy with a simple console application (I think). Anyway, I just wanted a better visual experience for choosing a random person to give a prize to.

Right now, unfortunately, this web app just works for the Meetup groups I’m a part of but eventually, I’d like to be able to use the [Meetup API](//www.meetup.com/meetup_api/) to get it to work for anybody’s Meetup profile.

Full credit goes to the contributors below who originally created the app. It had a pretty rough layout though so I made a lot of visual changes.

Basically, it’s simple Node.js application for picking a random RSVP’d member from a Meetup.

<blockquote class="embedly-card"><h4><a href="http://meetfvc.herokuapp.com/">Meetup Dice</a></h4><p>Pick a random person!</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

## Setup

```bash
MEETUP_API_KEY=1234567890 node web.js
```

## Deployment

To deploy on Heroku with your API key (which will publicly display all of your Meetups):

```bash
heroku apps:create my-app-name
git push heroku master
heroku config:set MEETUP_API_KEY=1234567890
```

## Tools

* [Bootstrap 4](https://v4-alpha.getbootstrap.com/)
* [Sublime Text](https://github.com/fvcproductions/Sublime)
* [CodeKit](https://incident57.com/codekit/)

## Contributors

* [Harlan Harris](https://github.com/HarlanH)
* [Devin Castro](https://github.com/ddcast)
* [Chetan Shenoy](https://github.com/cshenoy)
* [Sheng Zhao](https://github.com/itsheng)
* [FVCproductions](https://github.com/fvcproductions)

## GitHub Repo

<blockquote class="embedly-card"><h4><a href="https://github.com/fvcproductions/meetup-dice">fvcproductions/meetup-dice</a></h4><p>meetup-dice - A simple Node.js application for picking a random RSVP'd member from a Meetup 👥</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
