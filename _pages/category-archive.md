---
layout: archive
permalink: /categories/
title: "Posts by Category"
excerpt: "These are all my blog posts sorted by category."
---

{% include group-by-array collection=site.posts field="categories" %}

{% for category in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ category | slugify }}" class="archive__subtitle">{{ category }}</h2>
  {% for post in posts %}
    {% include archive_item/single.html %}
  {% endfor %}
{% endfor %}