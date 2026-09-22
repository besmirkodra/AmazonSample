# 📦 Amazon Web Application Clone

[![JavaScript](https://img.shields.io/badge/Language-JavaScript%20(ES6%2B)-yellow?style=flat&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/Frontend-HTML5-orange?style=flat&logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/Styling-CSS3%20%2F%20Grid%20%2F%20Flexbox-blue?style=flat&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Live Demo](https://img.shields.io/badge/Demo-GitHub%20Pages-brightgreen?style=flat&logo=github)](https://besmirkodra.github.io/)

A modern, fully responsive e-commerce web application replicating key features of the Amazon storefront—including dynamic catalog rendering, state-driven shopping cart management, interactive checkout calculations, real-time shipping options, order persistence, and asynchronous API integrations.

---

## 🌐 Live Demo

Experience the deployed application live on GitHub Pages:
👉 [https://besmirkodra.github.io/AmazonSample/](https://besmirkodra.github.io/AmazonSample/)

---

## 🚀 Key Features

* **Dynamic Product Catalog**: Programmatically renders product listings, dynamic star ratings, price formatting, and conditional UI elements (e.g., custom clothing size charts).
* **Stateful Shopping Cart**: Interactive cart workflow allowing users to add products, select quantities, remove items, update delivery methods, and see badges update across pages in real time.
* **Interactive Checkout Engine**: Calculates financial summaries dynamically—including subtotal, shipping tiers, estimated tax (10%), and final order totals.
* **Date & Shipping Calculations**: Integrated relative delivery dates using `Day.js` (`dddd, MMMM D`) based on user-selected shipping speeds.
* **Order Tracking & History**: Simulates backend order submission (`POST` requests) and persists order logs locally.
* **Responsive Architecture**: Built mobile-first using pure CSS Grid and Flexbox for seamless cross-device compatibility.

---

## 📂 Project Architecture

```text
Amazon/
├── index.html                  # Main storefront entry point (formerly amazon.html)
├── checkout.html               # Interactive checkout and summary page
├── orders.html                 # Completed order history page
├── tracking.html               # Package delivery tracking page
├── backend/
│   └── products.json           # Backend raw product dataset
├── data/
│   ├── cart.js                 # Cart state management & storage handlers
│   ├── deliveryOptions.js      # Shipping options dataset & lookup utilities
│   ├── orders.js               # Order history array & local storage operations
│   └── products.js             # OOP Product models & async fetch loaders
├── scripts/
│   ├── amazon.js               # Storefront main controller & DOM event handling
│   ├── checkout.js             # Asynchronous checkout page orchestrator
│   ├── checkout/
│   │   ├── orderSummary.js     # Cart items & delivery radio selector UI component
│   │   └── paymentSummary.js   # Pricing calculation & POST checkout payload
│   └── utils/
│       └── money.js            # Precise currency formatting utility
├── styles/
│   ├── shared/
│   │   ├── amazon-header.css   # Fixed navigation header styles
│   │   └── general.css         # Global resets, utility classes, and typography
│   └── pages/
│       ├── checkout/
│       │   ├── checkout-header.css
│       │   └── checkout.css
│       ├── amazon.css          # Storefront responsive multi-column grid
│       ├── orders.css          # Order cards & responsive breakpoint layouts
│       └── tracking.css        # Shipment progress indicators
└── images/                     # UI graphics, rating icons, and product media

```

## 🛠️ Technical Skills & Computer Science Concepts Demonstrated

This project highlights key core JavaScript, web performance, and software engineering principles:

### 1. Object-Oriented Programming (OOP) & Inheritance
* **Class Modeling & Encapsulation**: Utilizes ES6 classes (`Product`, `Clothing`) to structure data and encapsulate domain logic (`getPrice()`, `getStarsUrl()`, `extraInfoHTML()`).
* **Polymorphism**: Demonstrates method overriding where subclass dynamic extensions (like `Clothing.extraInfoHTML()`) seamlessly override parent class logic during template generation.

### 2. Asynchronous JavaScript & State Orchestration
* **`async`/`await` & ES6 Promises**: Coordinates complex asynchronous dependencies using `async`/`await` and `Promise.all()` to ensure product datasets and user cart states complete loading before rendering UI components.
* **AJAX / Fetch API & XMLHttpRequest**: Features dual data loading pipelines—modern `fetch()` API calls alongside traditional `XMLHttpRequest` workflows.
* **HTTP POST Requests**: Sends JSON-stringified cart payloads to external backend endpoints (`/orders`) and handles asynchronous response resolution.

### 3. Modular Software Architecture
* **ES6 Native Modules (`import`/`export`)**: Replaces global scope contamination with strict file-level scope isolation, organizing utility functions, datasets, and view renderers into clean, reusable modules.
* **Component-Based Rendering**: Structures complex UI views into distinct render functions (`renderOrderSummary()`, `renderPaymentSummary()`) that re-render predictably upon state mutations.

### 4. Client-Side Persistence & State Management
* **Web Storage API (`localStorage`)**: Implements client-side JSON serialization (`JSON.stringify` / `JSON.parse`) to maintain continuous shopping cart and order history state across browser refreshes and page navigation.

### 5. Advanced DOM Manipulation & Event Handling
* **Data Attributes (`data-*`)**: Leverages `dataset` properties to pass product IDs and delivery option keys cleanly between the DOM layer and state arrays.
* **Event Delegation & Dynamic UI Updates**: Efficiently binds event listeners across dynamically generated grids, updating element opacities, handling timeouts for transient notifications, and manipulating container subtrees (`.closest()`, `.remove()`).

### 6. Precise Computational Mathematics
* **Floating-Point Precision Guard**: Avoids standard JavaScript floating-point rounding errors (`0.1 + 0.2 !== 0.3`) by executing all financial calculations in integer cents before converting to fixed 2-decimal formatted strings.

### 7. Modern CSS Architecture & Responsive Design
* **CSS Grid & Flexbox**: Employs CSS Grid (`repeat()`, `minmax()`, dynamic column spanning) and Flexbox alignment to adapt across dynamic desktop grid viewports down to single-column mobile displays.
* **Media Queries (`@media`)**: Implements fluid, multi-tier breakpoints for navigation headers, multi-item order layouts, and tracking timelines.

* ## ⚡ Local Development Setup

Because this application relies on native **ES Modules**, it must be served through an HTTP server rather than opened as a local file scheme (`file://`).

### Option 1: VS Code Live Server (Recommended)
1. Clone this repository:
   ```bash
   git clone [https://github.com/besmirkodra/AmazonSample.git](https://github.com/besmirkodra/AmazonSample.git)

1. Open the directory in **VS Code**.
2. Right-click `index.html` and select **Open with Live Server**.

### Option 2: Python HTTP Server
Run the built-in HTTP server from your project root:

```bash
# Python 3
python -m http.server 8000 
```
Then navigate to `http://localhost:8000` in your web browser.

📝 License
Distributed under the MIT License. See `LICENSE` for more information.
