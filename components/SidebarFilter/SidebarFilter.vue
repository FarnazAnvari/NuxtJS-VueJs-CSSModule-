<template>
  <aside :class="styles.sidebar">
    <!-- Search -->
    <div :class="styles.card">
      <h3 :class="styles.title">فیلتر و جستجو</h3>

      <div :class="styles['search-box']">
        <div :class="styles['search-icon']">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="#ff2c6d"
              stroke-width="2"
              fill="none"
            />
            <line
              x1="20"
              y1="20"
              x2="16.5"
              y2="16.5"
              stroke="#ff2c6d"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <span :class="styles.divider"></span>

        <div :class="styles['input-wrapper']">
          <input
            v-model="search"
            type="text"
            name="search"
            id="search"
            placeholder="دو لنگه"
          />

          <button
            v-if="search"
            :class="styles['clear-btn']"
            @click="search = ''"
          >
            <svg viewBox="0 0 24 24" width="14" height="14">
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="#7A8898"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <button :class="styles['search-btn']">جستجو</button>
    </div>

    <!-- Available Toggle -->
    <div :class="styles['toggle-row']">
      <span>درب‌های موجود</span>

      <label :class="styles.switch">
        <input type="checkbox" name="availableOnly" v-model="availableOnly" />
        <span :class="styles.slider"></span>
      </label>
    </div>

    <!-- Sort -->
    <div :class="styles.card">
      <div :class="styles['section-header']" @click="sortOpen = !sortOpen">
        <span>مرتب سازی</span>

        <svg
          :class="[styles.arrow, { [styles.rotate]: sortOpen }]"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="#444"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <transition name="accordion">
        <div v-show="sortOpen">
          <label :class="styles['radio-item']">
            <input type="radio" name="sort" value="low" v-model="sort" />
            <span :class="styles['custom-radio']"></span>
            تعداد: کم به زیاد
          </label>

          <label :class="styles['radio-item']">
            <input type="radio" name="sort" value="high" v-model="sort" />
            <span :class="styles['custom-radio']"></span>
            تعداد: زیاد به کم
          </label>

          <label :class="styles['radio-item']">
            <input type="radio" name="sort" value="rankHigh" v-model="sort" />
            <span :class="styles['custom-radio']"></span>
            رتبه: زیاد به کم
          </label>

          <label :class="styles['radio-item']">
            <input type="radio" name="sort" value="rankLow" v-model="sort" />
            <span :class="styles['custom-radio']"></span>
            رتبه: کم به زیاد
          </label>
        </div>
      </transition>
    </div>

    <!-- Categories -->
    <div :class="styles.card">
      <div
        :class="styles['section-header']"
        @click="categoryOpen = !categoryOpen"
      >
        <span>دسته بندی</span>

        <svg
          :class="[styles.arrow, { [styles.rotate]: categoryOpen }]"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="#444"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <transition name="accordion">
        <div v-show="categoryOpen">
          <label :class="styles['checkbox-item']">
            <div :class="styles.right">
              <input
                type="checkbox"
                name="category"
                value="house"
                v-model="category"
              />
              <span :class="styles['custom-checkbox']"></span>
              <span>مسکن و ساختمان</span>
            </div>

            <span
              :class="[
                styles.badge,
                category.includes('house') ? styles.pink : styles.dark,
              ]"
            >
              ۱۲
            </span>
          </label>

          <label :class="styles['checkbox-item']">
            <div :class="styles.right">
              <input
                type="checkbox"
                name="category"
                value="health"
                v-model="category"
              />
              <span :class="styles['custom-checkbox']"></span>
              <span>بهداشت و درمان</span>
            </div>

            <span
              :class="[
                styles.badge,
                category.includes('health') ? styles.pink : styles.dark,
              ]"
            >
              ۲۳
            </span>
          </label>

          <label :class="styles['checkbox-item']">
            <div :class="styles.right">
              <input
                type="checkbox"
                name="category"
                value="industry"
                v-model="category"
              />
              <span :class="styles['custom-checkbox']"></span>
              <span>صنعتی و کارخانه</span>
            </div>

            <span
              :class="[
                styles.badge,
                category.includes('industry') ? styles.pink : styles.dark,
              ]"
            >
              ۴
            </span>
          </label>
        </div>
      </transition>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed } from "vue";
import styles from "./SidebarFilter.module.css";

/* props */
const props = defineProps({
  search: String,
  sort: String,
  category: Array,
  availableOnly: Boolean,
});

/* emit */
const emit = defineEmits([
  "update:search",
  "update:sort",
  "update:category",
  "update:availableOnly",
]);

/* models */
const search = computed({
  get: () => props.search,
  set: (val) => emit("update:search", val),
});

const sort = computed({
  get: () => props.sort,
  set: (val) => emit("update:sort", val),
});

const category = computed({
  get: () => props.category,
  set: (val) => emit("update:category", val),
});

const availableOnly = computed({
  get: () => props.availableOnly,
  set: (val) => emit("update:availableOnly", val),
});

const sortOpen = ref(true);
const categoryOpen = ref(true);
</script>
