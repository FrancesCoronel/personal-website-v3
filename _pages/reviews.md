---
title: "Reviews ✅️"
permalink: /reviews/
excerpt: "All the nice things folks have had to say."
---

<div class="grid__wrapper">
  {% assign sorted_reviews = (site.reviews | sort: 'date') | reverse %}
  {% for post in sorted_reviews %}
    {% include archive/single.html type="grid" %}
  {% endfor %}
</div>