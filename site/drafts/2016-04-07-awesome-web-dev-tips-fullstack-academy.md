Fullstack Academy
Awesome
Web Dev Tips & Tricks
FVCproductions

1.
Making
Sublime
Sexy
Let’s start by installing Package Control!

To note..

ST3 > WebStorm > Vim

Package Control

The de facto Sublime Text package manager with over 2,500 packages available for installation, all available in GitHub or BitBucket repos.

Installing Package Control
Go here: https://packagecontrol.io/installation

Installing Packages
⌘ ⇧ P (Command - Shift - P)

Installing a Certain Package
Enter To Install The Highlighted Package & You’re Done!

Themes
To make your dev environment purty.

Installing Themes
This article basically covers everything.

Installing Themes
So…
basically
use the Package Manager

Installing Themes

Make sure to include the code in your User Settings file
Sublime Text > Preferences > Settings - User
For example, if you installed the Theme ITG Flat, then this is how you would modify your User Settings file to have the dark version of the theme and color scheme.
These instructions will be in the Theme’s documentation on their GitHub repo.
{
"color-scheme": "Packages/Theme - itg.flat/itg.dark.tmTheme",
"theme": "itg.flat.dark.sublime-theme"
}

Magical Packages
You’re a wizard now.
Also, some of these just work with ST3.

Bracket
Highlighter

Matches a variety of brackets such as [], {}, (), “”, ‘ ‘, <tag></tag>, and even custom brackets.

GitGutter

Shows an icon in the gutter area indicating whether a line has been inserted, modified, or deleted.

SublimeLinter

Shows where possible syntax errors could be.

For JavaScript (JSHint), go here.

For more JS stuff, go here.

HTML-CSS-JS Prettify

Prettify your code.
Markdown Editing

Powerful editing features for all you Markdown lovers.
AutoFileName

Autocomplete file naming for lazy people.

Sublime
CodeIntel

Full featured code intelligence and smart autocomplete engine.
Sidebar Enhancements

Makes your sidebar more powerful.
Codeiviate

Insight, motivation, and benchmarking for programmers.

Want more?

Learn from the best of the best.

Seriously, there’s an entire series from the Google Developers YouTube team dedicated to cool plugins.

2.
Messing
with
Terminal
If you want to feel like a hacker just because though, go here and start typing away!

Creating Aliases in Terminal/iTerm
Type in nano .bash_profile
Then type in alias [insert alias name here] = “cd ~/[insert path here]”
i.e. alias cdfsa = “cd ~/Dropbox/GitHub/FSA”
Make sure to restart your terminal after you add the alias(es).

No more sudo.
Type this in your Terminal app so you don’t have to type sudo before every npm install command
sudo chown -R $(whoami) ~/.npm
May not work in Zsh.

Add subl to open files in Terminal using Sublime Text 3
Type this in your Terminal app so you can open files in ST3
ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/sublime
Source
Doesn’t work with ST2.

“Bada\*\*ify” your terminal & shell with oh-my-zsh

Wes Bos also has a Command Line Power User YouTube Playlist
The Bos is also the author of the Sublime Text Power User book!
Slack me if you’re interested.

A
Random Cool
Bash
Profile

Add syntax highlighting to command line Mongo queries.
MongoDB Shell Enhancements

3.
Cool
OSX
Apps
Because we all need some power tools in our lives.

Categories
Design, Development, Productivity

Free
Amphetamine

Keep your Mac awake.
Flux

Makes the color of your computer’s display adapt to the time of day.
Dash

API Documentation Browser & Code Snippet Manager
Sorty

Reset your Launchpad to the default layout.
Alfred 2

A more powerful version of Spotlight.
Image2icon

Convert any image to various number of formats.

More Free Ones
QuickCast

Make. Publish. Share.

Screencasts made easy.
LiteIcon

Change your Mac icons.
Sip

Color picker in your menu bar.
Noizio

A beautiful ambient sound app that allows you to concentrate on the work at hand.
Spectacle

The free version of BetterSnapTool (see Paid).
BetterTouchTool

Configure many gestures for your Magic Mouse, Macbook Trackpad, Magic Trackpad, and even mouse gestures.

