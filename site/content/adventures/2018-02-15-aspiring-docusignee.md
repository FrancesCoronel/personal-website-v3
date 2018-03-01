---
title: DocuSign Demo App
description: I created this demo app using PowerForms to try and impress the developer evangelism team at DocuSign.
date: 2018-02-15
banner: https://tctechcrunch2011.files.wordpress.com/2015/05/docusign.png
categories:
  - portfolio
  - web
tags:
  - docusign
  - developer evangelist
---

## Update - Feb 27

I did not get the job and have since removed the PowerForm that I created.

More details on my interview process [can be found on Glassdoor](//www.glassdoor.com/Interview/DocuSign-Interview-RVW19450031.htm).

<blockquote class="embedly-card"><h4><a href="https://www.glassdoor.com/Interview/DocuSign-Developer-Evangelist-Interview-Questions-EI_IE307604.0,8_KO9,29.htm#InterviewReview_19450031">DocuSign Developer Evangelist Interview Questions</a></h4><p>Application I applied online. The process took 4+ weeks. I interviewed at DocuSign (San Francisco, CA) in February 2018. Interview Sat, Jan 27 - Applied online Tue, Jan 30 - Recruiter reaches out and an initial phone call is set up Thurs, Feb 1 - Initial call with recruiter - get positive impression of team/company Wed, Feb 7 - Call with the director of dev rel team.</p></blockquote>

The PowerForm looked like this:

![PowerForm](https://i.imgur.com/2pYbvXr.png)

<!-- The presentation I created as part of the interview can be found here: -->

---

---

---

## Fill the form out below to support an aspiring DocuSignee! ✒️

<section>
  <form>
    <div class="field half first">
      <input autocomplete="on" type="text" name="name" id="applicantName" placeholder="Your name">
    </div>
    <div class="field half">
      <input autocomplete="on" type="email" name="email" id="applicantEmail" placeholder="Your email">
    </div>
    <div class="warning-message">
      You didn't fill out the form entirely. Try filling it out? 😅
    </div>
    <ul class="actions">
      <li>
        <button onclick="docuSign()" class="button big">Support Frances 🎉</button>
      </li>
    </ul>
  </form>
</section>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=" crossorigin="anonymous"></script>

<script>
  // initially hide warning message
  $(".warning-message").hide();
  // open in new tab
  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
  // DocuSign
  function docuSign() {
    if (!$("#applicantEmail").val() || !$("#applicantName").val()) {
      // if no values, show warning message
      $(".warning-message").show();
    } else {
      // set PowerForm url
      var url = "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=18bd5af0-3a6f-4d59-9400-82d7be18cc2e";
      // set email
      url += "&Applicant_Email=" + encodeURIComponent($("#applicantEmail").val());
      // set name
      url += "&Applicant_UserName=" + encodeURIComponent($("#applicantName").val());
      // set updated URL
      openInNewTab(url);
    }
  }
</script>

### Creating Your Own PowerForm

Check out the DocuSign documentation for [how to create your first PowerForm](//support.docusign.com/guides/ndse-user-guide-using-powerforms).

The code is really simple and looks like the following for this site:

#### HTML

```html
<section>
  <form>
    <div class="field half first">
      <input autocomplete="on" type="text" name="name" id="applicantName" placeholder="Your name">
    </div>
    <div class="field half">
      <input autocomplete="on" type="email" name="email" id="applicantEmail" placeholder="Your email">
    </div>
    <div class="warning-message">
      You didn't fill out the form entirely. Try filling it out? 😅
    </div>
    <ul class="actions">
      <li>
        <button onclick="docuSign()" class="button big">Support Frances 🎉</button>
      </li>
    </ul>
  </form>
</section>
```

#### JavaScript

> Note that I am using jQuery as a dependency.

```javascript
// initially hide warning message
$(".warning-message").hide();
// open in new tab
function openInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}
// DocuSign
function docuSign() {
  if (!$("#applicantEmail").val() || !$("#applicantName").val()) {
    // if no values, show warning message
    $(".warning-message").show();
  } else {
    // set PowerForm url
    var url =
      "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=18bd5af0-3a6f-4d59-9400-82d7be18cc2e";
    // set email
    url += "&Applicant_Email=" + encodeURIComponent($("#applicantEmail").val());
    // set name
    url +=
      "&Applicant_UserName=" + encodeURIComponent($("#applicantName").val());
    // set updated URL
    openInNewTab(url);
  }
}
```

There's also this useful YouTube video that gives a technical overview of how PowerForms work.

> Thanks Aaron & Dewey for the useful tutorial!

<blockquote class="embedly-card"><h4><a href="https://www.youtube.com/watch?v=YlHORJFj5C4&t=67s">DocuSign Developer: PowerForm Integration Demo</a></h4><p>DocuSign Developer Center - http://bit.ly/2BUp72B Aaron Liao talks with Dewey Wald, DocuSign's Principal Software Architect. In this second demo discussion with Dewey, you get to see a PowerForm integration scenario. We will create a template, convert it to a PowerForm, and then show the integration of a button to launch the form from your website.</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

The short link for this post is [bit.ly/frances-docusign](https://bit.ly/frances-docusign).
