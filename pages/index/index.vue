<template>
  <div :class="styles.page">
    <Header />

    <div :class="styles.container">
      <div :class="styles.layout">
        <aside :class="styles.sidebar">
          <SidebarFilter
            v-model:search="search"
            v-model:sort="sort"
            v-model:category="category"
            v-model:availableOnly="availableOnly"
          />
        </aside>

        <main :class="styles.content">
          <div :class="styles.topbar">
            <span :class="styles['topbar-title']">فیلترهای اعمال شده</span>

            <div :class="styles.filters">
              <span v-if="search" :class="styles.tag" @click="search = ''">
                <font-awesome-icon icon="magnifying-glass" />
                <span>{{ search }}</span>
                <span :class="styles['tag-close']">✕</span>
              </span>

              <span
                v-for="cat in category"
                :key="cat"
                :class="styles.tag"
                @click="removeCategory(cat)"
              >
                <font-awesome-icon :icon="getCategoryIcon(cat)" />
                <span>{{ getCategoryName(cat) }}</span>
                <span :class="styles['tag-close']">✕</span>
              </span>

              <span
                v-if="availableOnly"
                :class="styles.tag"
                @click="availableOnly = false"
              >
                <font-awesome-icon icon="check-circle" />
                <span>درب های موجود</span>
                <span :class="styles['tag-close']">✕</span>
              </span>
            </div>
          </div>

          <div v-if="pending" :class="styles.loading">
            در حال دریافت محصولات...
          </div>

          <div
            v-else-if="!(filteredProducts && filteredProducts.length)"
            :class="styles.empty"
          >
            محصولی یافت نشد
          </div>

          <div v-else :class="styles.products">
            <ProductCard
              v-for="item in filteredProducts || []"
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
import styles from "./index.module.css";

import Header from "~/components/Header/Header.vue";
import Footer from "~/components/Footer/Footer.vue";
import ProductCard from "~/components/ProductCard/ProductCard.vue";
import SidebarFilter from "~/components/SidebarFilter/SidebarFilter.vue";

/* دریافت محصولات */
const { data: products, pending } = await useAsyncData(
  "products-list",
  async () => {
    const res = await $fetch("/api/products");

    return (res || []).map((item, index) => ({
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
  {
    server: true,
    default: () => [],
  },
);

/* فیلترها */
const search = ref("");
const sort = ref("");
const category = ref([]);
const availableOnly = ref(false);

/* فیلتر + سرچ + مرتب سازی */
const filteredProducts = computed(() => {
  const base = products.value || [];
  let result = [...base];

  if (availableOnly.value) {
    result = result.filter((p) => p.available);
  }

  if (search.value) {
    result = result.filter((p) =>
      p.title?.toLowerCase().includes(search.value.toLowerCase()),
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
