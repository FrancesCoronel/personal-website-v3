---
title: Demystifying Meltdown & Spectre
description: Attempting to break down the two biggest security flaws the world has
  ever seen.
date: 2018-02-16 00:00:00 +0000
banner: https://i.imgur.com/aWN2RkM.jpg
categories:
- portfolio
- research
- presentation
tags:
- docusign
- developer evangelist
- slideshare
- meltdown
- spectre
- cpu
- security

---
## Problem

> I created this presentation as part of a DocuSign developer evangelist interview.
>
> More context can be found [here](/2018/02/15/docusign-demo-app/).

As a developer evangelist, you will often be called upon to speak at a variety of events from hackathons to meetups to company all-hands calls to large conferences.

An invaluable skill in the evangelist’s toolbox is the ability to quickly learn a technical topic and then teach/explain it to audiences of varying technical expertise.

Security researchers recently found and disclosed details about a chip flaw present in most modern CPUs.

**Explain Meltdown and Spectre: what are they, how are they different, how do they work, and why are they scary?**

You can choose any format you’d like: PowerPoint deck, rap lyrics, whiteboard coding, no slides whatsoever, it’s completely up to you.

A stellar presentation will address the widest possible audience: everyone from a non-technical salesperson or your grandmother to a senior engineering director or CTO.

## Solution

> I had less about two days to come up with a 20-minute presentation that breaks down Meltdown & Spectre so I'm open to any feedback if you notice something off. 😊

<blockquote class="embedly-card"><h4><a href="https://www.slideshare.net/FVCproductions/demystifying-meltdown-spectre">Demystifying Meltdown & Spectre</a></h4><p>Originally presented Friday, February 16th, 2018. As a developer evangelist, you will often be called upon to speak at a variety of events from hackathons to m...</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

---

Hey everyone! So I was tasked with "demystifying Meltdown & Spectre" for you all.

Ideally, by the end of this presentation, you'll have a better high-level understanding of how they both work.

