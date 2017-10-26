---
title: "Portfolio 💼️"
permalink: /portfolio/
excerpt: "What I work on across the interwebs."
---

## I've worked on a total of {{ site.projects | size }} projects so far!

> This is still a work in progress! 😅
>
> When I migrated from Wordpress to Jekyll, a lot of the formatting screwed up so I'm working on sanitizing them.

<div class="grid__wrapper">
{% assign sorted_projects = site.projects | sort: 'date' | reverse %}{% for post in sorted_projects %}{% include archive/single.html type="grid" %}{% endfor %}
</div>