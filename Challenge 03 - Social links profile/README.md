
# Frontend Mentor - Social links profile solution

This is my solution to the [Social links profile challenge](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ) on Frontend Mentor. The goal was to build a responsive social links profile component with hover states based on a given design.

## 📸 Screenshot

![Project preview](./preview.jpg)

## 🔗 Links

- [GitHub Repository](https://github.com/LeoKuli/Frontend-Mentor-Challenges/tree/main/Challenge%2003%20-%20Social%20links%20profile)
- [Live Site]("") 

## 🛠️ Built with

- Semantic HTML5 markup
- **Tailwind CSS via CDN** - Utility-first CSS framework
- Custom Tailwind configuration with brand colors
- Mobile-first workflow
- Google Fonts (Inter)
- CSS transitions and hover effects
- Accessibility best practices (ARIA labels, semantic structure)

## 🎨 Tailwind CSS Development

This project uses **Tailwind CSS via CDN** for rapid development and styling. Key implementation details:

### Custom Configuration
```javascript
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'dark-bg': 'hsl(0, 0%, 8%)',
        'card-bg': 'hsl(0, 0%, 12%)',
        'link-bg': 'hsl(0, 0%, 20%)',
        'green-accent': 'hsl(75, 94%, 57%)',
        'white-text': 'hsl(0, 0%, 100%)',
        'dark-text': 'hsl(0, 0%, 20%)'
      }
    }
  }
}
```

### Key Tailwind Classes Used
- **Layout**: `min-h-screen`, `flex`, `items-center`, `justify-center`
- **Spacing**: `p-6`, `p-10`, `mb-6`, `gap-4`
- **Colors**: Custom color palette with `bg-dark-bg`, `bg-card-bg`, `text-white-text`
- **Typography**: `text-2xl`, `font-semibold`, `font-bold`
- **Interactions**: `hover:bg-green-accent`, `hover:text-dark-text`
- **Transitions**: `transition-all`, `duration-300`, `ease-in-out`
- **Responsive**: Mobile-first approach with `max-w-sm`

### Advantages of Tailwind CSS
- ⚡ **Rapid Development** - No need to write custom CSS
- 🎯 **Utility-First** - Compose designs directly in HTML
- 📱 **Responsive by Default** - Built-in breakpoint system
- 🎨 **Custom Design System** - Easy color and spacing customization
- 🚀 **Production Ready** - Optimized for performance

## 🚀 What I learned

While working on this project, I practiced and reinforced:

- **Tailwind CSS fundamentals** - Utility classes, custom configuration, and responsive design
- **CDN integration** - Setting up Tailwind without build tools for rapid prototyping
- **Custom color system** - Extending Tailwind's default palette with brand colors
- **Component composition** - Building card layouts using utility classes
- **Accessibility with Tailwind** - Implementing focus states and ARIA attributes
- **Google Fonts integration** - Loading custom fonts with Tailwind typography

I particularly enjoyed creating the hover effects using Tailwind utilities:

```html
<a href="#" class="bg-link-bg text-white-text hover:bg-green-accent hover:text-dark-text transition-all duration-300 ease-in-out focus:bg-green-accent focus:text-dark-text focus:outline-none focus:ring-2 focus:ring-green-accent focus:ring-offset-2">
  GitHub
</a>
```

## 📊 Web Analytics (Vercel)

To track visitors and page views, I integrated [Vercel Web Analytics](https://vercel.com/docs/analytics) by injecting the script directly into the HTML file.

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

- 🎯 **Advanced Tailwind patterns** - Component abstractions and design tokens
- ✨ **Tailwind CSS PostCSS setup** - Moving from CDN to build-time optimization
- 🎨 **Design system expansion** - Creating reusable component variants
- 📱 **Enhanced accessibility** - Better focus management and screen reader support
- ⚡ **Performance optimization** - Purging unused CSS in production

I also aim to experiment with:

- 🧪 **Tailwind UI components** - Pre-built component library integration
- 🎨 **Headless UI** - Unstyled, accessible UI components with Tailwind
- ⚡ **Tailwind CSS JIT** - Just-in-time compilation for better performance
- 🔧 **Tailwind CSS plugins** - Custom utility generation and extensions

---

## 📚 Useful Resources

- [🎨 Tailwind CSS Documentation](https://tailwindcss.com/docs) - Complete guide to utility-first CSS
- [🔤 Google Fonts](https://fonts.google.com/) - Web typography and font optimization
- [🎯 Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - VS Code extension for better DX
- [📝 Frontend Mentor Community](https://www.frontendmentor.io/community) - Great place for feedback and learning

---

## 👤 Author

- GitHub – [@LeoKuli](https://github.com/LeoKuli)  
- Frontend Mentor – [@LeoKuli](https://www.frontendmentor.io/profile/LeoKuli)

---

## 🙌 Acknowledgments

Thanks to the amazing [Frontend Mentor](https://www.frontendmentor.io) community for providing high-quality, real-world challenges that help us grow as developers.

If you have any **suggestions** or **feedback**, I'd love to hear from you!
