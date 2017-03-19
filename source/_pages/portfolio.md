---
layout: archive
title: "Portfolio 💼"
permalink: /portfolio/
author_profile: false
---

{% include base_path %}

<div class="grid__wrapper">
	{% assign sorted_portfolio = (site.portfolio | sort: 'date') | reverse %}
    {% for post in sorted_portfolio %}
        {% include archive-single.html type="grid" %}
    {% endfor %}
</div>

<!-- <h3>Behance Projects</h3>

<div class="grid__wrapper behance_projects">
</div> -->