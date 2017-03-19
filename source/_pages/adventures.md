---
title: "Adventures ✈"
permalink: /adventures/
excerpt: "Everyday is an adventure."
---

{% include base_path %}

<div class="grid__wrapper">
    {% assign sorted = (site.adventures | sort: 'date') | reverse %}
    {% for post in sorted %}
        {% include archive-single.html type="grid" %}
    {% endfor %}
</div>