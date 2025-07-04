### 📄 `component-basics/README.md`

```markdown
# 📘 Vue Component Basics

This example demonstrates **parent-child component communication** in Vue 3 using props. It is part of my Vue Learning Journey under `02-components`.

---

## 📖 What Are Components in Vue?

In Vue.js, **components** are reusable, self-contained blocks of code that represent parts of the user interface. Each component can have its own:

- **Template** (HTML)
- **Script** (JavaScript logic)
- **Style** (CSS or SCSS)

Components allow you to break your UI into small, manageable pieces like buttons, forms, or entire sections — making your code **cleaner, reusable, and easier to maintain**.

There are 2 common types of components:
- **Parent Component** — holds logic and data
- **Child Component** — reusable pieces that receive data via **props**

---

## 📁 Folder Structure

```

component-basics/
└── src/
├── components/
│   └── ChildMessage.vue   # Child component
├── App.vue                # Parent component
└── main.js                # Entry point

````

---

## 📦 Features Covered

- Creating **parent and child components**
- **Importing** a child component into a parent
- **Passing props** from parent to child
- Basic Vue file structure

---

## 🔗 Component Communication

- **Parent Component**: `App.vue`
  - Sends a `message` prop to the child.
- **Child Component**: `ChildMessage.vue`
  - Receives the `message` prop and displays it.

---

## 🚀 How to Run

### If using Vue CLI:

```bash
npm install
npm run serve
````

### If using Vite:

```bash
npm install
npm run dev
```

Then open: [http://localhost:5173](http://localhost:5173) or [http://localhost:8080](http://localhost:8080)

---

## ✅ Result

The browser displays a simple parent-child component example with a message passed from the parent to the child:

```
👨‍👩‍👧 Parent Component
This is the parent.

👶 Child Component
Message from parent: Hello from Parent!
```

---


