---
title: "Volunteering <i class='twa twa-gift-heart'></i>"
excerpt: "No one has ever become poor by giving. -Anne Frank"
permalink: /volunteering/
header:
    image: https://i2.wp.com/fvcproductions.files.wordpress.com/2015/12/img_2021.jpg
comments: false
---

## I've volunteered with {{ site.volunteering | size }} amazing organizations so far, with plans to volunteer for more in the future!

<div class="grid__wrapper">
    {% assign sorted_volunteering = (site.volunteering | sort: 'date') | reverse %}
    {% for post in sorted_volunteering %}
        {% include archive/single.html type="grid" %}
    {% endfor %}
</div>