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
            <!-- این بخش سمت راست می‌ماند -->
            <span class="topbar-title">فیلترهای اعمال شده</span>

            <!-- این بخش به سمت چپ رانده می‌شود -->
            <div class="filters">
              
              <span class="tag">تعداد ✕</span>
              <span class="tag">دو لنگه ✕</span>
            </div>
          </div>

          <!-- Loading -->
          <div v-if="loading" class="loading">در حال دریافت محصولات...</div>

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

/* گرفتن دیتا */
const fetchProducts = async () => {
  loading.value = true;

  try {
    const { data } = await useFetch("https://fakestoreapi.com/products");
    products.value = data.value || [];
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

  if (sort.value === "cheap") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sort.value === "expensive") {
    result.sort((a, b) => b.price - a.price);
  }

  return result;
});

onMounted(fetchProducts);
</script>

<style scoped>
/* صفحه */
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

/* layout */
.layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 24px;
}

/* sidebar */
.sidebar {
  position: sticky;
  top: 20px;
  height: fit-content;
}

/* content */
.content {
  display: flex;
  flex-direction: column;
}

/* topbar */
.topbar {
  display: flex;
  justify-content: space-between; /* ایجاد فاصله حداکثری بین دو بخش */
  align-items: center;
  width: 100%; /* اشغال تمام عرض ستون محصولات */
  background: #fff;
  border-radius: 16px;
  padding: 14px 20px;
  margin-bottom: 24px;
  box-sizing: border-box; /* برای اینکه padding باعث بیرون زدگی نشود */
}

.topbar-title {
  font-weight: 500;
  color: #333;
  font-size: 14px;
}

/* filter tags */
.filters {
  display: flex;
  gap: 10px;
  flex-direction: row-reverse; /* اگر می‌خواهید ترتیب ضربدرها و متن تگ‌ها در چپ‌چین درست باشد */
}

.tag {
  background: #ffe8f0;
  color: #ff2c6d;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: 0.2s;
}

.tag:hover {
  background: #ff2c6d;
  color: white;
}

/* products grid */
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* loading */
.loading {
  text-align: center;
  padding: 60px;
  color: #666;
}

/* ====================== */
/*        Tablet          */
/* ====================== */

@media (max-width: 1024px) {
  .container {
    padding: 16px;
  }

  .layout {
    grid-template-columns: 220px 1fr;
    gap: 18px;
  }

  .products {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}

/* ====================== */
/*        Mobile          */
/* ====================== */

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
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