![01](https://i.imgur.com/aWN2RkM.jpg)

We'll be first providing some context into Meltdown & Spectre, deep diving into the mechanisms, how they compare, existing solutions and why everyone freaked out in the first place.

![02](https://i.imgur.com/oQo9MkC.jpg)

![03](https://i.imgur.com/5bGqWBi.jpg)

So as you know the two players in questions are Meltdown and Spectre.

These are probably some of the best logos I've seen that are associated with what are probably the worst computer vulnerabilities to ever be discovered since they pretty much affect everyone around the world.

Okay, so having said that, Meltdown and Spectre are the names given to CPU flaws that affect nearly every computer chip manufactured within the last 22 years.

![04](https://i.imgur.com/28utdhT.jpg)

The CPU is the hardware in charge of executing all the programs on our devices.

![05](https://i.imgur.com/ZAs6cLb.jpg)

The CPU meaning the "central processing unit" of a machine or otherwise known as "the brain" of the machine.

![06](https://i.imgur.com/g47jcyH.jpg)

The researchers behind the project who came from Google Project Zero and universities like the Graz University of Technology actually knew of the bugs since last summer but were actually not supposed to be leaked to the public until January 9th of this year.

![07](https://i.imgur.com/o9hQ5iY.jpg)

So from around July 2017 to January 2018, the bugs were supposed to be kept top secret so that companies could have time to create and release patches to mitigate the issues.

![08](https://i.imgur.com/nPq8LiQ.jpg)

However, a British tech news site called The Register eventually leaked it a few days before in the first week of January...

![09](https://i.imgur.com/GDOonMB.jpg)

...and media outlets went into frenzy mode but more on that later.

![10](https://i.imgur.com/gGBPePw.jpg)

So going in for deep dive, let's explore how Meltdown works first.

![11](https://i.imgur.com/m4yzaFm.jpg)

Meltdown affects Intel processors and basically melts security boundaries which are normally enforced by the hardware.

It does this by breaking down the mechanism that keeps applications from accessing memory.

![12](https://i.imgur.com/t6nNAeq.jpg)

Let me provide an analogy.

![13](https://i.imgur.com/J6yiYEy.jpg)

Let's say you're trying to rob a bank vault where inside there is a piece of paper with the bank manager's password in it.

The bank vault has a lot of security and is heavily guarded so it seems pretty well protected.

...But that bank is about to experience a Meltdown.

Being the mastermind you are, you lead a group of robbers to help carry out an attack.

![14](https://i.imgur.com/MFDU72J.jpg)

You have an unlimited supply of robbers so you sort of brute force it and sends an agent in to try and get in without getting caught.

Each of your agents wears a microphone so you can hear them at all times.

Since there’s an unlimited number of agents so you just keep trying until one succeeds.

Finally, an agent gets into the vault and is able to look at the piece of paper with the password on it.

They whisper the password into the microphone just before the guard shoots them down.

Now you know the password and can use it as needed to gain access to private accounts.

That’s how meltdown works on a computer or device.

![15](https://i.imgur.com/WxN9EBR.jpg)

The attacker has code that looks at the memory that should be restricted.

The computer processor throws an exception and the CPU cleans everything up, erasing any evidence of the crime.

But the attacks keep coming, and while the CPU is doing cleanup, it’s also executing other code out of order.

This is what leaks the password.

The out of order code is what transmits the restricted information while the CPU is busy.

Okay, so that seems pretty horrendous. But it gets worse.

![16](https://i.imgur.com/wncHBpe.jpg)

But before we get into Spectre, we have to first understand Speculative Execution.

![17](https://i.imgur.com/szHnsgq.jpg)

Think of your computer as a restaurant called the speculation diner.

This diner specializes in speculating which basically means forming a theory without concrete evidence.

![18](https://i.imgur.com/p0XnOF3.jpg)

So at this diner, there is a customer that comes in every day at breakfast and orders the same thing - eggs & bacon.

![19](https://i.imgur.com/cToj59x.jpg)

Eventually, the cook sees this pattern and starts making the order ahead of time.

It's more efficient and breakfast is ready the minute the customer comes in so they're very happy.

![20](https://i.imgur.com/gRT75Xc.jpg)

However, one day the customer decides not to order eggs and bacon and instead decides to try pancakes.

The chef is fine with this and just throws away the previously prepared food into the trash.

![21](https://i.imgur.com/GO5zWBz.jpg)

And the cook prepares the pancakes instead. No biggie.

![22](https://i.imgur.com/v0sJJif.jpg)

So that whole process is what modern CPU chips take advantage of.

Programs are prepped to execute but if they don't actually end up being needed, they are stored in an unsecured area called cache memory.

Because the programs are prepped to execute, they run a lot faster.

![23](https://i.imgur.com/Nn5roDQ.jpg)

Just like the customers who get their orders faster, programs are able to run faster and speed performance is great.

![24](https://i.imgur.com/pPEfXcu.jpg)

And much like the Space Race from the 20th century, chip makers for the last two decades have been competing fiercely to provide the fastest processor.

![25](https://i.imgur.com/UfHOvTU.jpg)

Modern chip makers like Intel and AMD have been racing for the last two decades to provide the fastest processors which is why the speculative execution was so useful.

![26](https://i.imgur.com/znqk7nx.jpg)

So Spectre is more dangerous because it is more crafty. Spectre gets its name from the root cause, which is called "Speculative Execution" which I described earlier.

Spectre works by exploiting those speculations —mistraining the processor to make it predict wrongly and execute. So in essence, Spectre works by tricking programs into leaking their secrets

As it is not easy to fix, it will haunt us for quite some time.

Hence, the ghostie.

![27](https://i.imgur.com/RVMErMk.jpg)

If we consider a program "If A is true, then compute function X; if A is false, then compute function Y", the chip can start computing both functions X and Y in parallel before it even knows whether A is true or false.

Once it knows whether A is true or false, it already has a head start on what comes after, which speeds up processing overall.

![28](https://i.imgur.com/Xbd4EPe.jpg)

So going back to that restaurant analogy - programs that were prepped but not actually executed end up in an unsecured area of the computer called cache memory where unauthorizes users can access it through a side channel.

![29](https://i.imgur.com/VUVDMOj.jpg)
![30](https://i.imgur.com/4nZhvYA.jpg)

If we wanted to compare the two, we can see that both Meltdown and Spectre allow low-privilege users who execute code on your system to read sensitive information from memory via Speculative Execution.

![31](https://i.imgur.com/AXfoq0E.jpg)

The difference is that Meltdown takes advantage of a specific Intel privilege escalation issue to do this, while Spectre uses the combination of Speculative Execution and Branch Prediction.

Both issues can be addressed with software patches, but this is more effective for Meltdown than Spectre.

![32](https://i.imgur.com/YFpHGRn.jpg)
![33](https://i.imgur.com/77YjXCK.jpg)

Regardless, the end results are the same - compromised data.

![34](https://i.imgur.com/7UOeN2Z.jpg)

Although there are existing remedies, they have been proven to result in the computer running slower.

![35](https://i.imgur.com/yD9HVfm.jpg)
![37](https://i.imgur.com/KWGk3xL.jpg)

And at the end of the day, the flaw is hardware-based, not software-based so a simple software update isn't going to solve the real issue.

![36](https://i.imgur.com/xEWkGkc.jpg)

And the only way to fix a hardware flaw is to

1.  replace the hardware (in this instance 90% of the world's computers are affected so not feasible) or
2.  write patches that do a workaround for the hardware flaw which often means corralling and buffering data to keep it safe (which slows the computer down).

![38](https://i.imgur.com/ov0XA3U.jpg)

So why did everyone freak out?

![39](https://i.imgur.com/7oHqU6I.jpg)

Well, for one, the verbiage on the official website was pretty frightening.

"Am I affected by the vulnerability?"

**Most certainly, yes.**

So nonchalant but intense at the same time. Yikes!

![40](https://i.imgur.com/jdWxcOg.jpg)

And as mentioned before, this is a hardware flaw and the only way to remedy a hardware flaw completely is to replace the hardware.

![41](https://i.imgur.com/qcfcoTR.jpg)
![44](https://i.imgur.com/BRVkLHl.jpg)

What I actually found most troubling personally is that the folks behind these chips decided to prioritize speed over security or money over the safety of their products.

![42](https://i.imgur.com/yYITVcq.jpg)

![43](https://i.imgur.com/7Mr2Ff7.jpg)

Also just this week, there were new exploits called MeltdownPrime and SpectrePrime found that are just new ways to abuse the flaw but no worries, the patches out there fix these too.

![45](https://i.imgur.com/huuLTdO.jpg)

If we think about the future and how quantum computing is the next big thing, it's disturbing to think about the potential consequences the next great hardware flaws could cause.

![46](https://i.imgur.com/a914QLc.jpg)

One can only hope there are more ethical guidelines put in place.

But until then, patch away!

### References

* https://hackernoon.com/tech-evangelists-reveal-the-secrets-to-attracting-great-developers-75398a5be6d8
* https://speakerdeck.com/bestie/meltdown-and-spectre-in-10-mins
* https://github.com/IAIK/meltdown
* https://www.linkedin.com/pulse/meltdown-spectre-bugs-explained-what-you-can-do-chuck-r-fields/
* https://www.quora.com/How-did-Google-detect-the-vulnerability-in-Intel-chips-and-did-it-receive-anythingin-return-for-telling-Intel-about-what-they-had-found#
* https://www.quora.com/Is-speculative-execution-a-fundamentally-flawed-processor-feature
* https://www.quora.com/What-do-you-think-of-Linus-Torvalds-reaction-to-Intels-Meltdown-Spectre-fix-as-comlete-and-utter-garbage
* https://www.theverge.com/2018/1/6/16854668/meltdown-spectre-hack-explained-bank-heist-analogy
* http://www.zdnet.com/article/spectre-and-meltdown-linux-creator-linus-torvalds-criticises-intels-garbagepatches/
* https://lkml.org/lkml/2018/1/21/192
* https://meltdownattack.com/
* https://thehackernews.com/2018/01/meltdown-spectre-vulnerability.html
* https://www.engadget.com/2018/02/15/meltdownprime-spectreprime-research/
* https://www.quora.com/How-do-the-Meltdown-and-Spectre-attacks-work
* https://blog.cloudflare.com/meltdown-spectre-non-technical/
* https://www.slideshare.net/Qualys/avoid-meltdown-from-the-spectre?qd=2feb2d24-0ead-48b4-b7f8-8a90c7dc439f&v=&b=&from_search=8
