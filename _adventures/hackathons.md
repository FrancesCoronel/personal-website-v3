---
title: "Hackathons 🔨️"
excerpt: "Do or do not. There is no try. -Yoda"
permalink: /hackathons/
header:
    image: https://fvcproductions.files.wordpress.com/2016/02/12771707_1076383859078958_1519560316826557331_o.jpg
comments: false
---

## I've been lucky enough to have attended {{ site.hackathons | size }} super fun hackathons so far, with plans to attend more in the future!

> Hackathon activity can also be found on [my Devpost profile](https://devpost.com/fvcproductions "Devpost").
>
> To see hackathons I've spoken at and not just attended, head over to [my speaking page](https://fvcproductions.com/services/speaking/ "Speaking")!

<div class="grid__wrapper">
    {% assign sorted_hackathons = (site.hackathons | sort: 'date') | reverse %}
    {% for post in sorted_hackathons %}
        {% include archive/single.html type="grid" %}
    {% endfor %}
</div>