---
title: Cornell Tech - Product Studio 🔥
date: 2016-11-18
description: How might we create a safe place for people of all backgrounds to discuss important local, national, and global issues?
banner: https://github.com/fvcproductions/nyt-comm/raw/master/img/banner/ct+nytimes-white.png
aliases:
  - /portfolio/2016/11/18/product-studio/
categories:
  - portfolio
  - award
  - research
  - design
  - oss
  - web
---

![The New York Times - White Banner](https://fvcproductions.files.wordpress.com/2016/09/white-banner1.png)

Every fall, leading startups, companies, and organizations in NYC pose business challenges to Cornell Tech. In Product Studio, teams develop and present new products, services, and strategies that respond to those challenges.

<blockquote class="embedly-card"><h4><a href="https://tech.cornell.edu/studio">Studio</a></h4><p>Cornell Tech is a graduate school like none other, designed to engage our rapidly evolving global society. Located in New York City.</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

My team is responding to **The New York Times (Community)** challenge:

> How might we create a safe place for people of all backgrounds to discuss important local, national, and global issues?

Every fall, leading startups, companies, and organizations in NYC pose business challenges to Cornell Tech.

In Product Studio, teams develop and present new products, services, and strategies that respond to those challenges.

Our team responded to **The New York Times (Community)** challenge: _How might we create a safe place for people of all backgrounds to discuss important local, national, and global issues?_

To address this problem, we created Q&A, a platform that solicits the opinion of readers based off of both the text analysis of an article and their personal reading history.

---

<!-- TOC -->

* [Sprint 1](#sprint-1)
  * [Sprint 1 - Narrative](#sprint-1---narrative)
  * [Sprint 1 - Presentation](#sprint-1---presentation)
  * [Sprint 1 - Prototype](#sprint-1---prototype)
* [Sprint 2](#sprint-2)
  * [Sprint 2 - Narrative](#sprint-2---narrative)
    * [Journey](#journey)
    * [User Research](#user-research)
    * [Working Demo](#working-demo)
    * [Validation Findings](#validation-findings)
    * [Architecture Evolution](#architecture-evolution)
  * [Sprint 2 - Presentation](#sprint-2---presentation)
  * [Sprint 2 - Prototype](#sprint-2---prototype)
* [Sprint 3](#sprint-3)
  * [Sprint 3 - Narrative](#sprint-3---narrative)
    * [Coded Out Solution](#coded-out-solution)
    * [User Validation](#user-validation)
    * [Technology](#technology)
    * [Reporter Validation](#reporter-validation)
    * [Impact](#impact)
    * [Monetization](#monetization)
    * [Product Development](#product-development)
    * [Business Objective](#business-objective)
    * [Go To Market Strategy](#go-to-market-strategy)
    * [Our Journey](#our-journey)
    * [What’s Next](#whats-next)
  * [Sprint 3 - Presentation](#sprint-3---presentation)
  * [Sprint 3 - Prototype](#sprint-3---prototype)
* [Final Sprint](#final-sprint)
  * [Final Sprint - Presentation](#final-sprint---presentation)
  * [Final Sprint - Prototype](#final-sprint---prototype)
* [Open Studio Poster](#open-studio-poster)
* [Awards](#awards)
* [GitHub Repo](#github-repo)
* [Tools](#tools)
* [Team](#team)

<!-- /TOC -->

## Sprint 1

### Sprint 1 - Narrative

Today older white men represent the majority of people who comment on The New York Times articles.

The homogeneity of that user base is creating a barrier to discussion from the larger population, which is stunting growth.

In order to stay relevant, The New York Times will need to engage diverse users by stimulating more conversation.

Introducing "Most-Discussed" on the New York Times app. Here, you can see articles ranked by the number of comments, with curated comments from different perspectives. The user photos invite comments from more diverse users by showing that this is an inclusive environment.

### Sprint 1 - Presentation

<blockquote class="embedly-card"><h4><a href="https://speakerdeck.com/fvcproductions/sprint-1-product-studio">Sprint 1 | Product Studio</a></h4><p>Our presentation for Sprint 1 of the Product Studio class. Fall 2016 Cornell Tech The New York Times (Community)</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

### Sprint 1 - Prototype

![Prototype](https://fvcproductions.files.wordpress.com/2016/09/screenshot-2016-09-26-18-00-38.png)

<blockquote class="embedly-card"><h4><a href="https://invis.io/HZ8PJDK89">Click here to view the project `NYTimes - Sprint 1`</a></h4><p>This prototype brought to you by InVisionApp</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

## Sprint 2

### Sprint 2 - Narrative

Currently the majority of New York Times commenters are older white men. But that group is just a small slice of the larger population, which means that many readers—people who have valuable experiences and expertise to share—are shut out of the conversation.

As a solution, we want to invite commenters from all backgrounds in, as a way of expanding and enriching the New York Times’s user-generated content. By celebrating different voices, we believe we can create value for both the New York Times and its readers.

#### Journey

We arrived at our current product after a few wrong turns. After the last sprint, we received some critical feedback and we realized that we were too focused on creating value for the New York Times, not its readers.

#### User Research

So we conducted some user interviews with _Times_ readers and we learned that people are demotivated from commenting when they don’t think they have anything informative to contribute; when they don’t think their comments will be seen or valued; and when they don’t care about the issue.

#### Working Demo

Meet Chumeng, an Asian-American woman (Chumeng is actually Chinese, but for the sake of our user story, we’re saying she’s Asian-American). She’s reading an article about how more Asian Americans are becoming Democrats. Looking at the current layout of the comments section, there’s no space carved out for her opinion. She doesn’t trust that her opinion will be valued here, and she doesn’t immediately have an idea about what information she could share.

With the new Q+A feature, the story is different. Now Chumeng’s opinion is being solicited directly with a question related to her background. She is being prompted to share something specific, so she thinks, Aha! I have something to add here. And she can see the opinions of other Asian-Americans on display, so she knows it’s an environment that will support her opinion. And because the question is tagged "Asian American," she can see how her background makes her especially qualified to make a comment.

#### Validation Findings

To validate our product, we built wireframes for targeted A/B testing. Of the people we tested, 90% said they were more likely to read the comments with our interface, 80% said they were more likely to comment, and 100% said they were more likely to do one or the other. We also saw a lot of smiles and got a lot of unsolicited positive feedback. And from our alumni crit, we got feedback that ranged from "There’s really something here" to concerns about our feature inviting trolls in as well.

#### Architecture Evolution

There are two major parts to our system. One is the editor’s view and one is the reader’s view. The editors input the article into the New York Times content management system, and through IBM Watson’s Alchemy API, we can extract key concepts and entities from the article, and use these to generate targeted questions. The editors then formulate the appropriate questions, and these appear on the New York Times commenting platform.

### Sprint 2 - Presentation

https://speakerdeck.com/fvcproductions/sprint-2-product-studio

### Sprint 2 - Prototype

https://invis.io/VA94THAWY

## Sprint 3

https://speakerdeck.com/fvcproductions/sprint-3-product-studio

### Sprint 3 - Narrative

Hi, we’re the New York Times (Community) Team, Delia, Chumeng, and Frances.

Our challenge was How might we create a safe place for people of all backgrounds to discuss important local, national, and global issues?

The people who comment on the New York Times platform are fairly homogeneous: they tend to be older, they tend to be white, and they’re more likely to be men. As a result, Times readers are missing out on different perspectives, and the Times is missing out on an opportunity to grow its commenter base and build a stronger relationship with its audience.

So we thought, how can the comments section do a better job of inviting people of all backgrounds in? Through our user research, we found that people are more motivated to comment when they feel they have specific knowledge to share because of their experiences—and people get more value out of reading comments that are informative.

#### Coded Out Solution

Let’s walk you through our coded out solution. Meet Ana. She doesn’t subscribe to the Times, and she has never commented.

One day, a friend shares an article on Facebook. She clicks through to read it, and she sees a pop-up. When she clicks the pop-up, she’s shown a question that resonates with her. Based on Ana’s reading history on the Times, our system has made a guess that she is Latina, and made the default question and comment view one that pertains to her background. She can click through to see the other questions, and she can switch tabs to view comments from people of other backgrounds, including children of immigrants and language experts.

She stays on the site longer than usual, reading through the responses and looking at the data visualization about the comments. Thanks to the question prompt, she can see that she has valuable information to contribute. So she composes and posts her comment. This makes the commenter base more diverse, and we can keep Ana coming back to read and comment by sending her email digests about other relevant questions and comments.

#### User Validation

For user validation, we performed A/B testing and found that 90% of our test subjects were more likely to read the comments with our Q&A platform, and 80% were more likely to actually post a comment themselves.

#### Technology

But where do these questions come from? The Q&A platform uses the IBM Alchemy API to automatically generate smart entities from the text of an article. Each of these entities then acts as a potential group of readers who can provide valuable insights for the article. The reporter can then compose questions targeting each of these reader groups.

#### Reporter Validation

And when we talked to a Times reporter, we got feedback that our platform could not only integrate well into her work-flow but also into the content management system that she uses to publish articles.

#### Impact

But the real value of Q&A, aside from the fact it diversifies the commenter base, comes from how we are creating a platform that takes the highest quality journalism and adds on the most informative user-generated content.

#### Monetization

Since a commenter self-identifies as belonging to one or more groups, we are able to subtly collect reader background information which leads to smarter targeting.

#### Product Development

In terms of product development, we focused more on fleshing out the front-end since we feel that’s where our product value lies and with the back end, we got as far as being able to extract smart entities from article text.

#### Business Objective

Our business objective is to convert occasional readers, like Ana, into engaged digital subscribers. We estimate that we can convert 30,000 non-subscribing readers into digital subscribers by keeping them coming back to the site directly, pushing them over their monthly limit of ten free articles.

#### Go To Market Strategy

We recommend taking the feature to market via pop-ups on the site, a feature explaining Q&A, social media, and email notifications.

#### Our Journey

We floated a lot of ideas before settling on Q&A, and we pivoted after doing user research with Times readers. So we definitely learned to know our users first. Also, we saw that active engagement is really important to the future of news, and traditional media outlets like the Times recognize this and are adapting.

#### What’s Next

Lastly, to hand off our product, we plan to provide all of our assets to the NYT team. Thank you.

### Sprint 3 - Presentation

<blockquote class="embedly-card"><h4><a href="https://speakerdeck.com/fvcproductions/sprint-3-product-studio">Sprint 3 | Product Studio</a></h4><p>Fall 2016 Cornell Tech The New York Times (Community)</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

### Sprint 3 - Prototype

![Prototype](https://fvcproductions.files.wordpress.com/2016/11/screenshot-2016-11-28-23-27-57.png)

<blockquote class="embedly-card"><h4><a href="https://fvcproductions.github.io/nyt-comm/">The Spanish Lesson I Never Got at School - The New York Times</a></h4><p>Like millions of Latino kids educated in California public schools, I never took a class in Spanish grammar or Spanish literature, nor was I ever asked to write a single word with an accent or a squiggly tilde over it.</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

## Final Sprint

### Final Sprint - Presentation

<blockquote class="embedly-card"><h4><a href="https://speakerdeck.com/fvcproductions/final-deck-product-studio">Final Deck | Product Studio</a></h4><p>Fall 2016 Cornell Tech The New York Times (Community)</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

### Final Sprint - Prototype

<blockquote class="embedly-card"><h4><a href="https://youtu.be/sGClxvfYLZk">Q&A | Prototype</a></h4><p>Product Studio Cornell Tech Fall 2016 The New York Times (Community) Q&A Platform FVCproductions No copyright intended.</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

## Open Studio Poster

> December 15th, 2016

At the end of the semester, each team was also tasked to create a poster for their community challenge teams in order to display them at Open Studio.

![Open Studio Poster](https://i.imgur.com/TdKktfp.png)

## Awards

* **Artful Artifacts**
  * November 22nd, 2016
  * "We've pulled these for the class to see great examples of teams or individuals that have produced meaningful artifacts that not only showcase an interesting way of representing their solution, but also act as useful milestones that can be referenced to in the future of the product development process."
* **Best Final Sprint Presentation in Grizzly Room**
  * December 9th, 2016
  * Recognized as having one of the best team presentations during the final sprint in the Product Studio class at Cornell Tech out of 10+ teams inside the Grizzly presentation room.

## GitHub Repo

<blockquote class="embedly-card"><h4><a href="https://github.com/fvcproductions/nyt-comm">fvcproductions/nyt-comm</a></h4><p>nyt-comm - Product Studio | Cornell Tech | Fall 2016 📰</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

## Tools

* InVision
* Keynote
* Quip
* Sketch 3
* * Keynote
* Quip
* GitHub Hosting
* HTML/CSS/JS

## Team

* Israel Burns
* Delia Casa
* Frances Coronel
* Chumeng Xu
