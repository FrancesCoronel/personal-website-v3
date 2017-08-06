# fvcproductions.github.io

[![Github Issues](https://img.shields.io/github/issues/fvcproductions/fvcproductions.github.io.svg?style=flat-square)](https://github.com/fvcproductions/fvcproductions.github.io/issues) [![GitHub Pull-Requests](https://img.shields.io/github/issues-pr/fvcproductions/fvcproductions.github.io.svg?style=flat-square)](https://github.com/fvcproductions/fvcproductions.github.io/pulls) [![MIT License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) [![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat-square)](http://paypal.me/fvcproductions)

My blog and portfolio all in one. You can view it on GitHub Pages at [fvcproductions.github.io](http://fvcproductions.github.io)

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

Find Scope for Sublime Text 3

```text
<project>,-*/_drafts/*,-*/_sass/vendor/*,-*/.git/*,-*/site/*,-*config.codekit3,-*Gemfile.lock,-*/assets/*
```

## Usage

This website was created from the bottom-up and is a migration from my Wordpress website at [`fvcproductions.wordpress.com`](http://fvcproductions.wordpress.com).

> Find and Replace in ST3

```text
Where: <project>, -*/site/*
```

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

- [FVCproductions](http://fvcproductions.com) 🍓🍫
    - Twitter [@fvcproductions](https://twitter.com/fvcproductions)

## Acknowledgements

- [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes)
