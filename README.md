# fvcproductions.github.io

[![Github Issues](https://img.shields.io/github/issues/fvcproductions/fvcproductions.github.io.svg?style=flat-square)](https://github.com/fvcproductions/fvcproductions.github.io/issues) [![GitHub  Pull-Requests](https://img.shields.io/github/issues-pr/fvcproductions/fvcproductions.github.io.svg?style=flat-square)](https://github.com/fvcproductions/fvcproductions.github.io/pulls) [![MIT License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) [![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat-square)](http://paypal.me/fvcproductions)

My blog and portfolio all in one.

- View this project via GitHub Pages at [fvcproductions.github.io](fvcproductions.github.io)

## Table of Contents

- [Installation](#installation)
- [Features](#features)
    + [Form](#form)
    + [Function](#function)
    + [In Progress](#in-progress)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits](#credits)

## Installation

Use the following commands to locally serve this website.

```shell
$ bundle install
$ bundle exec jekyll serve
```

For faster rendering...

```shell
$ bundle exec jekyll serve --watch --limit_posts 1
```

If you aren't running the latest version:

```shell
$ gem update jekyll
```

I use CodeKit 3 (`config.codekit3`) to handle compilation.

For search integration with Algolia, I can either run the following command or set it up automatically using TravisCI.

```shell
ALGOLIA_API_KEY='API_KEY' bundle exec jekyll algolia push
```

## Features

### Form

- Black and white scheme
- Rectangle based
- Minimal
- Footer - 350px height
- 50px space between title and link to more
- 100px space between sections

### Function

- Search with Algolia
- Like & comment integration with Disqus
- Site and page views with Google Analytics
- Use IFTTT to automatically publish new posts & portfolio items to Twitter & LinkedIn

### In Progress

- making Algolia search work
- making favicon bigger

## Usage

This website was created from the bottom-up and is a migration from my Wordpress website.

## Contributing

I am always looking for ways to make my website more modular, lean, and clean.

So if you have any suggestions, please feel free to contribute!

> To get started...

- 🍴 Fork this repo [here](https://github.com/fvcproductions/fvcproductions.github.io#fork-destination-box)
- 🔨 Hack away
- 👥 Add yourself as a contributor under credits
- 🔧 Make a pull request [here](https://github.com/fvcproductions/fvcproductions.github.io/compare)
- 🎉 Get your pull request approved - success!

Or just [create an issue](https://github.com/fvcproductions/fvcproductions.github.io/issues) - any little bit of help counts! 😊

## Credits

- [FVCproductions](http://fvcproductions.com) 🍓🍫
- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes)