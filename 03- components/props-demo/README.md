Great! Here is your `README.md` for the `03-components/props-demo` project, explaining everything clearly as part of your Vue learning journey:

---

### 📄 `props-demo/README.md`

```markdown
# 📘 Vue Props Demo

This project is part of my **Vue Learning Journey** under `03-components`. It focuses on understanding how to use **props** to pass data from a parent component to a child component.

---

## 📖 What Are Props?

In Vue.js, **props** (short for *properties*) are a mechanism for passing data **from a parent component to a child component**.

Props make components dynamic and reusable. They can be of various types, including:

- String
- Number
- Boolean
- Array
- Object

---

## 📁 Folder Structure

```

props-demo/
└── src/
├── components/
│   └── UserCard.vue       # Child component receiving props
├── App.vue                # Parent component sending props
└── main.js

````

---

## 🧩 Components Overview

### 🔹 App.vue (Parent)

- Sends several props to `UserCard.vue`, including:
  - `name` (string)
  - `age` (number)
  - `isActive` (boolean)
  - `skills` (array)
  - `profile` (object)

```vue
<UserCard
  name="Aung Kyaw Zin"
  age="25"
  isActive
  :skills="['Vue', 'Laravel', 'Frappe']"
  :profile="{ role: 'Intern', location: 'Cambodia' }"
/>
````

---

### 🔹 UserCard.vue (Child)

* Receives and displays all the props using `props:` option.

```js
props: {
  name: String,
  age: Number,
  isActive: Boolean,
  skills: Array,
  profile: Object
}
```

---

## 🚀 How to Run

### If using Vue CLI:

```bash
npm install
npm run serve
```

### If using Vite:

```bash
npm install
npm run dev
```

Then visit [http://localhost:8080](http://localhost:8080) or [http://localhost:5173](http://localhost:5173)

---

## ✅ Result Output

```
📦 Props Demo

Aung Kyaw Zin
Age: 25
Status: Active
Skills: Vue, Laravel, Frappe
Role: Intern | Location: Cambodia
```

---


