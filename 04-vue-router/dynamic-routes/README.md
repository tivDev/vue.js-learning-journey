### 📄 `dynamic-routes/README.md`

```markdown
# 🧭 Vue Router – Dynamic Routes (Route Params & Props)

This project is part of my **Vue Learning Journey**, Phase 3 — Vue Router. It demonstrates how to:

- Create dynamic route paths with `:params`
- Navigate to routes programmatically or with `<router-link>`
- Pass route params as **props** to components (recommended)

---

## 🧠 What Are Dynamic Routes?

Dynamic routes allow you to match parts of a URL using **route parameters** like `:id`, `:slug`, etc. This is helpful for pages like:

- `/user/:id`
- `/post/:slug`
- `/product/:productId`

---

## 📦 Project Structure

```

dynamic-routes/
└── src/
├── components/
│   ├── UserList.vue        # Lists users with links
│   └── UserDetail.vue      # Displays user detail from dynamic route param
├── App.vue                 # <router-view> holder
├── main.js                 # Mount Vue and use router
└── router.js               # Vue Router config with dynamic route

````

---

## 🔧 1. Setup Vue Router with Dynamic Route

📄 `src/router.js`

```js
import { createRouter, createWebHistory } from 'vue-router'
import UserList from './components/UserList.vue'
import UserDetail from './components/UserDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: UserList },
  {
    path: '/user/:id',
    name: 'UserDetail',
    component: UserDetail,
    props: true // passes route param `id` as a prop
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
````

---

## 🧩 2. Component Overview

### 🧍 UserList.vue

Displays a list of users and navigates using dynamic links.

```vue
<router-link :to="`/user/${user.id}`">{{ user.name }}</router-link>
```

It uses `v-for` to generate the list.

---

### 👤 UserDetail.vue

Receives the dynamic route param as a prop (`id`) and displays it.

```vue
<template>
  <div>
    <h1>👤 User Detail</h1>
    <p>User ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserDetail',
  props: ['id']
}
</script>
```

> 🔍 `props: true` in router config makes this possible — clean and testable!

---

## 🧪 3. Try It Out

Start the dev server:

```bash
npm install
npm run serve   # or npm run dev if using Vite
```

* Go to [http://localhost:8080](http://localhost:8080)
* Click on a user name to go to `/user/:id`
* You’ll see the User Detail page for that ID

---

## ✅ What You Learned

| Concept              | Description                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| `:param`             | Defines a dynamic segment in the route path                                   |
| `this.$route.params` | Access route parameters from inside a component (not recommended in template) |
| `props: true`        | Pass route params to component as props (cleaner, recommended)                |
| `<router-link>`      | Navigates to dynamic routes                                                   |

---

