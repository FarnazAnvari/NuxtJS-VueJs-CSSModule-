export const useProducts = () => {
  const products = ref([]);
  const loading = ref(false);

  const fetchProducts = async () => {
    loading.value = true;
    const { data } = await useFetch("https://fakestoreapi.com/products");
    products.value = data.value;
    loading.value = false;
  };

  return { products, fetchProducts, loading };
};
