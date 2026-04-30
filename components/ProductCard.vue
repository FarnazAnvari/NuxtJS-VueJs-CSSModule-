<template>
  <NuxtLink :to="`/products/${product.id}`" class="card">
    <!-- category badge -->
    <div class="badge">
      {{ categoryName }}
    </div>

    <!-- image -->
    <div class="image-wrapper">
      <img :src="product.image" class="image" />
    </div>

    <!-- body -->
    <div class="body">
      <h3 class="title">
        {{ product.title }}
      </h3>

      <p class="price">{{ formatPrice(product.price) }} تومان</p>

      <div class="btn">مشاهده جزئیات</div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  product: Object,
});

const formatPrice = (price) => {
  return new Intl.NumberFormat("fa-IR").format(price);
};

const categoryMap = {
  house: "مسکن و ساختمان",
  industry: "صنعتی و کارخانه",
  health: "بهداشت و درمان",
};

const categoryName = categoryMap[props.product.category] || "";
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  padding: 18px;

  text-decoration: none;
  color: inherit;

  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  min-width: 0;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
}

/* badge */

.badge {
  position: absolute;
  top: 14px;
  right: 14px;
  background: #f2f4ff;
  color: #5563ff;
  font-size: 11px;
  padding: 5px 10px;
  border-radius: 10px;
}

/* image */

.image-wrapper {
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}

.image {
  max-height: 160px;
  object-fit: contain;
  transition: transform 0.35s ease;
}

.card:hover .image {
  transform: scale(1.08);
}

/* body */

.body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.title {
  font-size: 14px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 10px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* price */

.price {
  font-size: 15px;
  font-weight: 600;
  color: #111010;
  margin-bottom: 14px;
}

/* button */

.btn {
  margin-top: auto;
  border: 1px solid #ff2c6d;
  color: #ff2c6d;
  text-align: center;
  padding: 9px;
  border-radius: 12px;
  font-size: 13px;
  transition: all 0.25s ease;
}

.card:hover .btn {
  background: #ff2c6d;
  color: white;
}

/* responsive */

@media (max-width: 1024px) {
  .image-wrapper {
    height: 140px;
  }

  .image {
    max-height: 130px;
  }
}
</style>
