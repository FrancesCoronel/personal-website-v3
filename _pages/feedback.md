---
title: "Feedback 💖"
permalink: /feedback/
excerpt: "All the nice things folks have had to say."
---

<div class="grid__wrapper">
  {% assign sorted_feedback = (site.feedback | sort: 'date') | reverse %}
  {% for post in sorted_feedback %}
    {% include archive/single.html type="grid" %}
  {% endfor %}
</div>