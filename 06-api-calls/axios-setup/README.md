```markdown
# 🌐 Axios Setup in Vue 3 – Fetch Users from API

This project is part of **Phase 6: Vue Learning Journey – API Calls**.

It demonstrates how to:

- Install and configure Axios in a Vue 3 app
- Create a reusable Axios instance with a base URL
- Fetch data from an external API (`https://jsonplaceholder.typicode.com/users`)
- Handle loading and error states gracefully
- Display fetched data in a component

---

## 🔍 What is Axios?

Axios is a popular HTTP client library for JavaScript used to make API requests. It supports promises and works seamlessly with Vue.

---

## 📁 Project Structure

```

axios-setup/
└── src/
├── axios.js               # Axios instance configuration
├── components/
│   └── UserList.vue       # Component fetching and showing users
├── App.vue                # Root component
└── main.js                # Vue app entry

````

---

## 📦 1. Install Axios

Install Axios via npm:

```bash
npm install axios
````

---

## ⚙️ 2. Configure Axios Instance

📄 `src/axios.js`

```js
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient
```

* This creates a reusable Axios instance with the base URL preset.

---

## 🧩 3. UserList Component

📄 `src/components/UserList.vue`

```vue
<template>
  <div>
    <h2>👥 User List</h2>
    <div v-if="loading">Loading users...</div>
    <div v-if="error" style="color:red;">Error: {{ error }}</div>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<script>
import apiClient from '../axios'

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
      const response = await apiClient.get('/users')
      this.users = response.data
    } catch (err) {
      this.error = err.message || 'Failed to load users'
    } finally {
      this.loading = false
    }
  }
}
</script>
```

* Fetches users on component creation
* Handles loading and error display

---

## 🖥️ 4. Root Component and Main Setup

📄 `src/App.vue`

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

📄 `src/main.js`

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

---

## 🚀 Run the Project

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

| Feature         | Description                               |
| --------------- | ----------------------------------------- |
| Axios Instance  | Configured with base URL and headers      |
| API Call        | Fetch users from JSONPlaceholder API      |
| Loading & Error | Show user-friendly status during requests |
| Data Display    | Render list of user names and emails      |

---

## 🧠 Tips

* Use Axios instances for cleaner, reusable API calls
* Always handle loading and errors in UI
* Use async/await for readable asynchronous code

---

Happy coding with Axios & Vue! 🚀

```