---
title: "Education 🎓"
excerpt: "Knowledge is power."
permalink: /education/
header:
  image: https://fvcproductions.files.wordpress.com/2016/09/cornell.jpg
  teaser: https://fvcproductions.files.wordpress.com/2016/09/cornell.jpg
comments: false
---

> To view all the college courses I've ever taken, feel free to refer to <a href="https://airtable.com/shrsQw3LAJ5W3FnlT" target="_blank">this Airtable</a>.

<div class="grid__wrapper">
    {% assign sorted_education = (site.education | sort: 'date') | reverse %}
    {% for post in sorted_education %}
        {% include archive_item/single.html type="grid" %}
    {% endfor %}
</div>