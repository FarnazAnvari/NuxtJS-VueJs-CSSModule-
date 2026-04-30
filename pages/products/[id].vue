<template>
  <div class="page">
    <Header />

    <div class="container">
      <!-- breadcrumb -->
      <div class="breadcrumb">
        <NuxtLink to="/">صفحه اصلی</NuxtLink>
        <span>›</span>
        <NuxtLink to="/">لیست محصولات</NuxtLink>
        <span>›</span>
        <span class="current">{{ product?.title }}</span>
      </div>

      <div v-if="product" class="layout">
        <!-- product preview -->
        <div class="product-preview">
          <ProductCard :product="product" />
        </div>

        <!-- technical specs -->
        <div class="specs">
          <h2 class="specs-title">مشخصات فنی</h2>

          <div class="spec-item">
            <span class="label">ضخامت</span>
            <span class="value">۲۸ میلی‌متر</span>
          </div>

          <div class="spec-item">
            <span class="label">دسته بندی</span>
            <span class="value">{{ categoryName }}</span>
          </div>

          <div class="spec-item">
            <span class="label">رده</span>
            <span class="value">۲</span>
          </div>

          <div class="spec-item">
            <span class="label">تعداد</span>
            <span class="value">۵</span>
          </div>

          <div class="spec-item description">
            <span class="label">توضیحات</span>

            <span class="value">
              اپراتورهای شیشه‌ای مقاوم برای سیستم‌های درب اتوماتیک کشویی تک لنگه
              و دو لنگه. مناسب برای مراکز درمانی، ساختمان‌های اداری، مراکز تجاری
              و محیط‌های صنعتی.
            </span>
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
import ProductCard from "~/components/ProductCard.vue";

const route = useRoute();

const { data: product } = await useAsyncData("product-detail", async () => {
  const res = await $fetch("/api/products");

  const list = res.map((item, index) => ({
    id: item.id,
    title: `درب ${index % 2 === 0 ? "دو لنگه" : "تک لنگه"} مدل ${item.title.slice(0, 12)}`,
    image: item.image,
    price: item.price * 100000,
    category:
      index % 3 === 0 ? "house" : index % 3 === 1 ? "industry" : "health",
  }));

  return list.find((p) => p.id == route.params.id);
});

const categoryName = computed(() => {
  if (!product.value) return "";

  switch (product.value.category) {
    case "house":
      return "مسکن و ساختمان";
    case "industry":
      return "صنعتی و کارخانه";
    case "health":
      return "بهداشت و درمان";
    default:
      return "";
  }
});
</script>

<style scoped>
.page {
  background: #f5f6fa;
  min-height: 100vh;
}

/* container */

.container {
  max-width: 1280px;
  margin: auto;
  padding: 24px;
}

/* breadcrumb */

.breadcrumb {
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: #777;
  margin-bottom: 20px;
}

.breadcrumb a {
  text-decoration: none;
  color: #666;
}

.current {
  color: #111;
  font-weight: 500;
}

/* layout */

.layout {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 24px;
  align-items: start;
}

/* preview */

.product-preview {
  position: sticky;
  top: 20px;
}

/* specs */

.specs {
  background: white;
  border-radius: 20px;
  padding: 24px;
  direction: rtl;
}

.specs-title {
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
}

.spec-item:last-child {
  border-bottom: none;
}

.label {
  color: #888;
}

.value {
  color: #333;
  max-width: 70%;
  text-align: left;
}

.description {
  align-items: flex-start;
}

.description .value {
  line-height: 1.9;
}

/* responsive */

@media (max-width: 1024px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .product-preview {
    position: relative;
  }
}
</style>
