<template>
  <div :class="styles.page">
    <Header />

    <!-- breadcrumb -->
    <div :class="styles.breadcrumb">
      <NuxtLink to="/" :class="styles['home-icon']">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          />
        </svg>
      </NuxtLink>

      <span :class="styles.sep">›</span>

      <NuxtLink to="/">لیست محصولات</NuxtLink>
      <span :class="styles.sep">›</span>

      <span :class="styles.current">{{ product?.title }}</span>
    </div>

    <div :class="styles.container">
      <div v-if="pending" :class="styles.loading">
        در حال دریافت اطلاعات محصول...
      </div>

      <div v-else-if="error" :class="styles.error">خطا در دریافت محصول</div>

      <div v-else :class="styles.content">
        <!-- image card -->
        <div :class="styles['image-card']">
          <h1 :class="styles.title">{{ product.title }}</h1>

          <div :class="styles['image-wrapper']">
            <img :src="product.image" @click="openZoom" />

            <div :class="styles['zoom-icon']" @click="openZoom">
              <!-- svg -->
            </div>
          </div>
        </div>

        <div v-if="showZoom" :class="styles['zoom-modal']" @click="closeZoom">
          <img :src="product.image" :class="styles['zoomed-image']" />
        </div>

        <!-- specs -->
        <div :class="styles['specs-card']">
          <h2 :class="styles['specs-title']">مشخصات فنی</h2>

          <div :class="styles['specs-table']">
            <div :class="styles.row">
              <div :class="styles.label">قیمت</div>
              <div :class="styles.value">
                {{ formatPrice(product.price) }} تومان
              </div>
            </div>

            <div :class="styles.row">
              <div :class="styles.label">توضیحات</div>
              <div :class="styles.value">{{ product.description }}</div>
            </div>

            <div :class="styles.row">
              <div :class="styles.label">دسته بندی</div>
              <div :class="styles.value">{{ product.type }}</div>
            </div>

            <div :class="styles.row">
              <div :class="styles.label">رتبه</div>
              <div :class="styles.value">{{ product.rating }}</div>
            </div>

            <div :class="styles.row">
              <div :class="styles.label">تعداد</div>
              <div :class="styles.value">{{ product.count }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import styles from "./id.module.css";
import Header from "~/components/Header/Header.vue";
import Footer from "~/components/Footer/Footer.vue";

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
