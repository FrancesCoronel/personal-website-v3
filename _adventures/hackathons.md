---
title: "Hackathons 🛠"
excerpt: "Hackathons I've participated in."
permalink: /hackathons/
header:
  image: https://fvcproductions.files.wordpress.com/2016/07/img_0493.jpg
  teaser: https://fvcproductions.files.wordpress.com/2016/07/img_0493.jpg
comments: false
---

<div class="grid__wrapper">
    {% assign sorted_hackathons = (site.hackathons | sort: 'date') | reverse %}
    {% for post in sorted_hackathons %}
        {% include archive_item/single.html type="grid" %}
    {% endfor %}
</div>