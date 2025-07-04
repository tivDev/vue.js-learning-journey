
```markdown
# 🔄 Vue Conditional Rendering Demo

This project is part of my **Vue Learning Journey** under `06-components`. It demonstrates how to use Vue directives to conditionally render or show elements inside components.

---

## 📖 What Is Conditional Rendering?

Vue provides directives to conditionally control whether elements appear in the DOM or just toggle their visibility:

- `v-if` — renders element **only if** condition is true (adds/removes element)
- `v-else` — used with `v-if` as the fallback block
- `v-show` — toggles element’s CSS `display` without removing it from DOM

---

## 📁 Folder Structure

```

conditional-rendering/
└── src/
├── components/
│   └── ToggleText.vue      # Child component with conditional rendering
├── App.vue                # Parent toggling the state
└── main.js

````

---

## 🧩 Components Overview

### 🔹 ToggleText.vue

- Receives a boolean prop `visible`
- Uses `v-if`, `v-else`, and `v-show` to control visibility of paragraphs

### 🔹 App.vue

- Manages `visible` state
- Passes state to `ToggleText` as prop
- Button toggles the `visible` state

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

Open your browser at [http://localhost:8080](http://localhost:8080) or [http://localhost:5173](http://localhost:5173).

---

## ✅ Result Output

Click the button to toggle the visibility of the text elements using different Vue conditional directives.

---
