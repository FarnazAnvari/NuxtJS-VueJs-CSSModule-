<template>
  <div class="page">
    <!-- Header -->
    <Header />

    <!-- Main -->
    <div class="container">
      <div class="layout">
        <!-- Sidebar -->
        <aside class="sidebar">
          <SidebarFilter />
        </aside>

        <!-- Content -->
        <main class="content">
          <!-- Topbar -->
          <div class="topbar">
            <span class="topbar-title">فیلترهای اعمال شده</span>

            <div class="filters">
              <span v-if="search" class="tag" @click="search = ''">
                {{ search }} ✕
              </span>

              <span
                v-for="cat in category"
                :key="cat"
                class="tag"
                @click="removeCategory(cat)"
              >
                {{ getCategoryName(cat) }} ✕
              </span>
            </div>
          </div>

          <!-- Loading -->
          <div v-if="loading" class="loading">در حال دریافت محصولات...</div>

          <!-- Empty -->
          <div v-else-if="!filteredProducts.length" class="empty">
            محصولی یافت نشد
          </div>

          <!-- Products -->
          <div v-else class="products">
            <ProductCard
              v-for="item in filteredProducts"
              :key="item.id"
              :product="item"
            />
          </div>
        </main>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import ProductCard from "~/components/ProductCard.vue";
import SidebarFilter from "~/components/SidebarFilter.vue";

const products = ref([]);
const loading = ref(false);

/* فیلترها */
const search = ref("");
const sort = ref("");
const category = ref([]);

/* تبدیل دیتا به مدل درب */
const transformProducts = (data) => {
  return data.map((item, index) => ({
    id: item.id,
    title: `درب ${index % 2 === 0 ? "دو لنگه" : "تک لنگه"} مدل ${item.title.slice(0, 12)}`,
    image: item.image,
    price: item.price * 100000,
    category:
      index % 3 === 0 ? "house" : index % 3 === 1 ? "industry" : "health",
  }));
};

/* گرفتن دیتا */
const fetchProducts = async () => {
  loading.value = true;

  try {
    const { data } = await useFetch("https://fakestoreapi.com/products");

    if (data.value) {
      products.value = transformProducts(data.value);
    }
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
};

/* فیلتر + سرچ + مرتب سازی */
const filteredProducts = computed(() => {
  let result = [...products.value];

  if (search.value) {
    result = result.filter((p) =>
      p.title.toLowerCase().includes(search.value.toLowerCase()),
    );
  }

  if (category.value.length) {
    result = result.filter((p) => category.value.includes(p.category));
  }

  if (sort.value === "low") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sort.value === "high") {
    result.sort((a, b) => b.price - a.price);
  }

  return result;
});

/* حذف دسته */
const removeCategory = (cat) => {
  category.value = category.value.filter((c) => c !== cat);
};

/* نام دسته */
const getCategoryName = (cat) => {
  switch (cat) {
    case "house":
      return "مسکن و ساختمان";
    case "industry":
      return "صنعتی و کارخانه";
    case "health":
      return "بهداشت و درمان";
    default:
      return cat;
  }
};

onMounted(fetchProducts);
</script>

<style scoped>
.page {
  background: #f5f6fa;
  min-height: 100vh;
}

.container {
  max-width: 1280px;
  margin: auto;
  padding: 24px;
}

.layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 24px;
}

.sidebar {
  position: sticky;
  top: 20px;
  height: fit-content;
}

.content {
  display: flex;
  flex-direction: column;
}

/* topbar */

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 16px;
  padding: 14px 20px;
  margin-bottom: 24px;
}

.topbar-title {
  font-size: 14px;
  color: #333;
}

/* tags */

.filters {
  display: flex;
  gap: 10px;
}

.tag {
  background: #ffe8f0;
  color: #ff2c6d;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  transition: 0.2s;
}

.tag:hover {
  background: #ff2c6d;
  color: white;
}

/* products */

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* states */

.loading,
.empty {
  text-align: center;
  padding: 60px;
  color: #666;
}

/* tablet */

@media (max-width: 1024px) {
  .layout {
    grid-template-columns: 220px 1fr;
  }

  .products {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* mobile */

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .products {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
}
</style>
