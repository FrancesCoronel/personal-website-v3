---
title: "Blog 📝️"
permalink: /blog/
excerpt: "My ramblings on reality, tech, and creative pursuits."
---

## I've written a total of {{ site.posts | size }} blog posts so far!

> This is still a work in progress! 😅

> When I migrated from Wordpress to Jekyll, a lot of the formatting screwed up so I'm working on sanitizing them.

<div class="grid__wrapper">
    {% for post in site.posts %}
        {% include archive/single.html type="grid" %}
    {% endfor %}
</div>