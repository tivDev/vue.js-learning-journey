```markdown
# 🔄 Vue Communication Demo

This project is part of my **Vue Learning Journey** under `07-components`. It demonstrates three important Vue communication methods:

- **Props:** Passing data from parent to child
- **Emit:** Sending events from child to parent
- **Provide/Inject:** Sharing data from ancestor to descendant without prop drilling

---

## 📁 Folder Structure

```

communication-demo/
└── src/
├── components/
│   ├── ParentComponent.vue
│   ├── ChildComponent.vue
│   ├── GrandchildComponent.vue
├── App.vue
└── main.js

````

---

## 🧩 Components Overview

### 🔹 ParentComponent.vue

- Provides a `theme` value using `provide()`.
- Listens for `notify` event from child to update message.

### 🔹 ChildComponent.vue

- Injects the `theme` value using `inject`.
- Passes data down to grandchild via prop.
- Emits event received from grandchild up to parent.

### 🔹 GrandchildComponent.vue

- Receives `info` prop from child.
- Emits a `notify` event to notify parent through child.

---

## 🚀 How to Run

```bash
npm install
npm run serve    # Vue CLI
# or
npm run dev      # Vite
````

Then open your browser at [http://localhost:8080](http://localhost:8080) or [http://localhost:5173](http://localhost:5173).

---

## ✅ Result Output

* Shows theme provided by ancestor and injected by child.
* Shows data passed down via prop.
* Button click in grandchild sends an event up to parent and updates message.

---


```
