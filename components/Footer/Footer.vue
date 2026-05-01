<template>
  <div :class="styles['footer-top']">
    <div :class="styles.container">
      <div :class="styles['footer-grid']">
        <div :class="styles.support">
          هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم
        </div>

        <div :class="styles.col">
          <h3>دسترسی سریع</h3>

          <a href="#">درباره ما</a>

          <a href="#">بلاگ</a>

          <a href="#">تماس با ما</a>

          <a href="#">خدمات پس از فروش</a>
        </div>

        <div :class="styles.col">
          <h3>راهنمای سایت</h3>

          <a href="#">قوانین و مقررات</a>

          <a href="#">دریافت مشاوره</a>

          <a href="#">انتقادات و پیشنهادات</a>
        </div>

        <div :class="[styles.col, styles['social-col']]">
          <h3>شبکه‌های اجتماعی</h3>

          <a href="#" :class="styles['social-item']">
            <div :class="styles['icon-wrapper']">
              <font-awesome-icon :icon="['fab', 'telegram']" />
            </div>

            <span>تلگرام</span>
          </a>

          <a href="#" :class="styles['social-item']">
            <div :class="styles['icon-wrapper']">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </div>

            <span>اینستاگرام</span>
          </a>

          <a href="#" :class="styles['social-item']">
            <div :class="styles['icon-wrapper']">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </div>

            <span>لینکدین</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div :class="styles['footer-bottom']">
    <div :class="[styles.container, styles['bottom-wrapper']]">
      <div :class="styles.center">
        <p :class="styles.copyright">
          تمامی حقوق مادی و معنوی این وبسایت متعلق به میباشد و هر گونه کپی
          برداری پیگرد قانونی دارد
        </p>

        <div :class="styles.socials">
          <a><font-awesome-icon :icon="['fab', 'linkedin']" /></a>

          <a><font-awesome-icon :icon="['fab', 'youtube']" /></a>

          <a><font-awesome-icon :icon="['fab', 'twitter']" /></a>

          <a><font-awesome-icon :icon="['fab', 'instagram']" /></a>

          <a><font-awesome-icon :icon="['fab', 'telegram']" /></a>
        </div>
      </div>

      <div :class="styles.certificates">
        <img src="/images/samandehi.png" alt="samandehi" />

        <img src="/images/enamad.png" alt="enamad" />
      </div>
    </div>
  </div>
</template>

<script setup>
import styles from "./Footer.module.css";
</script>
