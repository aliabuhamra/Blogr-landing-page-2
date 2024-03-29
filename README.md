# Blogr landing page

![github repo size](https://img.shields.io/github/repo-size/aliabuhumra/Blogr-landing-page-2)
![github contributors](https://img.shields.io/github/contributors/aliabuhumra/Blogr-landing-page-2)
![github twiter](https://img.shields.io/twitter/follow/AliAbuhumra?style=social)

## Welcome! 👋

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Design preview for the Four card feature section coding challenge](./design/desktop-preview.jpg)

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/blogr-landing-page-F6j01_S9B)
- Live Site URL: [Live site URL](https://aliabuhumra.github.io/Blogr-landing-page-2/)

## My process

### Built with

- Semantic HTML5 markup
- BEM
- CSS custom properties
- Flexbox
- Vanilla JS for mobile navigation toggle

### What I learned

- I learned about of the flex grow and flex shrink
- I learned about of the menu drop
- specificity in css
- The dropdown menu is the highlight of my learning while working through this project.

```
- a=0 b=0 c=0 -> specificity = 0 \*/
- LI /_ a=0 b=0 c=1 -> specificity = 1 _/
- UL LI /_ a=0 b=0 c=2 -> specificity = 2 _/
- UL OL+LI /_ a=0 b=0 c=3 -> specificity = 3 _/
- H1 + _[REL=up] /_ a=0 b=1 c=1 -> specificity = 11 \_/
- UL OL LI.red /_ a=0 b=1 c=3 -> specificity = 13 _/
- LI.red.level /_ a=0 b=2 c=1 -> specificity = 21 _/
- #x34y /_ a=1 b=0 c=0 -> specificity = 100 _/
- #s12:not(FOO) /\_ a=1 b=0 c=1 -> specificity = 101 \*/
```

## Author

- Website - [Github/AliAbuhumra](https://github.com/aliabuhumra)
- Frontend Mentor - [@AliAbuhumra](https://www.frontendmentor.io/profile/aliabuhumra)
- Twitter - [@AliAbuhumra](https://twitter.com/aliabuhumra)

Thanks for checking out this project.
