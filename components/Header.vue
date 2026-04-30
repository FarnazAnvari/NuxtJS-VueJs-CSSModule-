<template>
  <header class="header">
    <div class="container">
      <!-- منو -->
      <nav class="nav">
        <NuxtLink to="/">
          <font-awesome-icon :icon="['fas', 'list']" class="icon" />
          لیست محصولات
        </NuxtLink>

        <NuxtLink to="#">
          <font-awesome-icon :icon="['fas', 'comments']" class="icon" />
          دریافت مشاوره
        </NuxtLink>

        <NuxtLink to="#">
          <font-awesome-icon :icon="['fas', 'question-circle']" class="icon" />
          سوالات متداول
        </NuxtLink>

        <!-- فعال ولی بدون خط زیر -->
        <NuxtLink to="#" class="active no-underline">
          <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
          تماس با ما
        </NuxtLink>
      </nav>

      <!-- دکمه تماس -->
      <button class="contact-btn">
        تماس
        <font-awesome-icon :icon="['fas', 'phone']" class="btn-icon" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: #fff;
  border-bottom: 1px solid #eee;
  border-radius: 10px;
  padding: 16px 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  direction: rtl;

  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.nav {
  display: flex;
  gap: 24px;
}

.nav a {
  text-decoration: none;
  color: #1d1d1d;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
  transition: color 0.3s ease;
}

.icon {
  font-size: 14px;
  color: #1d1d1d;
  transition: color 0.3s ease;
}

/* لینک فعال */
.nav a.active {
  color: #ff2c6d;
}

.nav a.active .icon {
  color: #ff2c6d;
}

/* خط زیر لینک فعال */
.nav a.active::after {
  content: "";
  position: absolute;
  bottom: -6px;
  right: 0;
  width: 100%;
  height: 2px;
  background: #ff2c6d;
}

/* حذف خط فقط برای تماس با ما */
.nav a.no-underline::after {
  display: none;
}

/* دکمه تماس */
.contact-btn {
  background: #ff2c6d;
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 8px;
}

/* آیکون سمت چپ متن */
.btn-icon {
  font-size: 14px;
}
</style>
