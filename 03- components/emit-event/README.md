
```markdown
# 🔔 Vue Custom Events Demo

This project is part of my **Vue Learning Journey** under `05-components`. It demonstrates how to use **custom events** in Vue 3 to enable communication **from child to parent** components.

---

## 📖 What Are Custom Events?

In Vue.js, child components can communicate with their parents by **emitting custom events**. This lets the parent know when something happens inside the child, enabling reactive behavior and data flow upward.

The child component:
- Uses the special method `$emit('eventName', payload)` to send events.

The parent component:
- Listens for these events with `@eventName="handler"` and reacts accordingly.

---

## 📁 Folder Structure

```

emit-event/
└── src/
├── components/
│   └── CounterButton.vue    # Child component emitting events
├── App.vue                  # Parent component listening to events
└── main.js                  # Entry point

````

---

## 🧩 Components Overview

### 🔹 CounterButton.vue (Child)

- Contains a button and internal count.
- Emits an `incremented` event each time the button is clicked, passing the updated count.

```js
this.$emit('incremented', this.count)
````

### 🔹 App.vue (Parent)

* Uses `<CounterButton />`.
* Listens for `incremented` event.
* Updates and displays `totalClicks` based on emitted data.

```vue
<CounterButton @incremented="handleIncrement" />
```

---

## 🚀 How to Run

### Using Vue CLI:

```bash
npm install
npm run serve
```

### Using Vite:

```bash
npm install
npm run dev
```

Then open your browser at [http://localhost:8080](http://localhost:8080) or [http://localhost:5173](http://localhost:5173).

---

## ✅ Result Output

When you click the button, the child emits an event with the new count. The parent listens and updates its display:

```
🔔 Custom Events Demo

Clicked 3 times
Parent received count: 3
```

---


