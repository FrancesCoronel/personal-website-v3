---
title: "Blog 📝️"
permalink: /blog/
excerpt: "My ramblings on reality, tech, and creative pursuits."
---

## I've written a total of {{ site.posts | size }} blog posts so far!

<div class="grid__wrapper">
    {% for post in site.posts %}
        {% include archive/single.html type="grid" %}
    {% endfor %}
</div>