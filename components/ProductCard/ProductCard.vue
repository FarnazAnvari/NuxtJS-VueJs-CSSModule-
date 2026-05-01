<template>
  <NuxtLink v-if="product" :to="`/products/${product.id}`" :class="styles.card">
    <div :class="styles.badge">
      {{ categoryName }}
    </div>

    <div :class="styles['image-wrapper']">
      <img :src="product?.image" :alt="product?.title" :class="styles.image" />
    </div>

    <div :class="styles.body">
      <h3 :class="styles.title">
        {{ product?.title }}
      </h3>

      <p :class="styles.price">{{ formatPrice(product?.price) }} تومان</p>

      <div :class="styles.btn">مشاهده جزئیات</div>
    </div>
  </NuxtLink>

  <!-- اگر product نیامده بود (SSR) -->
  <div v-else :class="styles.skeleton">در حال بارگذاری...</div>
</template>

<script setup>
import styles from "./ProductCard.module.css";

const props = defineProps({
  product: {
    type: Object,
    required: false,
    default: null,
  },
});

/* نقشه دسته‌بندی */
const categoryMap = {
  house: "مسکن و ساختمان",
  industry: "صنعتی و کارخانه",
  health: "بهداشت و درمان",
};

/* نام دسته */
const categoryName = computed(() => {
  return categoryMap[props?.product?.category] || "نامشخص";
});

/* فرمت قیمت */
const formatPrice = (price) => {
  if (!price) return "0";
  return new Intl.NumberFormat("fa-IR").format(price);
};
</script>
