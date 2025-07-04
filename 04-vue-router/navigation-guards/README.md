### 📄 `navigation-guards/README.md`

```markdown
# 🔐 Vue Router – Navigation Guards (beforeEnter & beforeEach)

This project is part of my **Vue Learning Journey – Phase 3 (Vue Router)**.

It demonstrates how to use **Navigation Guards** to control access to routes based on conditions like login status. You’ll see examples of both:

- **Route-specific guards**: `beforeEnter`
- **Global guards**: `router.beforeEach`

---

## 📚 What Are Navigation Guards?

Navigation guards are functions that run **before navigating** to a route. They let you:

- Block or redirect access
- Run logic (e.g., check authentication or permissions)
- Log transitions

---

## ⚙️ Use Case

Simulate a protected route (Dashboard) that requires login. If the user is **not logged in**, they will be redirected to the **Login page**.

---

## 📁 Folder Structure

```

navigation-guards/
└── src/
├── components/
│   ├── LoginPage.vue         # Login screen (no auth logic, just placeholder)
│   └── DashboardPage.vue     # Protected page (guarded)
├── App.vue                   # Layout with navigation links
├── main.js                   # App bootstrap
└── router.js                 # Vue Router with guards

````

---

## 🔐 Authentication Simulated

A dummy variable simulates login:

```js
const isLoggedIn = false
````

> You can change it to `true` to test access to the dashboard.

---

## 🧭 Route Configuration (router.js)

```js
{
  path: '/dashboard',
  component: DashboardPage,
  meta: { requiresAuth: true },
  beforeEnter: (to, from, next) => {
    if (isLoggedIn) next()
    else next('/login')
  }
}
```

Also uses a **global guard**:

```js
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})
```

---

## 🧩 Components

### 📄 LoginPage.vue

Displays a message prompting user to log in. No real login logic here.

### 📄 DashboardPage.vue

Protected by navigation guard. Accessible only if `isLoggedIn === true`.

### 📄 App.vue

Includes navigation:

```vue
<router-link to="/dashboard">Dashboard</router-link>
<router-link to="/login">Login</router-link>
```

---

## 🚀 How to Run the Project

```bash
npm install
npm run serve    # Vue CLI
# or
npm run dev      # Vite
```

---

## 🧪 Test Behavior

1. Set `isLoggedIn = false`:

   * Visit `/dashboard` → ❌ Redirected to `/login`

2. Set `isLoggedIn = true`:

   * Visit `/dashboard` → ✅ Allowed access

---