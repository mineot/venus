# 🌸 Venus CSS

**Venus CSS** is a style library inspired by the goddess of beauty, created to simplify the development of modern, fluid, and consistent user interfaces.

Built on top of **TailwindCSS**, Venus encapsulates common visual patterns into a modular system with visual themes, a pre-defined layout, and ready-to-use effects — all while preserving the flexibility Tailwind offers.

---

## 🚀 Features

- 🎨 **Custom themes** using CSS variables
- 📦 **Base layout** with utility classes applied via `@apply`
- 🌫️ **Ready-made visual effects**: glassmorphism, transitions, animated sidebar
- 💡 Clear separation between **core**, **theme**, and **layout**
- ⚡ Fast compilation using **Vite**

---

## 📦 Requirements

To compile Venus, you’ll need:

- **Node.js 18+**
- **TailwindCSS 4+**
- **TypeScript 5+**
- **Vite 6+**

---

## 🎨 Creating Your Own Theme

To customize the look and feel of your project using Venus, you can easily build your own theme.

1. Clone this repository locally.
2. Create a new branch for your theme version.
3. Edit the file `src/styles/theme.css` to define your custom color palette, variables, and visual identity.

Once your edits are ready, run the following commands **in separate terminals**:

This way, you'll see your changes live as you adjust the theme.

```bash
npm run dev:css   # Watches and builds TailwindCSS styles in real time
npm run dev:vite  # Starts Vite's dev server for preview
```

---

## 🛠️ Installation & Usage

To generate the ready-to-use files, run the build command:

```bash
npm run build
```

After that, copy the files from the `dist/` folder to the project where you want to apply Venus styles:

```txt
dist/
└── assets/
    ├── texture.png       # Optional background texture used in the default theme
    ├── index-xxxx.css    # Final CSS with Venus styles (base + theme + layout)
    └── index-xxxx.js     # JS with interactive features (if applicable)
```

You can include the files in your HTML like this:

```html
<link rel="stylesheet" href="/path/to/index-xxxx.css" />
<script src="/path/to/index-xxxx.js" type="module"></script>
```

---

## ✨ Purpose

TailwindCSS is powerful, but it can become verbose in projects that share a consistent visual identity.  
**Venus CSS** was created to encapsulate those patterns, speed up development, and maintain a unified style with less effort — while leveraging the best of what Tailwind offers.

---

## 📘 Documentation

For detailed usage examples and integration tips, check out the [Documentation](./doc/documentation.md).

---

## 📄 License

This project is licensed under the **Apache License 2.0**.  
For more information, see the `LICENSE` file.
