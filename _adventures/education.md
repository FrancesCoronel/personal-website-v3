---
title: "Education 🎓️"
excerpt: "Knowledge is power."
permalink: /education/
header:
    image: //fvcproductions.files.wordpress.com/2016/09/cornell.jpg
    caption: "Photo credit: [**Cornell Tech**](//tech.cornell.edu)"
comments: false
---

## Below is an <a href="//airtable.com" title="Airtable" target="_blank" rel="noopener">Airtable</a> with a snapshot of all the college courses I've ever taken throughout my academic career.

<div class="airtable-preview">
    <iframe class="airtable-embed" src="//airtable.com/embed/shrsQw3LAJ5W3FnlT?backgroundColor=gray&layout=card&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
</div>

## I've attended a total of {{ site.education | size }} educational institutions.

<div class="grid__wrapper">
{% assign sorted_education = site.education | sort: 'date' | reverse %}{% for post in sorted_education %}{% include archive/single.html type="grid" %}{% endfor %}
</div>