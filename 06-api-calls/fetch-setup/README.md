### 📄 `fetch-setup/README.md`

```markdown
# 🌐 Fetch API Setup in Vue 3 – Fetch Users from API

This project is part of **Phase 6: Vue Learning Journey – API Calls**.

It demonstrates how to:

- Use the **native Fetch API** in a Vue 3 application
- Fetch data from an external API endpoint (`https://jsonplaceholder.typicode.com/users`)
- Manage loading and error states effectively
- Display fetched data in a Vue component

---

## 🔍 What is the Fetch API?

The Fetch API is a built-in browser API to make HTTP requests. It supports promises and allows you to work with network requests natively without additional libraries.

---

## 📁 Project Structure

```

fetch-setup/
└── src/
├── components/
│   └── UserList.vue       # Component fetching and displaying users
├── App.vue                # Root component
└── main.js                # Vue app entry point

````

---

## 🛠️ 1. UserList Component

📄 `src/components/UserList.vue`

This component fetches user data when created, displays a loading message, handles errors, and lists users on success.

```vue
<template>
  <div>
    <h2>👥 User List (Fetch API)</h2>
    <div v-if="loading">Loading users...</div>
    <div v-if="error" style="color: red;">Error: {{ error }}</div>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      loading: false,
      error: null
    }
  },
  async created() {
    this.loading = true
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      this.users = await response.json()
    } catch (err) {
      this.error = err.message || 'Failed to load users'
    } finally {
      this.loading = false
    }
  }
}
</script>
````

---

## 🖥️ 2. Root Component and Main Setup

### `src/App.vue`

```vue
<template>
  <div id="app">
    <UserList />
  </div>
</template>

<script>
import UserList from './components/UserList.vue'

export default {
  components: { UserList }
}
</script>
```

### `src/main.js`

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

---

## 🚀 How to Run the Project

```bash
npm install
npm run serve   # Vue CLI
# or
npm run dev     # Vite
```

Open your browser at:

* Vue CLI: `http://localhost:8080`
* Vite: `http://localhost:5173`

---

## ✅ Summary

| Feature         | Description                            |
| --------------- | -------------------------------------- |
| Fetch API       | Uses native browser API to fetch data  |
| API Call        | Fetches users from JSONPlaceholder API |
| Loading & Error | Displays user-friendly messages        |
| Data Display    | Renders list of user names and emails  |

---

## 🧠 Tips

* Native Fetch API is built into browsers — no extra installs needed
* Always check `response.ok` to detect HTTP errors
* Use async/await for clean asynchronous code
* Handle loading and error UI states for better UX

---

Happy coding with Vue and the Fetch API! 🚀

```