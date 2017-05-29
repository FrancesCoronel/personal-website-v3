---
title: "Portfolio 💼"
permalink: /portfolio/
excerpt: What I work on across the interwebs.
---

<div class="grid__wrapper">
	{% assign sorted_portfolio = (site.portfolio | sort: 'date') | reverse %}
    {% for post in sorted_portfolio %}
        {% include archive_item/single.html type="grid" %}
    {% endfor %}
</div>