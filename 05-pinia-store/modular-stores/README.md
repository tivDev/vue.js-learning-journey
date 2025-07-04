### 📄 `modular-stores/README.md`

```markdown
# 📦 Pinia Modular Stores (Multiple Feature-Based Stores)

This project is part of **Phase 4: Vue Learning Journey – State Management**, demonstrating how to create and use **multiple independent Pinia stores** for different features/modules.

---

## 🎯 What You'll Learn

- ✅ How to create **separate Pinia stores** for each feature (counter, user)
- ✅ Use **modular state, actions, and reactivity**
- ✅ Organize logic per feature (recommended for large apps)

---

## 📁 Folder Structure

```

modular-stores/
└── src/
├── stores/
│   ├── counterStore.js     # Store for counter feature
│   └── userStore.js        # Store for user data
├── components/
│   ├── CounterPanel.vue    # Uses counterStore
│   └── UserPanel.vue       # Uses userStore
├── App.vue                 # Combines both components
└── main.js                 # App setup

````

---

## 📦 1. Install Pinia

```bash
npm install pinia
````

---

## ⚙️ 2. Setup Pinia in `main.js`

📄 `src/main.js`

```js
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
```

---

## 🏪 3. Create Modular Stores

### `counterStore.js`

```js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})
```

---

### `userStore.js`

```js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Tiv',
    role: 'Student'
  }),
  actions: {
    updateName(newName) {
      this.name = newName
    }
  }
})
```

---

## 🧩 4. Use Modular Stores in Components

### `CounterPanel.vue`

```vue
<template>
  <div>
    <h3>🔢 Counter Module</h3>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment">➕ Increment</button>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/counterStore'

export default {
  setup() {
    const counter = useCounterStore()
    return { counter }
  }
}
</script>
```

---

### `UserPanel.vue`

```vue
<template>
  <div>
    <h3>👤 User Module</h3>
    <p>Name: {{ user.name }}</p>
    <p>Role: {{ user.role }}</p>
    <input v-model="newName" placeholder="Enter new name" />
    <button @click="user.updateName(newName)">Update Name</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useUserStore } from '../stores/userStore'

export default {
  setup() {
    const user = useUserStore()
    const newName = ref('')
    return { user, newName }
  }
}
</script>
```

---

## 🖥️ 5. Root App View

📄 `App.vue`

```vue
<template>
  <div>
    <h2>📦 Modular Stores Demo</h2>
    <CounterPanel />
    <hr />
    <UserPanel />
  </div>
</template>

<script>
import CounterPanel from './components/CounterPanel.vue'
import UserPanel from './components/UserPanel.vue'

export default {
  components: {
    CounterPanel,
    UserPanel
  }
}
</script>
```

---

## 🚀 How to Run the Project

```bash
npm install
npm run serve   # or npm run dev if using Vite
```

Open: [http://localhost:8080](http://localhost:8080) or [http://localhost:5173](http://localhost:5173)

---

## ✅ Summary

| Feature       | Store Module   | Description                       |
| ------------- | -------------- | --------------------------------- |
| Count tracker | `counterStore` | Holds and increments a number     |
| User profile  | `userStore`    | Holds name and role, updates name |

---

## 🧠 Tips

* **Create one store per domain/module** (e.g. user, cart, product)
* Pinia stores are **modular by default**
* You can import multiple stores and use them side by side

---

## 🔁 Want to Go Further?

* Use **getters** in modular stores
* Share **one store across multiple components**
* Add **persisted state** using plugins like `pinia-plugin-persistedstate`

---

Happy modular coding with Pinia! 🧠📦✨

```
