---
title: Aspiring DocuSignee
description: Support an aspiring DocuSignee!
date: 2018-02-15
banner: https://tctechcrunch2011.files.wordpress.com/2015/05/docusign.png
categories:
  - certainties
  - blog
tags:
  - docusign
  - developer evangelist
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
        <button onclick="docuSign()" class="button big">Support Frances</button>
      </li>
    </ul>
  </form>
</section>

### Create Your Own PowerForm

> Thanks Aaron & Dewey for the useful tutorial!

<blockquote class="embedly-card"><h4><a href="https://www.youtube.com/watch?v=YlHORJFj5C4&t=67s">DocuSign Developer: PowerForm Integration Demo</a></h4><p>DocuSign Developer Center - http://bit.ly/2BUp72B Aaron Liao talks with Dewey Wald, DocuSign's Principal Software Architect. In this second demo discussion with Dewey, you get to see a PowerForm integration scenario. We will create a template, convert it to a PowerForm, and then show the integration of a button to launch the form from your website.</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

<script src="http://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=" crossorigin="anonymous"></script>

<script>
  // initially hide warning message
  $(".warning-message").hide();
  // DocuSign
  function docuSign() {
    if (!$("#applicantEmail").val() || !$("#applicantName").val()) {
      // if no values, show warning message
      $(".warning-message").show();
    } else {
      // PowerForm
      var url = "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=18bd5af0-3a6f-4d59-9400-82d7be18cc2e";

      // set email
      url += "&Applicant_Email=" + encodeURIComponent($("#applicantEmail").val());
      // set name
      url += "&Applicant_UserName=" + encodeURIComponent($("#applicantName").val());
      // set updated URL
      window.location.href = url;
    }
  }
</script>
