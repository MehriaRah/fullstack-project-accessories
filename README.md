# 👜 Aura & Chic — Modern E-Commerce Web Application

[![React](https://img.shields.io/badge/React-18.2+-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38Bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A responsive, high-performance e-commerce client built to deliver a seamless shopping experience for luxury tech and fashion accessories. Developed as a capstone-level project emphasizing clean component architecture, real-time filtering algorithms, and state immutability.

---

## 🚀 Key Features

* **Dynamic Catalog & Multi-Attribute Filtering:** Real-time search indexing coupled with category-based filtering algorithms (`Watches`, `Eyewear`, `Bags`, `Tech`).
* **Optimized State-Driven Cart Management:** Complex shopping cart lifecycle implementation (item aggregation, quantity increment/decrement, dynamic subtotal reduction logic) utilizing React hooks (`useState`, `useEffect`).
* **Asynchronous UX Simulation:** Implements custom loading states and lifecycle delays to mimic real-world API data fetching.
* **Responsive Mobile-First UI:** Built entirely with Tailwind CSS, ensuring pixel-perfect adaptability across mobile, tablet, and desktop viewports.
* **Interactive Product Modals:** Quick-view architecture allowing users to inspect granular product metadata without leaving the main grid view.

---

## 🛠️ Technical Stack & Architecture

* **Core Library:** React 18 (Functional components, hooks, props flow)
* **Bundler & Build Tool:** Vite (Optimized for lightning-fast HMR and production builds)
* **Styling Engine:** Tailwind CSS (Utility-first CSS framework)
* **State & Data Flow:** Unidirectional data flow with immutable state patterns

### Project Structure
```text
fullstack-project-accessories/
├── src/
│   ├── components/
│   │   ├── CartItem.jsx      # Modular cart item component with quantity controls
│   │   └── ProductCard.jsx   # Reusable product grid display component
│   ├── data/
│   │   └── products.js       # Structured mock database schema
│   ├── App.jsx               # Root container managing global state & filtering logic
│   ├── main.jsx              # React DOM mounting point
│   └── index.css             # Tailwind style configuration directives
├── index.html                # HTML5 entry template
└── package.json              # Dependency manifests & Vite scripts
