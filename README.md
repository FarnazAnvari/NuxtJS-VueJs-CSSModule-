# 🛒 Nuxt Shop – Online Product Catalog

A modern, high-performance product catalog built with **Nuxt 3** and **Vue.js 3 (Composition API)**. This project features a robust filtering system, dynamic routing, and Server-Side Rendering (SSR) for optimal SEO and performance.

---

## ✨ Features

- ✅ **Nuxt 3 & Vue.js 3**: Built using the latest Vue ecosystem.
- ✅ **SSR (Server-Side Rendering)**: Optimized for SEO and fast initial load.
- ✅ **Built-in Nitro API**: Serves product data via `/server/api/products`.
- ✅ **Advanced Product Filtering**:
  - 🔍 Live search by title.
  - 🏷️ Category-based filtering.
  - 📦 Availability toggle (Show only in-stock items).
  - 🔃 Multi-criteria sorting (by Stock count and Rating).
- ✅ **Dynamic Routing**: Individual product pages at `/products/[id]`.
- ✅ **CSS Modules**: Scoped and modular styling for clean architecture.
- ✅ **Interactivity**: Image zoom effect on product details.
- ✅ **Icons**: Integrated with **FontAwesome**.

---

## 🧰 Tech Stack

| Category      | Technology                                       |
| ------------- | ------------------------------------------------ |
| **Framework** | [Nuxt 3](https://nuxt.com/)                      |
| **Core**      | [Vue.js 3](https://vuejs.org/) (Composition API) |
| **Server**    | Nitro Engine (Built-in API)                      |
| **Styling**   | CSS Modules                                      |
| **Icons**     | FontAwesome                                      |

---

## 📁 Project Structure

```bash
.
├── assets/
│   └── css/
│       └── main.css           # Global styles
│
├── components/
│   ├── Header/                # Navigation & Layout components
│   ├── Footer/
│   ├── ProductCard/           # Reusable product display
│   └── SidebarFilter/         # Filter & Search logic UI
│
├── composables/
│   └── useProducts.js         # Shared product state/logic
│
├── pages/
│   ├── index/
│   │   ├── index.vue          # Home (Product List)
│   │   └── index.module.css   # Scoped Home styles
│   └── products/
│       ├── [id].vue           # Dynamic Detail Page
│       └── id.module.css      # Scoped Detail styles
│
├── plugins/
│   └── fontawesome.js         # Icon library configuration
│
├── server/
│   └── api/
│       └── products.js        # Internal API endpoint
│
├── nuxt.config.ts             # Nuxt configuration
└── package.json
└── README.md
```

# 🛒 Nuxt Shop – Online Product Catalog

یک پروژه فروشگاهی ساده و مدرن ساخته‌شده با **Nuxt 3** و **Vue.js 3 (Composition API)** که شامل لیست محصولات، فیلتر و مرتب‌سازی پیشرفته، و صفحه جزئیات محصول با SSR است.

---

## ✨ امکانات پروژه

- ✅ پیاده‌سازی با **Nuxt 3**
- ✅ استفاده از **Vue.js 3 (Composition API)**
- ✅ دارای API داخلی (`/server/api`)
- ✅ لیست محصولات با قابلیت:
  - 🔍 جستجو در عنوان محصول
  - 🏷️ فیلتر بر اساس دسته‌بندی
  - 📦 نمایش فقط محصولات موجود
  - 🔃 مرتب‌سازی بر اساس تعداد و امتیاز
- ✅ صفحه جزئیات محصول داینامیک (`/products/[id]`)
- ✅ طراحی کامپوننت‌محور و تمیز
- ✅ استفاده از **CSS Module**
- ✅ Zoom تصویر محصول
- ✅ فونت آیکون‌ها با **FontAwesome**
- ✅ ساختار کد خوانا و قابل توسعه

---

## 🧰 تکنولوژی‌های استفاده‌شده

| نوع       | تکنولوژی‌ها                                |
| --------- | ------------------------------------------ |
| Frontend  | **Nuxt 3**, **Vue.js 3 (Composition API)** |
| Server    | **Nitro Server API**                       |
| Styling   | **CSS Modules**, FontAwesome Icons         |
| Rendering | **SSR (Server Side Rendering)**            |

---

## 📁 ساختار پروژه

```bash
.
├── assets/
│   └── css/
│       └── main.css
│
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── ProductCard/
│   └── SidebarFilter/
│
├── composables/
│   └── useProducts.js
│
├── pages/
│   ├── index/
│   │   ├── index.vue
│   │   └── index.module.css
│   └── products/
│       ├── [id].vue
│       └── id.module.css
│
├── plugins/
│   └── fontawesome.js
│
├── public/
│   └── images/
│
├── server/
│   └── api/
│       └── products.js
│
├── nuxt.config.ts
├── package.json
└── README.md
```
