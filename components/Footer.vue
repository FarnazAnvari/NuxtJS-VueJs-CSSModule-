<template>
  <div class="footer-top">
    <div class="container">
      <div class="footer-grid">
        <div class="support">هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم</div>

        <div class="col">
          <h3>دسترسی سریع</h3>
          <a href="#">درباره ما</a>
          <a href="#">بلاگ</a>
          <a href="#">تماس با ما</a>
          <a href="#">خدمات پس از فروش</a>
        </div>

        <div class="col">
          <h3>راهنمای سایت</h3>
          <a href="#">قوانین و مقررات</a>
          <a href="#">دریافت مشاوره</a>
          <a href="#">انتقادات و پیشنهادات</a>
        </div>

        <div class="col social-col">
          <h3>شبکه‌های اجتماعی</h3>

          <a href="#" class="social-item">
            <div class="icon-wrapper">
              <font-awesome-icon :icon="['fab', 'telegram']" />
            </div>
            <span>تلگرام</span>
          </a>

          <a href="#" class="social-item">
            <div class="icon-wrapper">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </div>
            <span>اینستاگرام</span>
          </a>

          <a href="#" class="social-item">
            <div class="icon-wrapper">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </div>
            <span>لینکدین</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container bottom-wrapper">
      <div class="center">
        <p class="copyright">
          تمامی حقوق مادی و معنوی این وبسایت متعلق به میباشد و هر گونه کپی
          برداری پیگرد قانونی دارد
        </p>

        <div class="socials">
          <a><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
          <a><font-awesome-icon :icon="['fab', 'youtube']" /></a>
          <a><font-awesome-icon :icon="['fab', 'twitter']" /></a>
          <a><font-awesome-icon :icon="['fab', 'instagram']" /></a>
          <a><font-awesome-icon :icon="['fab', 'telegram']" /></a>
        </div>
      </div>

      <div class="certificates">
        <img src="/images/samandehi.png" alt="samandehi" />
        <img src="/images/enamad.png" alt="enamad" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* container */

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 24px;
}

/* ================= */
/* TOP */
/* ================= */

.footer-top {
  background: #fff;
  padding: 72px 0 64px;
  direction: rtl;
  border-top: 1px solid #e5e7eb;
}

/* grid */

.footer-grid {
  display: grid;
  grid-template-columns: minmax(260px, 1.4fr) repeat(3, 1fr);
  gap: 80px;
  align-items: start;
}

/* support */

.support {
  font-size: 14px;
  color: #6b7280;
  line-height: 2;
  padding-top: 135px;
}

/* columns */

.col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.col h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #1f2937;
}

.col a {
  font-size: 14px;
  color: #6b7280;
  text-decoration: none;
  transition: 0.25s;
}

.col a:hover {
  color: #ff2e63;
  transform: translateX(-4px);
}

.col a.active {
  color: #ff2e63;
  font-weight: 600;
}

/* social items */

.social-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-wrapper {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #eef1f6;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s;
  font-size: 16px;
  color: #4b5563;
}

.social-item:hover .icon-wrapper {
  background: #ff2e63;
  color: white;
  transform: scale(1.05);
}

/* ================= */
/* BOTTOM */
/* ================= */

.footer-bottom {
  background: #f6f6f6;
  padding: 36px 0;
  direction: rtl;
}

/* wrapper */

.bottom-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

/* center text */

.center {
  text-align: center;
  flex: 1;
}

/* certificates */

.certificates {
  display: flex;
  gap: 14px;
}

.certificates img {
  width: 64px;
  padding: 6px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

/* copyright */

.copyright {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 16px;
  line-height: 1.9;
}

/* socials */

.socials {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.socials a {
  width: 38px;
  height: 38px;
  background: #ff2e63;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 17px;
  transition: 0.25s;
}

.socials a:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/* فقط دسکتاپ */
@media (min-width: 1024px) {
  .footer-top .container {
    padding-right: 100px;
    padding-left: 24px;
  }
}

@media (min-width: 1024px) {
  .certificates {
    transform: translateX(100px);
  }
}

/* Tablet */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .support {
    grid-column: 1/-1;
    text-align: center;
    padding-top: 0;
  }

  .bottom-wrapper {
    flex-direction: column;
    text-align: center;
  }

  .certificates {
    justify-content: center;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .container {
    padding: 0 120px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    justify-items: center;
  }

  .col {
    align-items: center;
    text-align: center;
  }
  .support {
    text-align: center;
  }

  .social-item {
    justify-content: center;
  }

  .socials {
    flex-wrap: wrap;
  }
}
</style>
