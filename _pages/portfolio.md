---
title: "Portfolio <i class='twa twa-briefcase'></i>"
permalink: /portfolio/
excerpt: "What I work on across the interwebs."
---

<div class="grid__wrapper">
	{% assign sorted_portfolio = (site.portfolio | sort: 'date') | reverse %}
    {% for post in sorted_portfolio %}
        {% include archive/single.html type="grid" %}
    {% endfor %}
</div>