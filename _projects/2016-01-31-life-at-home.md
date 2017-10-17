---
title: "Life at Home 🏠"
date: 2016-01-31
excerpt: 'A mobile user interface for an Android application that allows users to send push notifications containing common household alerts and phrases to the Android devices of their family members.'
header:
    image: https://i.imgur.com/8cFXnVj.jpg
gallery:
    - alt: "Placeholder"
      url: https://i.imgur.com/8cFXnVj.jpg
---

Overview
========

[![Life
at Home -
Banner](https://fvcproductions.files.wordpress.com/2016/01/banner.png)](https://fvcproductions.files.wordpress.com/2016/01/banner.png)
Life at Home - Banner

Check out the mobile UI I created at [`invis.io/7G5THL7KA`](https://invis.io/7G5THL7KA).
----------------

 

For [Hoya Hacks](https://hoyahacks.com) 2016, I was unable to physically
travel to the hackathon location at Georgetown University. My team was
okay with me working remote though, so I just collaborated with them
(mostly just Jamison though) virtually through the hackathon's Slack
channel. In the end, my team had a very hard time implementing our "Life
at Home" idea due to the slow Internet and the high learning curve that
comes with building an Android app. Regardless, I just wanted to share
the interface I built out for the proposed idea that didn't really come
into fruition

> In the end, this mobile UI was made for personal practice/fun, and not
> for the Hoya Hacks 2016 hackathon since my team sort of disintegrated.

### Screenshots

TODO: [gallery type="rectangular" size="full"
ids="3827,3828,3829,3830,3831,3832,3833,3834" ]

### Features

> This was the original idea of Jamison Bryant, the team lead. I do not
> claim any credit for the idea and the text below is from the Project
> Plan Google Doc.

#### What Are We Designing?

We are designing an Android application that allows users to send push
notifications containing common household alerts and phrases to the
Android devices of their family members. Such phrases may include "The
laundry room is available", "The trash needs to be taken out", or
"Dinner is in 10 minutes".

#### Why is this better than texting?

It is better than texting because all of the messages will be
pre-programmed (there will be support for custom messages too). Thus, to
send a particular message with the app you’ll have to tap once or twice
to send the pre-programmed message, versus having to type it all out
from scratch every time using a texting application.

Furthermore, our app will support sending notifications to the entire
family or to just one or two individual family members, and it doesn’t
support replies, thus removing the burden of complicated and annoying
group texts.

#### What if the message I want to send isn’t available?

The app will have support for custom messages. For example, if a user
wants to be able to send the message "The chickens need to be fed" (a
very useful messages for farming families, but not for average families,
and thus not a pre-programmed messages). They can add it to the app and
send it like they would a pre-programmed message.

The built-in messages of the application will support "templating", e.g.
"Dinner in X minutes", where the user will be prompted to specify X
before sending. This allows the user to have some control over the
messages that get sent without the need to create a custom message for
every possible use case.

#### What parts will the project be made up of?

The project will be made up of two parts: the Android app itself, and a
web service to process the push notifications. When a message is sent
from the app, it will be communicated to a RESTful web service hosted on
our domain at <https://push.lifeatho.me> (this domain will not be
accessible from a web browser). Other Android devices will check
periodically with the web service to see if new push notifications are
available, and if so will pull them down and display them. Notifications
will be associated with a "network ID" so that one family does not get
another family’s notifications.

### Tools

- [Sketch](https://sketchapp.com)
- [Invision](https://www.invisionapp.com/)
- [Slack](https://slack.com)

### Team

-   Jamison Bryant (team lead)
-   Lenny Canny (beginner)
-   Moses Namara (Android dev)
-   me (designer)
-   Organizer Lukas (advisor)
