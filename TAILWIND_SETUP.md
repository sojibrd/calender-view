# 🚀 Tailwind CSS Setup & Advanced Configuration

এই ডকুমেন্টটি আপনার Ember.js প্রজেক্টে Tailwind CSS (v3.4.x) এবং PostCSS-এর অ্যাডভান্সড কনফিগারেশন বজায় রাখতে সাহায্য করবে।

---

## 📦 ১. ইন্সটলেশন (প্রয়োজন হলে)
```bash
npm install -D tailwindcss@3.4.17 postcss autoprefixer ember-cli-postcss @tailwindcss/forms @tailwindcss/typography
```

## ⚙️ ২. অ্যাডভান্সড `tailwind.config.js`
আপনার প্রজেক্টে semantic tokens ব্যবহার করা হয়েছে, যা দারুণ! কনফিগারেশনটি এভাবে মেইনটেইন করুন:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{gjs,gts,hbs,html,js,ts}',
    './tests/**/*.{gjs,gts,hbs,html,js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        // ... অন্যান্য কাস্টম সাইজ
      },
      colors: {
        surface: 'var(--color-surface)',
        'on-surface': 'var(--color-on-surface)',
        primary: 'var(--color-primary)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
```

## 🏗️ ৩. `ember-cli-build.js` (অপ্টিমাইজড)
বিল্ড পারফরম্যান্সের জন্য `cacheInclude` ঠিক রাখা অত্যন্ত জরুরি।

```javascript
const app = new EmberApp(defaults, {
  postcssOptions: {
    compile: {
      enabled: true,
      cacheInclude: [/.*\.(css|gjs|hbs|html|js|ts)$/], // সব ফাইল ট্র্যাক করবে
      plugins: [
        {
          module: require('tailwindcss'),
          options: { config: './tailwind.config.js' },
        },
        require('autoprefixer'),
      ],
    },
  },
});
```

## 🎨 ৪. `app/styles/app.css` (বেস্ট প্র্যাকটিস)
CSS ফাইলে Tailwind-এর সাথে কাস্টম ভেরিয়েবলগুলো ডিফাইন করুন:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-surface: #ffffff;
  --color-on-surface: #1f2937;
  --color-primary: #2563eb;
}

/* প্রয়োজন হলে লেয়ার ব্যবহার করুন */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-primary text-white rounded hover:opacity-90;
  }
}
```

## 💡 টিপস
১. **Design Tokens:** নতুন রঙ বা সাইজ যোগ করার আগে সবসময় `tailwind.config.js` এ `theme.extend` ব্যবহার করুন।
২. **Performance:** অনেক বেশি কাস্টম CSS লেখা এড়িয়ে চলুন, সরাসরি Tailwind ইউটিলিটি ক্লাস ব্যবহার করার চেষ্টা করুন।
৩. **Plugins:** ফর্ম স্টাইলিংয়ের জন্য `@tailwindcss/forms` প্লাগিনটি ব্যবহার করা রিকমেন্ডেড।

*Updated by Sojib (Senior Ember Developer)*
