<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="product.image" class="image" />
    </div>

    <div class="card-body">
      <h3 class="title">
        {{ product.title }}
      </h3>

      <button class="btn">مشاهده جزئیات</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
});
</script>

<style scoped>
/* کارت */
.card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

/* تصویر */
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
}

/* بدنه کارت */
.card-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
  color: #333;

  /* دو خطی شدن متن */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.6;
}

/* دکمه */
.btn {
  margin-top: auto;
  border: 1px solid #ff2c6d;
  color: #ff2c6d;
  padding: 10px;
  border-radius: 12px;
  background: transparent;
  cursor: pointer;
  transition: 0.25s ease;
  font-size: 13px;
}

.btn:hover {
  background: #ff2c6d;
  color: #fff;
}

/* ================== */
/*    Tablet Mode     */
/* ================== */

@media (max-width: 1024px) {
  .card {
    border-radius: 16px;
  }

  .image-wrapper {
    padding: 16px;
  }

  .image {
    height: 130px;
  }

  .card-body {
    padding: 12px;
  }

  .title {
    font-size: 13px;
    margin-bottom: 12px;
  }

  .btn {
    padding: 8px;
    font-size: 12px;
  }
}
</style>
