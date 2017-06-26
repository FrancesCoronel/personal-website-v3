---
title: "Programs <i class='twa twa-rocket'></i>"
excerpt: "I have never let my schooling interfere with my education. - Mark Twain"
permalink: /programs/
header:
    image: https://fvcproductions.files.wordpress.com/2015/11/11821194_439697182900579_299304949_n-1-e1457320708289.jpg
comments: false
---

<div class="grid__wrapper">
    {% assign sorted_programs = (site.programs | sort: 'date') | reverse %}
    {% for post in sorted_programs %}
        {% include archive/single.html type="grid" %}
    {% endfor %}
</div>