---
title: "Books 📚️"
permalink: /books/
description: "Books I've read that were ridiculously memorable."
type: draft
---

<div class="grid__wrapper">
    {% assign sorted_books = (site.books | sort: 'title') %}
    {% for post in sorted_books %}
        {% include archive/single.html type="grid" %}
    {% endfor %}
</div>