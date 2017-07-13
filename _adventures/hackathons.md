---
title: "Hackathons <i class='twa twa-hammer'></i>"
excerpt: "Do or do not. There is no try. -Yoda"
permalink: /hackathons/
header:
    image: https://fvcproductions.files.wordpress.com/2016/02/12771707_1076383859078958_1519560316826557331_o.jpg
comments: false
---

## Hackathon activity can also be found on [my Devpost profile](http://devpost.com/fvcproductions "Devpost").

> To see hackathons I've spoken at and not just attended, head over to [my speaking page](http://fvcproductions.com/services/speaking/ "Speaking")!

<div class="grid__wrapper">
    {% assign sorted_hackathons = (site.hackathons | sort: 'date') | reverse %}
    {% for post in sorted_hackathons %}
        {% include archive/single.html type="grid" %}
    {% endfor %}
</div>