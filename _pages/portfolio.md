---
title: "Portfolio 💼️"
permalink: /portfolio/
excerpt: "What I work on across the inter webs."
---

<div class="grid__wrapper">
    {% assign sorted_portfolio = (site.portfolio | sort: 'date') | reverse %}
    {% for post in sorted_portfolio %}
        {% include archive/single.html type="grid" %}
    {% endfor %}
</div>