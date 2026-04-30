<template>
  <div class="page">
    <Header />

    <!-- breadcrumb -->
    <div class="breadcrumb">
      <NuxtLink to="/" class="home-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.8"
            d="M3 10.5L12 3l9 7.5M5 9.5V21h5v-6h4v6h5V9.5"
          />
        </svg>
      </NuxtLink>

      <span class="sep">›</span>

      <NuxtLink to="/">لیست محصولات</NuxtLink>
      <span class="sep">›</span>

      <span class="current">{{ product?.title }}</span>
    </div>

    <div class="container">
      <!-- loading -->
      <div v-if="pending" class="loading">در حال دریافت اطلاعات محصول...</div>

      <!-- error -->
      <div v-else-if="error" class="error">خطا در دریافت محصول</div>

      <!-- content -->
      <div v-else class="content">
        <!-- image card -->
        <div class="image-card">
          <h1 class="title">{{ product.title }}</h1>

          <div class="image-wrapper">
            <img :src="product.image" @click="openZoom" />

            <div class="zoom-icon" @click="openZoom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="21" y1="21" x2="16.5" y2="16.5"></line>
              </svg>
            </div>
          </div>
        </div>

        <div v-if="showZoom" class="zoom-modal" @click="closeZoom">
          <img :src="product.image" class="zoomed-image" />
        </div>

        <!-- specs -->
        <div class="specs-card">
          <h2 class="specs-title">مشخصات فنی</h2>

          <div class="specs-table">
            <div class="row">
              <div class="label">قیمت</div>
              <div class="value">{{ formatPrice(product.price) }} تومان</div>
            </div>

            <div class="row">
              <div class="label">توضیحات</div>
              <div class="value">
                {{ product.description }}
              </div>
            </div>

            <div class="row">
              <div class="label">دسته بندی</div>
              <div class="value">{{ product.type }}</div>
            </div>

            <div class="row">
              <div class="label">رتبه</div>
              <div class="value">{{ product.rating }}</div>
            </div>

            <div class="row">
              <div class="label">تعداد</div>
              <div class="value">{{ product.count }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

const route = useRoute();
const id = route.params.id;

const {
  data: product,
  pending,
  error,
} = await useAsyncData("product-" + id, async () => {
  const products = await $fetch("/api/products");

  const found = products.find((p) => p.id == id);

  if (!found) {
    throw createError({
      statusCode: 404,
      statusMessage: "Product not found",
    });
  }

  return {
    ...found,
    price: found.price * 100000,
  };
});

const formatPrice = (price) => {
  return new Intl.NumberFormat("fa-IR").format(price);
};

const showZoom = ref(false);

const openZoom = () => {
  showZoom.value = true;
};

const closeZoom = () => {
  showZoom.value = false;
};
</script>

<style scoped>
.page {
  background: #f1f3f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  box-sizing: border-box;
}

/* breadcrumb */

.breadcrumb {
  width: 95%;
  max-width: 1500px;
  margin: auto;
  padding: 16px 10px;
  font-size: 14px;
  color: #7b808a;

  display: flex;
  align-items: center;
  gap: 10px;

  direction: rtl;
}

.breadcrumb a {
  text-decoration: none;
  color: #7b8190;
}

.sep {
  color: #b7bcc8;
}

.current {
  color: #3d5a80;
}

.home-icon {
  display: flex;
  align-items: center;
}

/* container */

.container {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px 24px;
}

/* layout */

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 26px;
}

/* image card */

.image-card {
  background: #fff;
  border-radius: 20px;
  padding: 24px;
  width: 100%;
}

.title {
  font-size: 18px;
  margin-bottom: 18px;
  color: #2e2e2e;
}

/* image */

.image-wrapper {
  position: relative;
  background: #eef1f6;
  border-radius: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 350px;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* zoom */

.zoom-icon {
  position: absolute;
  right: 12px;
  top: 12px;

  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);

  width: 36px;
  height: 36px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
}

.zoom-modal {
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000;
}

.zoomed-image {
  max-width: 80%;
  max-height: 80%;

  border-radius: 12px;
  background: white;
  padding: 20px;
}

/* specs */

.specs-card {
  background: #fff;
  border-radius: 20px;
  padding: 24px;
  width: 100%;
  margin: 0 auto;
}

.specs-title {
  font-size: 18px;
  margin-bottom: 18px;
  color: #2f3a4b;
}

/* specs table */

.specs-table {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.row {
  display: grid;
  grid-template-columns: minmax(120px, 220px) 1fr;

  direction: rtl;

  border-radius: 12px;
  overflow: hidden;
}

.label {
  background: #eef1f6;
  padding: 14px;
  text-align: center;
  color: #6b7280;
  font-size: 14px;
}

.value {
  background: #f6f8fc;
  padding: 14px;
  text-align: right;
  font-size: 14px;
  color: #2e2e2e;
}

/* states */

.loading,
.error {
  text-align: center;
  padding: 60px;
  color: #666;
}

/* responsive */

@media (max-width: 700px) {
  .row {
    grid-template-columns: 1fr !important;
    width: 100% !important;
  }

  .label,
  .value {
    width: 100% !important;
    text-align: right;
  }
  .container {
    padding: 10px 14px !important;
  }
}
/* ================== FIX OVERFLOW & ALIGNMENT ================== */

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* fix card overflowing */
.image-card,
.specs-card {
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

/* responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding: 10px 16px;
  }

  .image-card,
  .specs-card {
    padding: 16px;
  }

  .image-wrapper {
    height: 300px;
  }

  .image-wrapper img {
    width: 100%;
    height: auto;
  }

  .row {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .label,
  .value {
    width: 100%;
    text-align: right;
  }
}
</style>
