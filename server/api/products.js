export default defineEventHandler(() => {
  return [
    // دسته مسکونی (House)
    {
      id: 1,
      title: "درب ضد سرقت ترک - طرح برجسته",
      price: 7800000,
      category: "house",
      image:
        "https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?q=80&w=400",
      description:
        "درب ضد سرقت با ساختار فولادی و روکش چوبی با طراحی برجسته مناسب ورودی آپارتمان.",
      type: "ضد سرقت",
      rating: 4.7,
      count: 12,
      available: true,
    },
    {
      id: 2,
      title: "درب چوبی کلاسیک بلوط",
      price: 4600000,
      category: "house",
      image:
        "https://images.unsplash.com/photo-1510000295121-5906b700e70a?q=80&w=400",
      description:
        "درب تمام چوب بلوط با طراحی کلاسیک مناسب اتاق‌ها و فضاهای داخلی.",
      type: "چوبی",
      rating: 4.5,
      count: 9,
      available: true,
    },
    {
      id: 7,
      title: "درب MDF مدرن سفید",
      price: 3900000,
      category: "house",
      image:
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=400",
      description: "درب MDF با روکش سفید براق مناسب دکوراسیون مدرن.",
      type: "MDF",
      rating: 4.2,
      count: 15,
      available: true,
    },
    {
      id: 10,
      title: "درب ویلایی لوکس (ورودی)",
      price: 12500000,
      category: "house",
      image:
        "https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?q=80&w=400",
      description:
        "درب بزرگ ویلایی با طراحی لوکس و استحکام بالا مناسب ورودی ساختمان.",
      type: "ویلایی",
      rating: 4.9,
      count: 0,
      available: false,
    },
    {
      id: 12,
      title: "درب داخلی ساده - اتاقی",
      price: 2800000,
      category: "house",
      image:
        "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=400",
      description: "درب داخلی ساده و اقتصادی مناسب اتاق خواب و فضاهای داخلی.",
      type: "اتاقی",
      rating: 4.0,
      count: 0,
      available: false,
    },
    {
      id: 15,
      title: "درب اتاق خواب - گردویی",
      price: 3400000,
      category: "house",
      image:
        "https://images.unsplash.com/photo-1523192193543-6e7296d960e4?q=80&w=400",
      description: "درب MDF با روکش طرح گردویی مناسب اتاق خواب.",
      type: "اتاق خواب",
      rating: 4.3,
      count: 11,
      available: true,
    },
    {
      id: 18,
      title: "درب ضد صدا (Acoustic)",
      price: 6900000,
      category: "house",
      image:
        "https://images.unsplash.com/photo-1541824266465-75e7443c344d?q=80&w=400",
      description: "درب عایق صدا مناسب استودیوها و فضاهای نیازمند سکوت.",
      type: "آکوستیک",
      rating: 4.6,
      count: 0,
      available: false,
    },
    {
      id: 14,
      title: "درب ورودی مجتمع مدرن",
      price: 8700000,
      category: "house",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400",
      description: "درب ورودی مجتمع با طراحی مدرن و امنیت بالا.",
      type: "ورودی ساختمان",
      rating: 4.5,
      count: 5,
      available: true,
    },

    // دسته صنعتی (Industry)
    {
      id: 3,
      title: "درب فلزی پارکینگی ریلی",
      price: 8200000,
      category: "industry",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400",
      description: "درب پارکینگی فلزی ریلی مناسب پارکینگ ساختمان‌ها.",
      type: "پارکینگی",
      rating: 4.4,
      count: 7,
      available: true,
    },
    {
      id: 4,
      title: "درب سوله صنعتی",
      price: 5400000,
      category: "industry",
      image:
        "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=400",
      description: "درب مقاوم برای سوله‌ها و کارگاه‌های صنعتی.",
      type: "سوله",
      rating: 4.2,
      count: 10,
      available: true,
    },
    {
      id: 8,
      title: "درب شیشه‌ای اتوماتیک",
      price: 6100000,
      category: "industry",
      image:
        "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=400",
      description: "درب شیشه‌ای اتوماتیک مناسب فروشگاه‌ها و مراکز تجاری.",
      type: "اتوماتیک",
      rating: 4.6,
      count: 0,
      available: false,
    },
    {
      id: 11,
      title: "درب ضد حریق (Fireproof)",
      price: 9900000,
      category: "industry",
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400",
      description: "درب مقاوم در برابر آتش مناسب ساختمان‌های اداری و صنعتی.",
      type: "ضد حریق",
      rating: 4.8,
      count: 4,
      available: true,
    },

    {
      id: 17,
      title: "کرکره برقی آلومینیومی",
      price: 5200000,
      category: "industry",
      image:
        "https://plus.unsplash.com/premium_photo-1661883236523-289528d7d3d3?q=80&w=400",
      description: "کرکره برقی آلومینیومی مناسب مغازه‌ها و پارکینگ‌ها.",
      type: "کرکره برقی",
      rating: 4.4,
      count: 14,
      available: true,
    },

    // دسته پزشکی (Health)
    {
      id: 5,
      title: "درب اتاق عمل (Hermetic)",
      price: 9100000,
      category: "health",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400",
      description:
        "درب کاملاً ایزوله برای اتاق عمل با استانداردهای بیمارستانی.",
      type: "هرمتیک",
      rating: 4.9,
      count: 3,
      available: true,
    },
    {
      id: 6,
      title: "درب بیمارستانی ضد باکتری",
      price: 8700000,
      category: "health",
      image:
        "https://images.unsplash.com/photo-1538108149393-fdfd81895907?q=80&w=400",
      description: "درب با پوشش ضد باکتری مناسب بیمارستان‌ها و مراکز درمانی.",
      type: "بیمارستانی",
      rating: 4.7,
      count: 0,
      available: false,
    },
    {
      id: 9,
      title: "درب کلینیک و درمانگاه",
      price: 4800000,
      category: "health",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400",
      description: "درب استاندارد مناسب کلینیک‌ها و درمانگاه‌ها.",
      type: "کلینیکی",
      rating: 4.2,
      count: 8,
      available: true,
    },
    {
      id: 13,
      title: "درب آزمایشگاه پلیمری",
      price: 7600000,
      category: "health",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=400",
      description: "درب مقاوم در برابر مواد شیمیایی مناسب آزمایشگاه‌ها.",
      type: "آزمایشگاهی",
      rating: 4.5,
      count: 5,
      available: true,
    },
    {
      id: 16,
      title: "درب بخش ICU",
      price: 13500000,
      category: "health",
      image:
        "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=400",
      description: "درب مخصوص بخش ICU با استانداردهای ایزولاسیون پزشکی.",
      type: "بخش ویژه",
      rating: 4.8,
      count: 2,
      available: true,
    },
  ];
});
