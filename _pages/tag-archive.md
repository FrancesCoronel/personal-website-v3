---
layout: archive
permalink: /tags/
title: "Posts by Tags"
excerpt: "These are my blog posts sorted by tag."
---

{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
  {% for post in posts %}
    {% include archive/single.html %}
  {% endfor %}
{% endfor %}