Even More Free Ones
GitHub Desktop

An all new, unified GitHub desktop.

cDock

Customize your dock.

Robomongo

A shell-centric cross-platform open source MongoDB management tool.
Octohub

A better way to organize GitHub repos & Devs.

Paid
Bartender

Organize your Mac menu bar apps. $15
CodeRunner

Pretty self-explanatory, but it’s basically repl.it except not online. $14.99
Marked 2

Advanced Markdown Preview.

Works great if you edit your .md files in Sublime Text. $9.99
1Password

The mother of all password managers. $49.99
BetterSnapTool

Window snapping done right.

At least until El Capitan incorporates it. $1.99
Candelight

Like Flux, but more powerful. $0.99

More Paid Ones
Healthier

Basically reminds you to take a break. $3.99
Flavours 2 Lite

Customize the look of your Mac.

Free for 5 days. Then, $5.

To Note
Once El Capitan comes out, you can’t customize your Mac anymore which is kind of a bummer.
iStat Menus 5

An advanced Mac system monitor for your menu bar.

Free for 14 days. Then, $18.
CodeKit

A Mac App for Cool People.

Helps you build websites faster & better. $32
Coda

A premier text editor targeted for front-end web developers. $99

Even More Paid Ones
WebStorm

Lightweight yet powerful IDE perfectly equipped for complex client & server side development using Node.

FREE for students. A single license is $99.

Highly recommended by Joseph Alves, one of the instructors here at Fullstack Academy.

Tower

Version control with Git - made easy. In a beautiful efficient, and powerful app. $59
Paw

The ultimate REST client for Mac. $29.99

GitHub’s Student Developer Pack

The best developer tools, free for students.

4.
Nifty
Chrome
Extensions
Because
CHROME.

Goodies for GitHub
GitHub Awesome Autocomplete

GitHub Expandinizer

GitHub Mate

GitHub Hoverscope

Hova!
Browse the Internet webz like Jay-Z.

JSONView
Validate and view JSON documents.

Postman - REST Client
Supercharge your API workflow.

Among other things.

Marmoset
Create gorgeous code snapshots within seconds.

5.
Wicked
Websites
Product Hunt has all the best ones, but hey.

Code4Startup
This is the go to place for anyone who has an idea and wants to build their own app. Real skills for real world projects.

Waffle.io
Use this to manage your projects on GitHub.
Fullstack Academy uses this too!

Hackr.io
Share and discover the best programming tutorials and courses online.

Typing.io
A typing tutor/trainer for programmers. The lessons are based on open-source code, allowing you to practice with code used in the real world.

Funsies
Fun things to do in your free time.

AKA What do I do on the weekends if I have energy left?

Attend tech Meetups

Join groups such as Code Crew, Fullstack JavaScript, Google NYC Tech Talks, NY Tech Meetup, Women Who Code NYC, etc. in the NYC.

Earn honor and rank up on Codewars.

If you get to 4 kyu, you get a free t-shirt from Fullstack. :P

Participate in Hackathons

Check out Hackathon IO for upcoming local hackathons.

Become a warrior through CodeCombat

If you’re into gaming, then you can learn JavaScript as you defeat ogres, solve mazes, and level up.

Start writing technical posts or just blogging in general. Reflecting is always nice.

There’s plenty of options out there: Ghost, Tumblr, Wordpress, Jekyll, Medium, etc.

Work on side projects

“The work you do while you procrastinate is probably the work you should be doing for the rest of your life.”

* J. Hische

Other
Resources
Awesome

SetUI Icons
Quick Look Plugins
Homebrew & Cask

Thoughtbot Dev Environment Setup
PRODUCT HUNT
Awesome Lists

Have Dropbox?
Sync your ST3 settings with Dropbox!

Thanks!
Wanna
contribute?
Contact me @fvcproductions so I can add you as a collaborator!

Or just Slack me your idea with the hashtag #addthistool so I can add it to the slides.

Credits
Special thanks to all the people who made and released these awesome resources for free
Content by FVCproductions
Presentation template by SlidesCarnival
Photographs by Unsplash
Contributions by Fullstackers
