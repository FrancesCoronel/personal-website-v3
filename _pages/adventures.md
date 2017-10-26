---
title: "Adventures ✈️"
permalink: /adventures/
excerpt: "Never say 'no' to adventures. Always say 'yes,' otherwise, you'll lead a very dull life."
---

{% assign sorted_adventures = site.adventures | sort: 'title' %}

<div class="grid__wrapper">
  {% for post in sorted_adventures %}
    {% include archive/single.html type="grid" %}
  {% endfor %}
</div>