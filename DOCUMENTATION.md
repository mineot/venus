# 📘 Usage Guide — Venus CSS

This guide provides practical examples of how to use the classes and components available in the **Venus CSS** library.  
Use this material as a quick reference for structuring layouts with a unified style and modern visual effects.

---

## 🧱 Containers

### `<body>` tag

The `body` tag is styled to center the page content and organize the overall layout.  
It helps maintain visual consistency and structure. This is also where the **background texture** (defined via the `--bg-texture` variable) is applied.

---

### `container` class

All main content should be wrapped in a container. There are two ways to use it:

#### Default mode

Stacks elements vertically with spacing between them.

```html
<section class="container">...</section>
```

#### Centered mode

Centers content **both vertically and horizontally** — ideal for login pages, welcome screens, splash pages, etc.

```html
<section class="container centered">...</section>
```

---

## 🌫️ Glass Effect

The `.glass` class creates a **backdrop blur** layer, perfect for softening or dimming the background when overlaying content.

```html
<div id="glassId" class="glass"></div>
```

To show the effect, dynamically add the `.show` class:

```js
document.getElementById('glassId').classList.add('show');
```

---

## 📚 Sidebar

The sidebar is a panel that slides in from the left.  
It can be used for menus, navigation, shortcuts, or extra content.

```html
<aside id="sidebarId" class="sidebar">Content</aside>
```

To display the sidebar, also use the `.show` class:

```js
document.getElementById('sidebarId').classList.add('show');
```

---

### 🧩 Activation via Button

You can automatically show both `glass` and `sidebar` using a button with `data-glass` and `data-sidebar` attributes pointing to the respective elements:

```html
<button data-glass="#glass" data-sidebar="#sidebar">Open Sidebar and Glass</button>
```

With a small JavaScript helper in your project, clicking this button will automatically add the `.show` class to both `#glass` and `#sidebar`.

---

✅ **Summary**

- Use `.container` to structure your content, and `.centered` to fully center it.
- Use `.glass` for blur overlay effects.
- Use `.sidebar` for animated side panels.
- Interactions are triggered by toggling the `.show` class — either manually or with `data-*` attributes on buttons.

---

Now you're ready to build clean, elegant, and consistent interfaces using the **Venus CSS** visual identity.
