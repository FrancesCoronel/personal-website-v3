---
title: "Portfolio 💼️"
permalink: /portfolio/
excerpt: "What I work on across the interwebs."
---

## I've worked on a total of {{ site.portfolio | size }} projects so far!

> This is still a work in progress! 😅
>
> When I migrated from Wordpress to Jekyll, a lot of the formatting screwed up so I'm working on sanitizing them.

<div class="grid__wrapper">
{% assign sorted_portfolio = site.portfolio | sort: 'date' | reverse %}{% for post in sorted_portfolio %}{% include archive/single.html type="grid" %}{% endfor %}
</div>