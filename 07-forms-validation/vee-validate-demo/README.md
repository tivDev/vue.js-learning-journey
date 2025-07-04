```markdown
# 🔁 Vue 3 Composition API – `ref()` vs `reactive()`

This project is part of **Phase 8: Composition API** in the Vue.js Learning Journey.  
It demonstrates the **difference between `ref()` and `reactive()`** in Vue 3.

---

## 🎯 What You'll Learn

- What `ref()` and `reactive()` are
- How Vue tracks reactivity using each
- When to use `ref()` vs `reactive()` in your components

---

## 🧠 Definitions

| Feature      | `ref()`                                  | `reactive()`                          |
|--------------|-------------------------------------------|----------------------------------------|
| Use case     | For **primitive values** (number, string) | For **objects and arrays**             |
| Access       | Use `.value` in JavaScript                | Access properties directly             |
| Reactivity   | Wrapped inside `.value`                   | Reactive as-is                         |
| Template     | Automatically unwraps in templates        | Directly usable in templates           |

---

## 📁 Project Structure

```

ref-vs-reactive/
└── src/
├── components/
│   └── StateComparison.vue   # Demo of ref() and reactive()
├── App.vue                   # Renders the component
└── main.js                   # Entry file

````

---

## 🧩 Component: `StateComparison.vue`

```vue
<template>
  <div>
    <h2>🔍 Ref vs Reactive Demo</h2>

    <section>
      <h3>ref()</h3>
      <p>Counter: {{ counter }}</p>
      <button @click="counter++">+1</button>
    </section>

    <section>
      <h3>reactive()</h3>
      <p>User: {{ user.name }} ({{ user.age }} years old)</p>
      <button @click="user.age++">Increase Age</button>
    </section>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup() {
    const counter = ref(0)
    const user = reactive({
      name: 'Tiv',
      age: 20
    })

    return { counter, user }
  }
}
</script>
````

---

## 🚀 Run This Project

```bash
npm install
npm run serve   # or npm run dev if using Vite
```

Visit: `http://localhost:8080` or `http://localhost:5173`

---

## 🔎 Output Behavior

* **Counter** uses `ref(0)`, and updates a number.
* **User** uses `reactive({ name, age })`, and updates age property.
* Vue will auto-unwrap `ref` values in templates (so `{{ counter }}` works), but in JS you must use `counter.value`.

---

## ✅ Summary: When to Use What

| Situation                   | Use                        |
| --------------------------- | -------------------------- |
| Single value (number, bool) | `ref()`                    |
| Object with properties      | `reactive()`               |
| Reactive DOM element refs   | `ref()` (e.g. `ref(null)`) |
| You need `.value` access    | `ref()`                    |

---

## 🔥 Advanced Tip

You can mix both:

```js
const user = reactive({ name: ref('Tiv'), age: 20 })
```

---

Happy coding with Vue 3! 🎉

```
