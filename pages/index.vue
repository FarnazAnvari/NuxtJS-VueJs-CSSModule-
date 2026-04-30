<template>
  <div class="page">
    <Header />

    <div class="container">
      <div class="layout">
        <!-- sidebar -->
        <aside class="sidebar">
          <SidebarFilter
            v-model:search="search"
            v-model:sort="sort"
            v-model:category="category"
            v-model:availableOnly="availableOnly"
          />
        </aside>

        <!-- content -->
        <main class="content">
          <div class="topbar">
            <span class="topbar-title">فیلترهای اعمال شده</span>

            <div class="filters">
              <!-- سرچ -->
              <span v-if="search" class="tag" @click="search = ''">
                <font-awesome-icon icon="magnifying-glass" />
                <span>{{ search }}</span>
                <span class="tag-close">✕</span>
              </span>

              <!-- دسته‌های انتخاب‌شده -->
              <span
                v-for="cat in category"
                :key="cat"
                class="tag"
                @click="removeCategory(cat)"
              >
                <font-awesome-icon :icon="getCategoryIcon(cat)" />
                <span>{{ getCategoryName(cat) }}</span>
                <span class="tag-close">✕</span>
              </span>

              <!-- فقط موجود -->
              <span
                v-if="availableOnly"
                class="tag"
                @click="availableOnly = false"
              >
                <font-awesome-icon icon="check-circle" />
                <span>درب های موجود</span>
                <span class="tag-close">✕</span>
              </span>
            </div>
          </div>

          <!-- loading -->
          <div v-if="pending" class="loading">در حال دریافت محصولات...</div>

          <!-- empty -->
          <div v-else-if="!filteredProducts.length" class="empty">
            محصولی یافت نشد
          </div>

          <!-- products -->
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

    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import ProductCard from "~/components/ProductCard.vue";
import SidebarFilter from "~/components/SidebarFilter.vue";

/* دریافت محصولات */
const { data: products, pending } = await useAsyncData(
  "products-list",
  async () => {
    const res = await $fetch("/api/products");

    return res.map((item, index) => ({
      id: item.id,
      title: `درب ${
        index % 2 === 0 ? "دو لنگه" : "تک لنگه"
      } مدل ${item.title.slice(0, 12)}`,
      image: item.image,
      price: item.price * 100000,
      category: item.category,
      available: item.available,
      rating: item.rating,
      count: item.count,
    }));
  },
  { server: true, default: () => [] },
);

/* فیلترها */
const search = ref("");
const sort = ref("");
const category = ref([]);
const availableOnly = ref(false);

/* فیلتر + سرچ + مرتب سازی */
const filteredProducts = computed(() => {
  let result = [...products.value];

  if (availableOnly.value) {
    result = result.filter((p) => p.available);
  }

  if (search.value) {
    result = result.filter((p) =>
      p.title.toLowerCase().includes(search.value.toLowerCase()),
    );
  }

  if (category.value.length) {
    result = result.filter((p) => category.value.includes(p.category));
  }

  if (sort.value === "low") result.sort((a, b) => a.count - b.count);
  if (sort.value === "high") result.sort((a, b) => b.count - a.count);
  if (sort.value === "rankHigh") result.sort((a, b) => b.rating - a.rating);
  if (sort.value === "rankLow") result.sort((a, b) => a.rating - b.rating);

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

/* آیکون‌ها */
const getCategoryIcon = (cat) => {
  switch (cat) {
    case "house":
      return "house";
    case "industry":
      return "industry";
    case "health":
      return "hospital";
    default:
      return "tag";
  }
};
</script>

<style scoped>
.page {
  background: #f5f6fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1400px;
  margin: auto;
  padding: 24px;
  flex: 1;
}

.layout {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
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
  min-width: 0;
  overflow: hidden;
}

/* topbar */
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 16px;
  padding: 14px 20px;
  margin-bottom: 24px;
}

.topbar-title {
  font-size: 14px;
  color: #333;
}

/* filters */
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
  display: flex;
  align-items: center;
  gap: 6px;
}

.tag:hover {
  background: #ff2c6d;
  color: white;
}

.tag :deep(svg) {
  width: 14px;
  height: 14px;
}

/* ضربدر چپ */
.tag-close {
  margin-right: auto;
  font-size: 14px;
  cursor: pointer;
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

@media (max-width: 1024px) {
  .layout {
    grid-template-columns: 220px 1fr;
  }
  .products {
    grid-template-columns: repeat(2, 1fr);
  }
}

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
  .sidebar {
    position: static !important;
  }
}
</style>
