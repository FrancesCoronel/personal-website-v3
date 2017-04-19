---
title: "Adventures ✈"
permalink: /adventures/
excerpt: "Never say ‘no’ to adventures. Always say ‘yes,’ otherwise, you’ll lead a very dull life."
---

{% include base_path %}

<div class="grid__wrapper">
    {% assign sorted = (site.adventures | sort: 'date') | reverse %}
    {% for post in sorted %}
        {% include archive-item/single.html type="grid" %}
    {% endfor %}
</div>