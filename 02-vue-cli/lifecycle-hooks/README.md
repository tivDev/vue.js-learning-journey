```markdown
# 🔁 Vue 3 Lifecycle Hooks – All in One (Composition API)

This project demonstrates how to use all major Vue 3 lifecycle hooks in a single file using the **Composition API**.

It is part of the `02-vue-cli` learning phase in the Vue.js Learning Journey.

---

## 📁 Project Structure

```

lifecycle-hooks/
├── src/
│   ├── App.vue       # Contains all lifecycle logic
│   └── main.js       # Vue 3 entry point
└── README.md         # This file

````

---

## 📦 Setup Instructions

```bash
cd 02-vue-cli/lifecycle-hooks

npm install
npm run serve   # or: npm run dev (if using Vite)
````

Visit: `http://localhost:8080` (Vue CLI) or `http://localhost:5173` (Vite)

---

## 🎯 What You’ll Learn

This single-component demo shows how and **when** each lifecycle hook is triggered:

| Lifecycle Hook    | When It Runs                                |
| ----------------- | ------------------------------------------- |
| `onBeforeMount`   | Just before the component is mounted        |
| `onMounted`       | After the DOM is mounted                    |
| `onBeforeUpdate`  | Before reactive data updates the DOM        |
| `onUpdated`       | After the DOM is updated                    |
| `onBeforeUnmount` | Just before the component is destroyed      |
| `onUnmounted`     | After the component is removed              |
| `onErrorCaptured` | When an error is thrown in child components |

---

## ✅ Code Overview: `App.vue`

```js
setup() {
  const count = ref(0)
  const showChild = ref(true)
  const errorMessage = ref('')

  onBeforeMount(() => {
    console.log('🔸 onBeforeMount: Component will mount')
  })

  onMounted(() => {
    console.log('✅ onMounted: Component mounted')
  })

  onBeforeUpdate(() => {
    console.log('🔸 onBeforeUpdate: Before DOM update')
  })

  onUpdated(() => {
    console.log('✅ onUpdated: After DOM update')
  })

  onBeforeUnmount(() => {
    console.log('🔸 onBeforeUnmount: Component will be destroyed')
  })

  onUnmounted(() => {
    console.log('✅ onUnmounted: Component destroyed')
  })

  onErrorCaptured((err, instance, info) => {
    errorMessage.value = `Captured error: ${err.message}`
    console.error('🚨 onErrorCaptured:', err, info)
    return false
  })

  return { count, showChild, errorMessage }
}
```

---

## 🧪 Try It Out

* 🔼 Click the **Increase Count** button to trigger `onBeforeUpdate` and `onUpdated`.
* 🔀 Toggle **Mount/Unmount Child** to see `onBeforeUnmount` and `onUnmounted`.
* ❗ Trigger an error in a child block (optional) to see `onErrorCaptured`.

---

## 🧠 Summary

Vue Composition API provides lifecycle hooks that work **only inside `setup()`**.
These hooks are imported from `vue` and used like JavaScript functions.

* Great for organizing lifecycle logic in Composition API
* Flexible, testable, and clearer than Options API

---

Happy Coding! 🎉

```
