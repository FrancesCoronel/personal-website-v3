---
title: {{ replace .TranslationBaseName "-" " " | title }}
date: {{ .Date }}
description: A brief description goes here.
banner: Link to image on Imgur.
# check case type for YAML (bannerLink)
bannerLink: Link image points to (optional).
link: Link article redirects to (optional).
categories:
  - blog
  - conference
  - education
  - experience
  - hackathon
  - program
  - speaking
  - volunteering
tags:
  - insert tags for article
draft: true
# change into custom params
pageLayout:
  alphabetical: true
pageType:
  adventures: true
  archive: true
  awards: true
  blog: true
  contact: true
  portfolio: true
  speaking: true
# set embedly param for script
scripts:
  isotope: true
  noComments: true
  embedly: true
---
