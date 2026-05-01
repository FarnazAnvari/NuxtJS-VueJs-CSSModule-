<template>
  <header :class="styles.header">
    <div :class="styles.container">
      <!-- دکمه همبرگری (موبایل) -->
      <button :class="styles['menu-btn']" @click="menuOpen = !menuOpen">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>

      <!-- منو -->
      <nav :class="[styles.nav, { [styles.open]: menuOpen }]">
        <NuxtLink to="/">
          <font-awesome-icon :icon="['fas', 'list']" :class="styles.icon" />
          لیست محصولات
        </NuxtLink>

        <NuxtLink to="#">
          <font-awesome-icon :icon="['fas', 'comments']" :class="styles.icon" />
          دریافت مشاوره
        </NuxtLink>

        <NuxtLink to="#">
          <font-awesome-icon
            :icon="['fas', 'question-circle']"
            :class="styles.icon"
          />
          سوالات متداول
        </NuxtLink>

        <NuxtLink to="#">
          <font-awesome-icon :icon="['fas', 'phone']" :class="styles.icon" />
          تماس با ما
        </NuxtLink>
      </nav>

      <!-- دکمه تماس -->
      <button :class="styles['contact-btn']">
        تماس
        <font-awesome-icon
          :icon="['fas', 'phone']"
          :class="styles['btn-icon']"
        />
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import styles from "./Header.module.css";

const menuOpen = ref(false);
</script>
