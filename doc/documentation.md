# 📘 Usage Guide — Venus CSS

This guide provides practical examples of how to use the classes and components available in the **Venus CSS** library. Use this material as a quick reference for structuring layouts with a modern and unified look.

---

## 🎨 Theme

The file `src/styles/theme.css` contains variables that define the visual identity of the theme.  
This allows you to customize the site centrally, without having to manually change every class.

Available variables:

- `--bg-texture`: Background texture image (use `none` to disable)
- `--color-background`: Main background color
- `--color-primary`: Structural elements (borders, lines, containers)
- `--color-secondary`: Action elements (buttons, links, icons)
- `--color-tertiary`: Decorative elements (progress bars, badges)
- `--color-success`: Positive feedback indicators
- `--color-danger`: Critical alerts
- `--color-warning`: Warning messages
- `--color-info`: Informational messages

You can change these values directly to apply your own theme site-wide.

---

## 🧱 Layout

- **`body`**: Already styled with `flex` and `flex-col`. It organizes the layout automatically, with no need for additional classes.
- **`.body-content`**: Main content container. Also uses `flex-col` and adapts to the screen size.
- **`.content-centered`**: A subclass of `.body-content` that centers the content on screen.
- **`.backdrop-glass`**: Adds a frosted glass overlay. Useful when other UI elements like the sidebar are active.
- **`.sidebar`**: Fixed sidebar on the left. Should be at the same hierarchy level as `.backdrop-glass` and `.body-content`. It can be toggled with the attribute `data-trigger-sidebar="1"`.

### Structure example:

```html
<body>
  <section class="body-content">
    <button data-trigger-sidebar="1">Open Sidebar</button>
    <!-- Content -->
  </section>
  <div class="glass"></div>
  <aside class="sidebar">
    <!-- Sidebar content -->
  </aside>
</body>
```

---

## 🧩 Components

### 🔠 Typography (`h1` to `h6`)

Heading tags come with responsive sizes and `font-bold` by default.  
To use a lighter version, wrap the title with the `<small>` tag:

```html
<h1>Bold Title</h1>
<h1><small>Light Title</small></h1>
```

---

### 🔗 Links (`a`)

Anchor tags are styled based on the theme colors, such as `primary`, `secondary`, etc.

```html
<a href="#" class="primary">Styled link with theme color</a>
```

---

### 🔘 Buttons (`button`)

Buttons follow the same color styling logic as links.

```html
<button class="primary">Button with theme color</button>
```

---

### 📦 Boxes (`.box`)

- `box`: Adds a border. Supports color variants like `primary`, `secondary`, etc.
- `box.space`: Adds internal padding
- `box.rounded`: Applies rounded corners
- `box.bg`: Applies a background using the theme color. Example: `.box.primary.bg`
- `box.lux`: Adds an inner shadow on hover. Example: `.box.primary.lux`
- `box.lux.on`: Keeps the inner shadow always visible

---

## ⚙️ Interactive Triggers

Certain behaviors (such as opening the sidebar) are activated using `data-*` attributes.  
Example:

```html
<button data-trigger-sidebar="1">Open Menu</button>
```

---

### ✅ Final Notes

Venus CSS is extensible. You can combine utilities like `@apply`, `@layer`, `@each`, and custom variables to create reusable and consistent components.
