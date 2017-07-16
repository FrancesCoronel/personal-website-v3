---
layout: archive
title: "Services 💡"
permalink: /services/
excerpt: "What you can hire me for."
---

<div class="grid__wrapper">
  {% assign sorted_services = (site.services | sort: 'title') %}
  {% for post in sorted_services %}
    {% include archive/single.html type="grid" %}
  {% endfor %}
</div>