# Vue Layout Demo Project

This is a simple Vue 3 project demonstrating the use of a **layout component** (with Navbar and Footer) shared across multiple pages.

## 🧱 Project Structure

```

src/
├── components/
│   ├── MainNavbar.vue       # Top navigation bar
│   ├── MainFooter.vue       # Footer section
├── layouts/
│   └── DefaultLayout.vue    # Layout wrapper used in all pages
├── views/
│   ├── HomeView\.vue         # Home page content
│   └── AboutView\.vue        # About page content
├── App.vue                  # Root component
├── main.js                  # App entry point
└── router/
└── index.js             # Vue Router configuration

````

## 📦 Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vite](https://vitejs.dev/) or Vue CLI (your choice)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/vue-layout-demo.git
cd vue-layout-demo
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

## 🧭 Pages

| Path     | Description |
| -------- | ----------- |
| `/`      | Home Page   |
| `/about` | About Page  |

Each page uses the shared layout: `MainNavbar`, `MainFooter`, and a dynamic `<main>` section via slot.

## 💡 Why Layout Component?

The layout component helps you:

* Avoid repeating common elements like nav/footer
* Keep your code clean and DRY
* Improve maintainability

## 📁 Example Layout Structure

```
<DefaultLayout>
  <template #default>
    <!-- Unique page content goes here -->
  </template>
</DefaultLayout>
```

## 🛠️ Build for Production

```bash
npm run build
```



