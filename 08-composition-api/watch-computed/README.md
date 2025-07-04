```markdown
# 👁️ Vue 3 Composition API – `watch()` vs `computed()`

This project is part of **Phase 8: Composition API** in the Vue Learning Journey.

It demonstrates:

- How to use `computed()` for reactive derived values
- How to use `watch()` to perform side effects (e.g., logging or triggering actions)

---

## 📁 Folder Structure

```

watch-computed/
└── src/
├── components/
│   └── WatchComputedDemo.vue   # Core example component
├── App.vue                     # Renders the demo
└── main.js                     # Vue app entry

````

---

## 🎯 Goal

- Create a form with first name and last name
- Show full name using `computed()`
- Detect changes to the full name using `watch()`
- Display a temporary message when full name changes

---

## 📄 Component: `WatchComputedDemo.vue`

```vue
<template>
  <div>
    <h2>🧠 Computed & Watch Demo</h2>

    <label>First Name:</label>
    <input v-model="firstName" />

    <label>Last Name:</label>
    <input v-model="lastName" />

    <p>👤 Full Name (computed): <strong>{{ fullName }}</strong></p>

    <p v-if="message" style="color: green">{{ message }}</p>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'

export default {
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const message = ref('')

    const fullName = computed(() => {
      return `${firstName.value} ${lastName.value}`.trim()
    })

    watch(fullName, (newVal, oldVal) => {
      message.value = `Full name changed: "${oldVal}" → "${newVal}"`
      setTimeout(() => (message.value = ''), 3000)
    })

    return { firstName, lastName, fullName, message }
  }
}
</script>
````

---

## 📄 `App.vue`

```vue
<template>
  <div>
    <WatchComputedDemo />
  </div>
</template>

<script>
import WatchComputedDemo from './components/WatchComputedDemo.vue'

export default {
  components: {
    WatchComputedDemo
  }
}
</script>
```

---

## 🚀 Run the Project

```bash
npm install
npm run serve   # or npm run dev (for Vite)
```

Open browser:

* Vue CLI → `http://localhost:8080`
* Vite → `http://localhost:5173`

---

## 🧠 Summary

| Feature      | Purpose                                                   |
| ------------ | --------------------------------------------------------- |
| `ref()`      | Holds reactive primitive values (like `string`, `number`) |
| `computed()` | Creates derived reactive values (e.g., `fullName`)        |
| `watch()`    | Performs side effects when a reactive value changes       |

---

## 🧪 Output Example

1. Enter `John` in First Name
2. Enter `Doe` in Last Name
3. `Full Name` updates instantly
4. Message shows:

   ```
   Full name changed: "John" → "John Doe"
   ```

---

This project is a great intro to using reactive state with side effects in Vue 3!

Want to continue next with `watchEffect()` or `provide/inject`?

```