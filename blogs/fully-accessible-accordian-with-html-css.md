---
title: Fully Accessible Accordion with HTML & CSS(no JS)
description: how to create an accordion using only HTML & CSS(no JS) using semantic markup
tags: html, css, semantic, accessible
---

Recently I came across `details` and `summary` HTML tags. Their basic use is to create an accordion-type UX out of the box.

I have previously worked on creating an accordion-like structure using `div` and `span` and JS to handle opening and closing. On the JS there is logic to keep track which element is open if the user clicks on another one close all and open clicked one. Over time this can get complicated.

Having discovered these tags, I worked a prototype to achieve the functionality with plain HTML & CSS

Let's go over the steps for that

`details` tag is the parent, where the below 2 tags are enclosed.
`summary` tag is where the headline users see by default(like a question for FAQ's) is held.
`p` or `div` can be the response(answer for FAQ's) or more details around the headline.

Every browser supports the accordion-style arrow out of the box. The good part here is that using CSS we can style it however we choose.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/ovmpr3bdtauaizikgt6u.png)

Now, let try to style it how we choose. I decided to do see if I can replicate the pattern we have at PayPal.

To do this, we first need to hide the browser's default `marker`

```css
summary::-webkit-details-marker {
  display: none;
}
```

Next step, in my case, add styles for open & close arrows.

```css
// creates the close arrow
summary:after {
  content: "";
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  transition: all 0.3s ease-out;
  border-bottom: 1px solid #cbd2d6;
  border-right: 1px solid #cbd2d6;
  float: right;
}

// creates the open(inverted) arrow.
details[open] summary:after {
  content: "";
  transform: rotate(-135deg);
  margin-top: 8px;
}
```


On the `details` tag, there is also an option to have it open by default. Use the `open` attribute to do that. Goes like `<details open>`.

You can try it out on [codesandbox](https://codesandbox.io/embed/accordion-with-details-tag-vqwsb?fontsize=14&hidenavigation=1&theme=dark)

Other than Edge & IE(of course) all other [browsers support these tags](https://caniuse.com/#search=details).

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/4rybcsci0hoiks60blwd.png)

This is basic(getting starter) guide. For more detailed and advanced examples I recommend [this article](https://css-tricks.com/quick-reminder-that-details-summary-is-the-easiest-way-ever-to-make-an-accordion/) on CSS Tricks.
