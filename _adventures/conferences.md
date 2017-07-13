---
title: "Conferences <i class='twa twa-ticket'></i>"
excerpt: "We don't meet anyone by chance."
permalink: /conferences/
comments: false
header:
    image: https://fvcproductions.files.wordpress.com/2016/09/photo1.jpg
---

## Conference activity can also be found on [my Lanyrd profile](http://lanyrd.com/profile/fvcproductions/ "Lanyrd").

> To see events I've spoken at and not just attended, head over to [my speaking page](http://fvcproductions.com/services/speaking/ "Speaking")!

<div class="grid__wrapper">
    {% assign sorted_conferences = (site.conferences | sort: 'date') | reverse %}
    {% for post in sorted_conferences %}
        {% include archive/single.html type="grid" %}
    {% endfor %}
</div>