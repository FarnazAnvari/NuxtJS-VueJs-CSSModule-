<template>
  <NuxtLink :to="`/${product.id}`" class="card">
    <!-- Image -->
    <div class="image-wrapper">
      <img :src="product.image" class="image" />
    </div>

    <!-- Body -->
    <div class="card-body">
      <!-- Title -->
      <h3 class="title">
        {{ product.title }}
      </h3>

      <!-- Price -->
      <div class="price">
        {{ formatPrice(product.price) }}
      </div>

      <!-- CTA -->
      <div class="cta">مشاهده جزئیات</div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

/* فرمت قیمت */
const formatPrice = (price) => {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
};
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;

  display: flex;
  flex-direction: column;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.1);
}

/* IMAGE */

.image-wrapper {
  background: #f8f9fc;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  height: 160px;
  object-fit: contain;
  transition: 0.3s;
}

.card:hover .image {
  transform: scale(1.05);
}

/* BODY */

.card-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  direction: rtl;
}

/* TITLE */

.title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 12px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.7;
}

/* PRICE */

.price {
  font-size: 15px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 16px;
}

/* CTA */

.cta {
  margin-top: auto;
  border: 1px solid #ff2c6d;
  color: #ff2c6d;
  padding: 10px;
  border-radius: 12px;
  text-align: center;
  font-size: 13px;
  transition: 0.25s;
}

.card:hover .cta {
  background: #ff2c6d;
  color: #fff;
}

/* ================== */
/* TABLET */
/* ================== */

@media (max-width: 1024px) {
  .image {
    height: 130px;
  }

  .title {
    font-size: 13px;
  }

  .price {
    font-size: 14px;
  }
}
</style>
