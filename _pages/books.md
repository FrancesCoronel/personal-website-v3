---
title: "Books <i class='twa twa-books'></i>"
permalink: /books/
excerpt: "Books I've read and were memorable."
---

<div class="grid__wrapper">
    {% assign sorted_books = (site.books | sort: 'title') %}
    {% for post in sorted_books %}
        {% include archive/single.html type="grid" %}
    {% endfor %}
</div>