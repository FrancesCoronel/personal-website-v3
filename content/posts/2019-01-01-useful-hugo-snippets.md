---
title: Useful Hugo & Bulma Snippets
date: 2019-03-10
description: A couple of useful Hugo snippets used with the Bulma CSS framework. 🧠
toc: true
image: https://i.imgur.com/RFitS9U.png
categories:
  - blog
tags:
  - hugo
  - bulma
---

The HTML Liquid snippets are optimized for use with the [Hugo static site generator](https://gohugo.io/) and the [Bulma CSS framework](https://bulma.io/).

## Archive

```html
{{ $regularPages := .Site.RegularPages }}
<div class="table-border-none">
  <h2>
    ✒️ I've written about {{ len $regularPages }} different things so far.
  </h2>
  <!-- Pages -->
  {{ range $regularPages.GroupByDate "2006" }}
  <!-- Line Separator - Year -->
  <!-- Check for No Date -->
  {{ if not (eq .Key "0001") }}
  <!-- Year -->
  <h3>{{ .Key }}</h3>
  <!-- Table -->
  <table class="table">
    <tbody>
      {{ range .Pages }}
      <tr>
        <td>{{ dateFormat "January 2" .Date }}</td>
        <td><a href="{{ .RelPermalink }}">{{ .Title }}</a></td>
      </tr>
      {{ end }}
    </tbody>
  </table>
  {{ end }}
  <!-- End - Range - Year -->
  {{ end }}
  <!-- End Message -->
  {{ partial "content/list/end-message.html" . }}
</div>
```

## Navbar

```html
{{ $currentPage := . }}

<nav class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
  <div class="container is-fluid">
    <!-- Brand -->
    <div class="navbar-brand">
      <!-- Logo -->
      <a class="navbar-item" href="{{ "/" | absLangURL }}">
        <img src="/assets/img/logos/logo-square.png" height="128" alt="{{ .Title }}">
      </a>
      <!-- Left Icons -->
      <!-- Hidden on Desktop, Mobile Only -->
      <div class="navbar-item is-hidden-fullhd">
        <div class="buttons">
          {{ range .Site.Menus.social }}
          <a class="button is-white" href="{{ .URL }}" target="_blank" rel="noopener">
            {{ if .Identifier }}<i class="{{ .Identifier }}" alt="{{ .Name }}" title="{{ .Name }}"></i>{{ end }}
          </a>
          {{ end }}
        </div>
      </div>
      <!-- Hamburger Menu -->
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <!-- Main Menu -->
    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start">
        {{ range .Site.Menus.main }}
        {{ if .HasChildren }}
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link{{ if (eq $currentPage.URL .URL) }} is-active{{ end }}" href="{{ .URL | relLangURL }}">
            {{ if .Identifier }}<i class="{{ .Identifier }}" alt="{{ .Name }}"></i> {{ end }}{{- .Name -}}
          </a>
          <div class="navbar-dropdown is-size-7">
            {{ range .Children }}
            <a class="navbar-item{{ if (eq $currentPage.URL .URL) }} is-active{{ end }}" href="{{ .URL | relLangURL }}">
              {{ if .Identifier }}<i class="{{ .Identifier }}" alt="{{ .Name }}"></i>{{ end }} {{ .Name }}
            </a>
            {{ end }}
          </div>
        </div>
        {{ else }}
        <a class="navbar-item{{ if (eq $currentPage.URL .URL) }} is-active{{ end }}" href="{{ .URL | absLangURL }}">
          {{- if .Identifier -}}<i class="{{ .Identifier }}" alt="{{ .Name }}"></i>{{- end -}} {{ .Name }}
        </a>
        {{ end }}
        {{ end }}
      </div>
      <div class="navbar-end is-hidden-touch">
        <div class="navbar-item">
          <div class="buttons">
            {{ range .Site.Menus.social }}
            <a class="button is-white" href="{{ .URL }}" target="_blank" rel="noopener">
              {{ if .Identifier }}<i class="{{ .Identifier }}" alt="{{ .Name }}" title="{{ .Name }}"></i>{{ end }}
            </a>
            {{ end }}
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
```

## Tags & Categories

```html
{{ if or (or (.Params.tags) (.Params.categories)) }}
<!-- Taxonomy -->
<div class="columns">
  <!-- Categories -->
  {{ if .Params.categories }}
  <div class="column">
    <h3><a href="/categories/"> 📂 {{ i18n "categories" }}</a></h3>
    <ul>
      {{ range $category := .Params.categories }}
      <li>
        <a href="/categories/{{ $category | urlize }}/" title="{{ $category }}">
          {{ $category }}
        </a>
      </li>
      {{ end }}
    </ul>
  </div>
  {{ end }}
  <!-- Tags -->
  {{ if .Params.tags }}
  <div class="column">
    <h3><a href="/tags/"> 📌 {{ i18n "tags" }}</a></h3>
    <ul>
      {{ range $tag := .Params.tags }}
      <li>
        <a href="/tags/{{ $tag | urlize }}/" title="{{ $tag }}"> {{ $tag }} </a>
      </li>
      {{ end }}
    </ul>
  </div>
  {{ end }}
</div>
{{ end }}
```

## SEO

```html
<!-- Series -->
<!-- Add prefetch and prerender on section pages. Works especially well for articles or blog posts in a series -->
{{ if .IsPage }}
<!-- Previous Section -->
{{ if .PrevInSection }}
<link rel="prefetch" href="{{ .PrevInSection.Permalink }}" />
<link rel="prerender" href="{{ .PrevInSection.Permalink }}" />
<link rel="prev" href="{{ .PrevInSection.Permalink }}" /> {{ end }}
<!-- Next Section -->
{{ if .NextInSection }}
<link rel="prefetch" href="{{ .NextInSection.Permalink }}" />
<link rel="prerender" href="{{ .NextInSection.Permalink }}" />
<link rel="next" href="{{ .NextInSection.Permalink }}" /> {{ end }} {{ end }}
<!-- Canonical -->
<link rel="canonical" href="{{ .Permalink | safeURL }}" />
<!-- RSS -->
{{ if .RSSLink }}
<link
  rel="alternate"
  type="application/rss+xml"
  title="{{ .Site.Title }}"
  href="{{ .RSSLink }}"
/>
{{ end }}
<!-- Alternative Output -->
{{ range .AlternativeOutputFormats -}}
<link
  rel="{{ .Rel }}"
  type="{{ .MediaType.Type }}"
  href="{{ .Permalink | safeURL }}"
/>
{{ end -}}
```

## Show Posts From Specific Category

```html
<!-- Variables -->
{{ $blog := ($.Site.Taxonomies.categories.blog).Pages }}
<!-- Blog -->
<p>{{ len $blog}} blog posts written</p>
<div class="columns is-multiline">
  {{ range $blog }} {{ if .Date.Before now }}
  <div
    class="column is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd"
  >
    {{ partial "card.html" . }}
  </div>
  {{ end }} {{ end }}
</div>
```

## Table of Contents

```html
{{- if .Params.toc }}
<aside class="menu">
  <p class="menu-label">Table of Contents</p>
  <div class="menu-list is-size-7">
    {{ .TableOfContents }}
  </div>
</aside>
{{- end }}
```
