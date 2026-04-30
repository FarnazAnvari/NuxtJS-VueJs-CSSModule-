<script setup>
const route = useRoute();
const { getProduct } = useProducts();

const {
  data: product,
  pending,
  error,
} = await useAsyncData(
  `product-${route.params.id}`,
  () => getProduct(Number(route.params.id)),
  {
    server: false,
  },
);
</script>

<template>
  <div class="container">
    <p v-if="pending">Loading...</p>
    <p v-else-if="error">Error loading product</p>

    <div v-else-if="product">
      <img :src="product.image" class="img" />
      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>
      <strong>${{ product.price }}</strong>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

.img {
  height: 300px;
  object-fit: contain;
  display: block;
  margin-bottom: 20px;
}
</style>
