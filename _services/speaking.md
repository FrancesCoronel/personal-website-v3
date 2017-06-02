---
title: "Speaking 💬"
excerpt: "What I have spoken about."
permalink: /speaking/
header:
    image: https://fvcproductions.files.wordpress.com/2015/11/12219321_941445252602315_1897049180671471124_n.jpg
comments: false
---

<div class="grid__wrapper">
    {% assign sorted_speaking = (site.speaking | sort: 'date') | reverse %}
    {% for post in sorted_speaking %}
        {% include archive_item/single.html type="grid" %}
    {% endfor %}
</div>