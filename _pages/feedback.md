---
layout: archive
title: "Feedback 💖"
permalink: /feedback/
author_profile: false
---

{% include base_path %}

<div class="grid__wrapper">
  {% assign sorted_testimonials = (site.testimonials | sort: 'date') | reverse %}
  {% for post in sorted_testimonials %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>