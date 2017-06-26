---
title: "Adventures <i class='twa twa-airplane'></i>"
permalink: /adventures/
excerpt: "Never say ‘no’ to adventures. Always say ‘yes,’ otherwise, you’ll lead a very dull life."
---

<div class="grid__wrapper">
    {% assign sorted_adventures = (site.adventures | sort: 'title') %}
    {% for post in sorted_adventures %}
        {% include archive/single.html type="grid" %}
    {% endfor %}
</div>