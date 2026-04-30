<template>
  <aside class="sidebar">
    <!-- Search -->
    <div class="card">
      <h3 class="title">فیلتر و جستجو</h3>

      <div class="search-box">
        <div class="search-icon">
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

        <span class="divider"></span>

        <div class="input-wrapper">
          <input
            v-model="search"
            type="text"
            name="search"
            id="search"
            placeholder="دو لنگه"
          />

          <button v-if="search" class="clear-btn" @click="search = ''">
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

      <button class="search-btn">جستجو</button>
    </div>

    <!-- Available Toggle -->

    <div class="toggle-row">
      <span>درب‌های موجود</span>

      <label class="switch">
        <input type="checkbox" name="availableOnly" v-model="availableOnly" />
        <span class="slider"></span>
      </label>
    </div>

    <!-- Sort -->

    <div class="card">
      <div class="section-header" @click="sortOpen = !sortOpen">
        <span>مرتب سازی</span>

        <svg
          class="arrow"
          :class="{ rotate: sortOpen }"
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
          <label class="radio-item">
            <input type="radio" name="sort" value="low" v-model="sort" />
            <span class="custom-radio"></span>
            تعداد: کم به زیاد
          </label>

          <label class="radio-item">
            <input type="radio" name="sort" value="high" v-model="sort" />
            <span class="custom-radio"></span>
            تعداد: زیاد به کم
          </label>

          <label class="radio-item">
            <input type="radio" name="sort" value="rankHigh" v-model="sort" />
            <span class="custom-radio"></span>
            رتبه: زیاد به کم
          </label>

          <label class="radio-item">
            <input type="radio" name="sort" value="rankLow" v-model="sort" />
            <span class="custom-radio"></span>
            رتبه: کم به زیاد
          </label>
        </div>
      </transition>
    </div>

    <!-- Categories -->

    <div class="card">
      <div class="section-header" @click="categoryOpen = !categoryOpen">
        <span>دسته بندی</span>

        <svg
          class="arrow"
          :class="{ rotate: categoryOpen }"
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
          <label class="checkbox-item">
            <div class="right">
              <input
                type="checkbox"
                name="category"
                value="house"
                v-model="category"
              />

              <span class="custom-checkbox"></span>

              <span>مسکن و ساختمان</span>
            </div>

            <span
              class="badge"
              :class="category.includes('house') ? 'pink' : 'dark'"
            >
              ۱۲
            </span>
          </label>

          <label class="checkbox-item">
            <div class="right">
              <input
                type="checkbox"
                name="category"
                value="health"
                v-model="category"
              />

              <span class="custom-checkbox"></span>

              <span>بهداشت و درمان</span>
            </div>

            <span
              class="badge"
              :class="category.includes('health') ? 'pink' : 'dark'"
            >
              ۲۳
            </span>
          </label>

          <label class="checkbox-item">
            <div class="right">
              <input
                type="checkbox"
                name="category"
                value="industry"
                v-model="category"
              />

              <span class="custom-checkbox"></span>

              <span>صنعتی و کارخانه</span>
            </div>

            <span
              class="badge"
              :class="category.includes('industry') ? 'pink' : 'dark'"
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

/* local models */
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

<style scoped>
.sidebar {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: 20px;
  height: fit-content;
}

/* cards */

.card {
  background: white;
  padding: 16px;
  border-radius: 18px;
}

.title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
}

/* search */

.search-box {
  display: flex;
  align-items: center;
  height: 38px;
  border: 2px solid #ff2c6d;
  border-radius: 18px;
  padding: 0 14px;
  background: white;
  gap: 10px;
}

/* input */
.input-wrapper {
  position: relative;
  flex: 1;
}
/* input */

.input-wrapper input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  background: transparent;
  padding-left: 26px;
  text-align: right;
}
.input-wrapper input::placeholder {
  color: #8b97a6;
}

.search-box input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  background: transparent;
  text-align: right;
}

.search-box input::placeholder {
  color: #8b97a6;
}

/* divider */
.divider {
  width: 1px;
  height: 22px;
  background: #e6e6e6;
}

/* search icon */

.search-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* clear button */

.clear-btn {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: #ffe5ed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* button */

.search-btn {
  margin-top: 14px;
  width: 100%;
  height: 38px;
  border-radius: 16px;
  background: linear-gradient(90deg, #ff0057, #ff2c6d);
  color: white;
  border: none;
  font-size: 15px;
  cursor: pointer;
}

/* toggle */

.toggle-row {
  background: white;
  padding: 14px 16px;
  border-radius: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* switch */

.switch {
  position: relative;
  width: 38px;
  height: 20px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  inset: 0;
  background: #ccc;
  border-radius: 20px;
}

.slider::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  top: 2px;
  right: 2px;
  transition: 0.3s;
}

.switch input:checked + .slider {
  background: #ff2c6d;
}

.switch input:checked + .slider::before {
  transform: translateX(-18px);
}

/* headers */

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
}

.arrow {
  transition: transform 0.25s ease;
}

.arrow.rotate {
  transform: rotate(180deg);
}

/* accordion */

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 300px;
}

/* radio */

.radio-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  font-size: 13px;
}

.radio-item input {
  display: none;
}

.custom-radio {
  width: 16px;
  height: 16px;
  border: 2px solid #aaa;
  border-radius: 50%;
  position: relative;
}

.radio-item input:checked + .custom-radio::after {
  content: "";
  width: 8px;
  height: 8px;
  background: #ff2c6d;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* checkbox */

.checkbox-item {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  align-items: center;
}

.checkbox-item .right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkbox-item input {
  display: none;
}

.custom-checkbox {
  width: 16px;
  height: 16px;
  border: 2px solid #aaa;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox-item input:checked + .custom-checkbox {
  background: #ff2c6d;
}

.checkbox-item input:checked + .custom-checkbox::after {
  content: "✓";
  color: white;
  font-size: 11px;
}

/* badge */

.badge {
  min-width: 26px;
  height: 26px;
  font-size: 11px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.badge.dark {
  background: #1e2430;
}

.badge.pink {
  background: #ff2c6d;
}
</style>
