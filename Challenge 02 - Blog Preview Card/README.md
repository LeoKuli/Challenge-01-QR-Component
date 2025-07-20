
# Frontend Mentor - Blog preview card solution

This is my solution to the [Blog preview card challenge](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS) on Frontend Mentor. The goal was to build a responsive blog preview card component with hover states based on a given design.

## 📸 Screenshot

![Project preview](./preview.jpg)

## 🔗 Links

- [GitHub Repository](https://github.com/LeoKuli/Frontend-Mentor-Challenges/tree/main/Challenge%2002%20-%20Blog%20Preview%20Card)
- [Live Site]("") 

## 🛠️ Built with

- Semantic HTML5 markup
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- Custom font integration (Figtree)
- Flexbox
- Mobile-first workflow
- Custom CSS properties and configurations

## 🚀 What I learned

While working on this project, I practiced and reinforced:

- How to integrate custom fonts using @font-face declarations
- Configuring Tailwind CSS with custom colors and font families via CDN
- Creating card components with custom shadows and borders
- Implementing smooth hover transitions and interactive states
- Working with utility-first CSS approach for rapid development

I particularly enjoyed creating the distinctive card shadow effect and hover interactions:

```html
<div class="bg-white w-full max-w-sm flex flex-col gap-6 p-6 rounded-[20px] border border-dark-gray shadow-[8px_8px_0px_0px_#000000]">
```

```javascript
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        'figtree': ['Figtree', 'sans-serif']
      },
      colors: {
        'primary-yellow': '#F4D04E',
        'dark-gray': '#111111',
        'medium-gray': '#6B6B6B'
      }
    }
  }
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

- 🎯 **Advanced Tailwind CSS techniques** - Exploring more utility classes and component patterns
- ✨ **CSS Grid layouts** - For more complex card arrangements and responsive designs
- 🎨 **Design system consistency** - Creating reusable card components with variants
- 📱 **Accessibility enhancements** - Better focus states, ARIA labels, and keyboard navigation

I also aim to experiment with:

- 🧪 [**Tailwind UI**](https://tailwindui.com/) – to accelerate development with pre-built components
- ⚡ [**CSS Grid**](https://css-tricks.com/snippets/css/complete-guide-grid/) – for advanced layout techniques
- 🎨 [**CSS Custom Properties**](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) – for better theming control

---

## 📚 Useful Resources

- [🎨 Tailwind CSS Documentation](https://tailwindcss.com/docs) - Comprehensive guide for utility-first CSS framework
- [🔤 Google Fonts](https://fonts.google.com/) - Excellent resource for web typography and font integration
- [🔍 CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Visual guide for mastering Flexbox layouts
- [📝 Frontend Mentor Community](https://www.frontendmentor.io/community) - Great place for feedback and learning from other developers

---

## 👤 Author

- GitHub – [@LeoKuli](https://github.com/LeoKuli)  
- Frontend Mentor – [@LeoKuli](https://www.frontendmentor.io/profile/LeoKuli)

---

## 🙌 Acknowledgments

Thanks to the amazing [Frontend Mentor](https://www.frontendmentor.io) community for providing high-quality, real-world challenges that help us grow as developers.

If you have any **suggestions** or **feedback**, I'd love to hear from you!  
Feel free to open an issue or leave a comment in the repo.
