
# Frontend Mentor - Social links profile solution

This is my solution to the [Social links profile challenge](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ) on Frontend Mentor. The goal was to build a responsive social links profile component with hover states based on a given design.

## 📸 Screenshot

![Project preview](./preview.jpg)

## 🔗 Links

- [GitHub Repository](https://github.com/LeoKuli/Frontend-Mentor-Challenges/tree/main/Challenge%2003%20-%20Social%20links%20profile)
- [Live Site]("") 

## 🛠️ Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Google Fonts (Inter)
- CSS hover transitions

## 🚀 What I learned

While working on this project, I practiced and reinforced:

- How to integrate custom fonts using Google Fonts
- Creating card components with proper spacing and typography
- Implementing smooth hover transitions for interactive elements
- Working with HSL color values for consistent theming
- Building responsive layouts with mobile-first approach

I particularly enjoyed creating the hover effects for the social links:

```css
.social-link {
  background-color: hsl(0, 0%, 20%);
  color: hsl(0, 0%, 100%);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.social-link:hover {
  background-color: hsl(75, 94%, 57%);
  color: hsl(0, 0%, 20%);
}
```

## 📊 Web Analytics (Vercel)

To track visitors and page views, I integrated [Vercel Web Analytics](https://vercel.com/docs/analytics) by injecting the script directly into the HTML file.

The following lines were added at the bottom of the `<body>` section:

```html
<!-- Vercel Web Analytics -->
<script>
  window.va = window.va || function () {
    (window.va.q = window.va.q || []).push(arguments);
  };
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

## 🔄 Continued development

Moving forward, I plan to improve:

- 🎯 **Advanced CSS animations** - Adding more sophisticated hover effects and micro-interactions
- ✨ **CSS Grid layouts** - For more complex profile card arrangements
- 🎨 **Design system consistency** - Creating reusable profile components with variants
- 📱 **Accessibility enhancements** - Better focus states, ARIA labels, and keyboard navigation

I also aim to experiment with:

- 🧪 **CSS Container Queries** – for more responsive component-based design
- ⚡ **CSS Custom Properties** – for better theming and color management
- 🎨 **CSS Logical Properties** – for better internationalization support

---

## 📚 Useful Resources

- [🎨 CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Comprehensive guide for mastering Flexbox layouts
- [🔤 Google Fonts](https://fonts.google.com/) - Excellent resource for web typography and font integration
- [🎯 MDN CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions) - Great documentation for smooth animations
- [📝 Frontend Mentor Community](https://www.frontendmentor.io/community) - Great place for feedback and learning from other developers

---

## 👤 Author

- GitHub – [@LeoKuli](https://github.com/LeoKuli)  
- Frontend Mentor – [@LeoKuli](https://www.frontendmentor.io/profile/LeoKuli)

---

## 🙌 Acknowledgments

Thanks to the amazing [Frontend Mentor](https://www.frontendmentor.io) community for providing high-quality, real-world challenges that help us grow as developers.

If you have any **suggestions** or **feedback**, I'd love to hear from you!
