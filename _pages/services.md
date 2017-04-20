---
layout: archive
title: "Services 🛠"
permalink: /services/
---

<div class="grid__wrapper">
  {% assign sorted_services = (site.services | sort: 'title') %}
  {% for post in sorted_services %}
    {% include archive_item/single.html type="grid" %}
  {% endfor %}
</div>