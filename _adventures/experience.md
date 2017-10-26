---
title: "Experience 💼️"
excerpt: "Don't cry because it's over, smile because it happened. -Dr. Seuss"
permalink: /experience/
header:
    image: https://fvcproductions.files.wordpress.com/2016/07/accentureslc-1.jpeg
comments: false
---

## I've had {{ site.experience| size }} job roles so far!

<div class="grid__wrapper">
{% assign sorted_experience = site.experience | sort: 'date' | reverse %}{% for post in sorted_experience %}{% include archive/single.html type="grid" %}{% endfor %}
</div>