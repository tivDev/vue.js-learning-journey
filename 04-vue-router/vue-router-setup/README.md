---

### 📄 `04-vue-router/vue-router-setup/README.md`

````markdown
# 🚦 Vue Router Setup (Vue 3)

This project is part of **Phase 3: Vue Learning Journey**, demonstrating how to set up **Vue Router** in a Vue 3 application.

---

## 📦 What is Vue Router?

Vue Router is the official routing library for Vue.js. It enables you to:

- Navigate between pages or components
- Create Single Page Applications (SPA)
- Use route-based code-splitting
- Handle dynamic route matching, navigation guards, and more

---

## 🧰 Prerequisites

- Node.js and npm installed
- A Vue 3 project created (e.g. via `vue create vue-router-setup` or Vite)

---

## 📥 Installation

To install Vue Router 4 (used with Vue 3):

```bash
npm install vue-router@4
````

---

## 📁 Folder Structure

```
vue-router-setup/
└── src/
    ├── components/
    │   ├── HomePage.vue          # Component for '/'
    │   └── AboutPage.vue         # Component for '/about'
    ├── App.vue                   # Contains router links and <router-view>
    ├── main.js                   # Mounts Vue app and uses router
    └── router.js                 # Vue Router config
```

---

## 🚀 How to Run the App

```bash
npm install
npm run serve   # Vue CLI
# or
npm run dev     # Vite
```

Open your browser at:

* Vue CLI: [http://localhost:8080](http://localhost:8080)
* Vite: [http://localhost:5173](http://localhost:5173)

---

## 🧪 Result Preview

```
🏠 Home Page
Welcome to the Home page!

ℹ️ About Page
This is the About page.
```

