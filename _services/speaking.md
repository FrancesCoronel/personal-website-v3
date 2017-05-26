---
title: "Speaking 💬"
excerpt: "What I've spoken about."
permalink: /services/speaking/
comments: false
header:
  image: https://fvcproductions.files.wordpress.com/2015/11/12219321_941445252602315_1897049180671471124_n.jpg
  teaser: https://fvcproductions.files.wordpress.com/2015/11/12219321_941445252602315_1897049180671471124_n.jpg
---

## Presentation decks can be found on <a href="http://speakerdeck.com/fvcproductions" target="_blank">my SpeakerDeck profile</a> while conference activity can be found on <a href="http://lanyrd.com/profile/fvcproductions/" target="_blank">my Lanyrd profile</a>.

### Future Speaking Events

> None right now, but I'm looking to make that change so [contact me](http://fvcproductions.com/contact)!

<div class="grid__wrapper">
    {% assign sorted_speaking = (site.speaking | sort: 'date') | reverse %}
    {% for post in sorted_speaking %}
        {% include archive_item/single.html type="grid" %}
    {% endfor %}
</div>