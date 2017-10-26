---
title: "Conferences 🎫️"
excerpt: "We don't meet anyone by chance."
permalink: /conferences/
comments: false
header:
    image: https://i2.wp.com/fvcproductions.files.wordpress.com/2016/07/img_0493.jpg
tags:
    - conferences
    - tech conferences
    - tech conference
    - conference
    - Lanyrd
    - speaking
    - participant
    - summit
    - leadership
---

## I've been lucky enough to have attended {{ site.conferences | size }} conferences so far, with plans to attend more in the future!

> Conference activity can also be found on <a href="https://lanyrd.com/profile/fvcproductions/" target="_blank" rel="noopener" title="Lanyrd">my Lanyrd profile</a>.
>
> To see events I've spoken at and not just attended, head over to [my speaking page](/speaking)!

### Upcoming

- None as of right now, but that'll probably change soon!

<!-- - None as of right now, but that'll probably change soon! -->

### Past

<div class="grid__wrapper">
{% assign sorted_conferences = site.conferences | sort: 'date' | reverse %}{% for post in sorted_conferences %}{% include archive/single.html type="grid" %}{% endfor %}
</div>