### 📄 `slots-example/README.md`

```markdown
# 🎴 Vue Slots Example

This project is part of my **Vue Learning Journey** under `04-components`. It demonstrates the use of **slots** for content projection in Vue 3, including:

- Default Slots
- Named Slots
- Scoped Slots

---

## 📖 What Are Slots?

Slots are Vue's way to let a parent component pass **template content** to a child component, enabling flexible and reusable components. Slots allow content projection — that is, injecting HTML or components into predefined placeholders inside child components.

---

## 📁 Folder Structure

```

slots-example/
└── src/
├── components/
│   ├── CardSlot.vue           # Card component demonstrating default & named slots
│   └── CardWithScopedSlot.vue # Component demonstrating scoped slots
├── App.vue                    # Parent component using the slot components
└── main.js                   # App entry point

````

---

## 🧩 Components Overview

### 🔹 CardSlot.vue

- Uses **default slot** for main content
- Uses **named slots** `header` and `footer` for specific content areas

### 🔹 CardWithScopedSlot.vue

- Demonstrates **scoped slots** passing data (`user`) from child to parent

---

## 🚀 How to Run

### Using Vue CLI:

```bash
npm install
npm run serve
````

### Using Vite:

```bash
npm install
npm run dev
```

Then open your browser at [http://localhost:8080](http://localhost:8080) or [http://localhost:5173](http://localhost:5173).

---

## ✅ Result Output

You will see:

* A card with custom header, default content, and footer passed via slots.
* A scoped slot example showing user info passed from child to parent slot content.

---
