# fvcproductions.github.io

[![Github Issues](https://img.shields.io/github/issues/fvcproductions/fvcproductions.github.io.svg?style=flat-square)](https://github.com/fvcproductions/fvcproductions.github.io/issues) [![GitHub Pull-Requests](https://img.shields.io/github/issues-pr/fvcproductions/fvcproductions.github.io.svg?style=flat-square)](https://github.com/fvcproductions/fvcproductions.github.io/pulls) [![MIT License](https://img.shields.io/github/license/fvcproductions/readme.svg?style=flat-square)](http://badges.mit-license.org) [![Become a Patron!](https://img.shields.io/badge/Patreon-Become%20a%20Patron!-orange.svg?style=flat-square)](https://www.patreon.com/fvcproductions)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ffvcproductions%2Ffvcproductions.github.io.svg?type=small)](https://app.fossa.io/projects/git%2Bgithub.com%2Ffvcproductions%2Ffvcproductions.github.io?ref=badge_small)

My blog and portfolio all in one. You can view it on GitHub Pages at [fvcproductions.github.io](https://fvcproductions.github.io)

> Table of Contents

<!-- TOC -->

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)
- [License](#license)
- [Usage](#usage-1)
  - [Prerequisites](#prerequisites)
  - [Development](#development)
  - [Static build](#static-build)
- [Structure](#structure)
- [Basic Concepts](#basic-concepts)
- [Environment variables](#environment-variables)
- [Deploying to Netlify](#deploying-to-netlify)
- [Enjoy!! 😸](#enjoy-😸)

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

# Victor Hugo

**A Hugo boilerplate for creating truly epic websites**

This is a boilerplate for using [Hugo](https://gohugo.io/) as a static site generator and [Gulp](https://gulpjs.com/) + [Webpack](https://webpack.js.org/) as your asset pipeline.

Victor Hugo setup to use [PostCSS](http://postcss.org/) and [Babel](https://babeljs.io/) for CSS and JavaScript compiling/transpiling.

This project is released under the [MIT license](LICENSE). Please make sure you understand its implications and guarantees.

## Usage

### Prerequisites

You need to have the latest/LTS [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) versions installed in order to use Victor Hugo.

Next step, clone this repository and run:

```bash
npm install
```

This will take some time and will install all packages necessary to run Victor Hugo and it's tasks.

### Development

While developing your website, use:

```bash
npm start
```

or

```bash
gulp server
```

Then visit http://localhost:3000/ *- or a new browser windows popped-up already -* to preview your new website. BrowserSync will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

### Static build

To build a static version of the website inside the `/dist` folder, run:

```bash
npm run build
```

To get a preview of posts or articles not yet published, run:

```bash
npm run build-preview
```

See [package.json](https://github.com/atomtigerzoo/victor-hugo/blob/readme-updates/package.json#L7) or the included gulp file for all tasks.

## Structure

```
|--site                // Everything in here will be built with hugo
|  |--content          // Pages and collections - ask if you need extra pages
|  |--data             // YAML data files with any data for use in examples
|  |--layouts          // This is where all templates go
|  |  |--partials      // This is where includes live
|  |  |--index.html    // The index page
|  |--static           // Files in here ends up in the public folder
|--src                 // Files that will pass through the asset pipeline
|  |--css              // CSS files in the root of this folder will end up in /css/...
|  |--js               // app.js will be compiled to /app.js with babel
```

## Basic Concepts

You can read more about Hugo's template language in their documentation here:

https://gohugo.io/templates/overview/

The most useful page there is the one about the available functions:

https://gohugo.io/templates/functions/

For assets that are completely static and don't need to go through the asset pipeline,
use the `site/static` folder. Images, font-files, etc, all go there.

Files in the static folder ends up in the web root. So a file called `site/static/favicon.ico`
will end up being available as `/favicon.ico` and so on...

The `src/js/app.js` file is the entrypoint for webpack and will be built to `/dist/app.js`.

You can use **ES6** and use both relative imports or import libraries from npm.

Any CSS file directly under the `src/css/` folder will get compiled with [PostCSS Next](http://cssnext.io/)
to `/dist/css/{filename}.css`. Import statements will be resolved as part of the build

## Environment variables

To seperate the development and production *- aka build -* stages, all gulp tasks run with a node environment variable named either `development` or `production`.

You can access the environment variable inside the theme files with `getenv "NODE_ENV"`. See the following example for a conditional statement:

    {{ if eq (getenv "NODE_ENV") "development" }}You're in development!{{ end }}

All tasks starting with *build* set the environment variable to `production` - the other will set it to `development`.

## Deploying to Netlify

- Push your clone to your own GitHub repository.
- [Create a new site on Netlify](https://app.netlify.com/start) and link the repository.

Now Netlify will build and deploy your site whenever you push to git.

You can also click this button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/victor-hugo)


## Enjoy!! 😸
