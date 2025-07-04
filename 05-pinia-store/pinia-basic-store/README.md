### 📄 `05-pinia-store/pinia-basic-store/README.md`

```markdown
# 📦 Pinia Basic Store (Vue 3 State Management)

This project is part of **Phase 4: Vue Learning Journey – State Management**, and it demonstrates how to use **Pinia**, the recommended state management library for Vue 3.

---

## 🔍 What is Pinia?

**Pinia** is a lightweight state management library officially recommended by the Vue team. It is:

- Simple and intuitive
- Modular (split stores)
- Type-safe (supports TypeScript)
- Devtools friendly (built-in Vue Devtools support)

---

## 🎯 Learning Goals

- ✅ Install and configure Pinia in a Vue 3 app
- ✅ Create a `counter` store using `defineStore`
- ✅ Use `state`, `getters`, and `actions` from the store
- ✅ Access and update store data inside Vue components

---

## 📁 Project Structure

```

pinia-basic-store/
└── src/
├── stores/
│   └── counterStore.js     # Pinia store definition
├── components/
│   └── CounterPanel.vue    # UI that uses the counter store
├── App.vue                 # Root component
└── main.js                 # App setup with Pinia

````

---

## 📦 1. Install Pinia

Install it into your Vue project:

```bash
npm install pinia
````

---

## 🔌 2. Configure Pinia in main.js

📄 `src/main.js`

```js
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia()) // Activate Pinia globally
app.mount('#app')
```

---

## 🏪 3. Create a Pinia Store

📄 `src/stores/counterStore.js`

```js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})
```

### 🧠 Explanation:

* `state`: The reactive data object
* `getters`: Computed values based on the state
* `actions`: Functions to modify the state (like methods)

---

## 🧩 4. Use the Store in a Component

📄 `src/components/CounterPanel.vue`

```vue
<template>
  <div>
    <h2>📦 Pinia Counter</h2>
    <p>Count: {{ counter.count }}</p>
    <p>Double: {{ counter.doubleCount }}</p>
    <button @click="counter.increment">➕</button>
    <button @click="counter.decrement">➖</button>
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

### 💡 Notes:

* The `useCounterStore()` hook gives you access to the store
* You can use state, getters, and actions directly

---

## 🖥️ 5. Root Component

📄 `src/App.vue`

```vue
<template>
  <div id="app">
    <CounterPanel />
  </div>
</template>

<script>
import CounterPanel from './components/CounterPanel.vue'

export default {
  components: {
    CounterPanel
  }
}
</script>
```

---

## 🚀 Run the App

```bash
npm install
npm run serve   # or npm run dev (for Vite)
```

Then open: [http://localhost:8080](http://localhost:8080) or [http://localhost:5173](http://localhost:5173)

---

## 🔄 Output

```
Count: 0
Double: 0

[ + ] [ - ] → Click to increase/decrease
```

---

## 🧠 Best Practices with Pinia

* Use **one store per module or feature** (e.g., `userStore`, `cartStore`)
* Always access store via `useXxxStore()` in `setup()`
* Use actions for complex logic instead of writing directly in components

---

## ✅ You’ve Learned:

| Concept       | Description                            |
| ------------- | -------------------------------------- |
| `defineStore` | Create a Pinia store                   |
| `state`       | Reactive shared state                  |
| `getters`     | Computed-like logic for the store      |
| `actions`     | Methods that update the state          |
| `useStore()`  | Hook to access the store in components |

---

Happy state managing with Pinia! 🎉

```
