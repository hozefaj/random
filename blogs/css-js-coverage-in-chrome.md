---
title: CSS/JS coverage in Chrome
description: using the coverage feature in chrome dev tools for performance improvements
tags: performance, chrome, css
---

From Chrome version 59 onwards, the developer tools expose a new Coverage tab(next to Console). This basically shows that given all the JS/CSS that gets loaded on the how much of it is actually used.

![coverage-tab](https://developers.google.com/web/updates/images/2017/04/coverage.png)

You will be surprised to see the percent of unused code that gets shipped over the wire. In big projects/teams over time code keeps getting added and no one takes the time to actually check if all what's getting skipped to the user is actually needed. This causes performance bottlenecks and in many cases loss of potential business.

The great part of the tool is that does not only give a percent of unused code but actually also shows what code it is. Using this information it becomes easy to identify code that can be removed.

![source-code](https://developers.google.com/web/updates/images/2017/04/coverage-breakdown.png)

Each line of code is color-coded:

* Solid green means that line of code executed.
* Solid red means it did not execute.

_Off course not everything in red can be removed. There will be code that runs on user actions._

One simple way to get to it, is `shift + cmd + p`(on a mac) and then type `coverage`.

_The command palette has a bunch of pretty useful utilities._

We use this tool pretty often in our development as well as performance tuning. `Performance` should not be taken as an afterthought, but rather tackled during the development cycle itself.

A fellow coworker rights puts its `Performance is the new Accessibility`
{% twitter 1105570003934273536 %}

Let's all chip in to make the web accessible to everyone.
