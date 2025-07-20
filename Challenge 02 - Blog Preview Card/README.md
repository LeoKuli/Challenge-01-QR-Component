
# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/LeoKuli/Frontend-Mentor-Challenges/tree/main/Challenge%2002%20-%20Blog%20Preview%20Card)
- Live Site URL: []()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- Custom font integration (Figtree)

### What I learned

Working on this project helped me practice and improve:

- Implementing custom font families with @font-face
- Using Tailwind CSS with CDN and custom configuration
- Creating hover effects and transitions
- Working with CSS custom properties for consistent theming
- Building responsive card components with proper spacing

I particularly enjoyed working with the custom shadow effect and hover states:

```html
<div class="bg-white w-full max-w-sm flex flex-col gap-6 p-6 rounded-[20px] border border-dark-gray shadow-[8px_8px_0px_0px_#000000]">
```

```css
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'primary-yellow': '#F4D04E',
          'dark-gray': '#111111',
          'medium-gray': '#6B6B6B'
        }
      }
    }
  }
</script>
```

### Continued development

Areas I want to continue focusing on in future projects:

- **Advanced Tailwind CSS techniques** - Exploring more utility classes and customization options
- **CSS Grid layouts** - For more complex card arrangements
- **Accessibility improvements** - Better focus states and screen reader support
- **Performance optimization** - Optimizing font loading and CSS delivery

### Useful resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Excellent resource for utility-first CSS framework
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Great visual guide for Flexbox
- [Google Fonts](https://fonts.google.com/) - For font selection and integration best practices

## Author

- GitHub – [@LeoKuli](https://github.com/LeoKuli)
- Frontend Mentor – [@LeoKuli](https://www.frontendmentor.io/profile/LeoKuli)
