# fvcproductions.github.io

[![Github Issues](https://img.shields.io/github/issues/fvcproductions/fvcproductions.github.io.svg?style=flat-square)](https://github.com/fvcproductions/fvcproductions.github.io/issues) [![GitHub Pull-Requests](https://img.shields.io/github/issues-pr/fvcproductions/fvcproductions.github.io.svg?style=flat-square)](https://github.com/fvcproductions/fvcproductions.github.io/pulls) [![MIT License](https://img.shields.io/github/license/fvcproductions/readme.svg?style=flat-square)](http://badges.mit-license.org) [![Become a Patron!](https://img.shields.io/badge/Patreon-Become%20a%20Patron!-orange.svg?style=flat-square)](https://www.patreon.com/fvcproductions)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ffvcproductions%2Ffvcproductions.github.io.svg?type=small)](https://app.fossa.io/projects/git%2Bgithub.com%2Ffvcproductions%2Ffvcproductions.github.io?ref=badge_small)

My blog and portfolio all in one. You can view it on GitHub Pages at [fvcproductions.github.io](https://fvcproductions.github.io)

> Table of Contents

<!-- TOC -->

- [Installation](#installation)
- [Usage](#usage)
  - [To-Do](#to-do)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)
- [License](#license)

<!-- /TOC -->

## Installation

Install [Ruby & Bundler](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) if you haven't already.

Use the following commands to locally serve this website.

```bash
bundle install
bundle exec jekyll serve
```

Make sure to update your gems every now and then!

```bash
bundle update
```

For faster rendering...

```bash
bundle exec jekyll serve --watch --limit_posts 1
```

If you aren't running the latest version:

```bash
gem update jekyll
```

To convert multiple HTML files to Markdown:

```bash
for f in *.html; do pandoc ${f} -f html -t markdown -s -o ${f}.md; done
```

To convert Wordpress.com XML files to Jekyll format:

```ruby
ruby -rubygems -e 'require "jekyll-import";
JekyllImport::Importers::WordpressDotCom.run({
    "source" => "fvcproductions.wordpress.2017-03-04.002.xml",
    "no_fetch_images" => true,
    "assets_folder" => "assets"
})'
```

I use CodeKit 3 (`config.codekit3`) to handle compilation.

## Usage

This website was created from the bottom-up and is a migration from my Wordpress website at [`fvcproductions.wordpress.com`](https://fvcproductions.wordpress.com).

### To-Do

- better alt tags for images in galleries
- add galleries
- update portfolio
- update posts
- use [Isotope](https://isotope.metafizzy.co/) to filter posts by category
- use [lazy-loading](https://www.adamwills.io/blog/responsive-images-hugo/) to load posts
  - [lazy-sizes](https://github.com/aFarkas/lazysizes)
- migrate to [Hugo](https://gohugo.io/) with [victor-hugo](https://github.com/netlify/victor-hugo) boilerplate
- include Patreon link in default template for portfolio and posts
- replace bare fvcproductions.com links with relative links
- replace strike through html
- get rid of line breaks
- put all events on one page with load more button and lots of filter categories (one post can have multiple categories)
  - Speaker
  - Volunteer/Mentor
  - Conference
  - Hackathon
  - Program
  - School
  - Post
  - Project
  - Job
  - School
  - Program

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

## Contact

- [FVCproductions](https://fvcproductions.com) 🍓🍫
  - Twitter [@fvcproductions](https://twitter.com/fvcproductions)

## Acknowledgements

- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes)

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ffvcproductions%2Ffvcproductions.github.io.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ffvcproductions%2Ffvcproductions.github.io?ref=badge_large)