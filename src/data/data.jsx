import {
  BuildingStorefrontIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
  HomeIcon,
  InboxArrowDownIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const productsData = [
  {
    id: 4,
    ename: "airpods pro 2023",
    name: "ایرپاد",
    price: 3500000,
    offerPrice: 100000,
    count: 2,
    img: "/images/airpod.webp",
    desc: "ایرپاد پرو 2023 با کیفیت صدای عالی و طراحی ارگونومیک، مناسب برای هر موقعیت.",
    propertys: [
      {
        title: "ضمانت بازگشت وجه",
        desc: " تا 7 روز بعد از خرید خود می‌توانید در صورت نارضایتی کالا را مرجوع کنید.",
        icon: "",
      },
    ],
    colors: ["red", "blue"],
  },
  {
    id: 1,
    ename: "phone note 12 pro 2020",
    name: "گوشی شیائومی",
    price: 2000000,
    offerPrice: 1800000,
    count: 9,
    img: "/images/Phone.webp",
    desc: "گوشی شیائومی نوت 12 پرو با عملکرد بالا و ویژگی‌های پیشرفته.",
    propertys: [
      {
        title: "ضد ضربه",
        desc: "گوشی شیائومی نوت 12 یک گوشی ضد ضربه است.",
        icon: "",
      },
      {
        title: "ضد خش",
        desc: "گوشی شیائومی نوت 12 یک گوشی ضد خش است.",
        icon: "",
      },
    ],
    colors: ["red", "black", "blue"],
  },
  {
    id: 2,
    ename: "Laptop Asus TUF Gaming Pro 2020",
    name: "لپتاپ ایسوس",
    price: 12000000,
    offerPrice: 11500000,
    count: 35,
    img: "/images/laptop.webp",
    desc: "لپتاپ گیمینگ ایسوس TUF با کارایی بالا و صفحه نمایش تاچ.",
    propertys: [
      { title: "صفحه تاچ", desc: "صفحه نمایش لپتاپ ایسوس تاچ است.", icon: "" },
      {
        title: "رزولوشن 1080",
        desc: "رزولوشن این لپتاپ 1080 است که بهترین رزولوشن در بازار است.",
        icon: "",
      },
    ],
    colors: ["red"],
  },
  {
    id: 3,
    ename: "Samsung TV QLED Full HD",
    name: "تلویزیون سامسونگ",
    price: 45000000,
    offerPrice: 43300000,
    count: 11,
    img: "/images/tv.webp",
    desc: "تلویزیون سامسونگ QLED با کیفیت تصویر Full HD.",
    propertys: [
      {
        title: "صفحه نمایش",
        desc: "صفحه نمایش این تلویزیون فول اچ دی است.",
        icon: "",
      },
    ],
    colors: ["black"],
  },
  {
    id: 5,
    ename: "Shaver 2010",
    name: "ریش تراش",
    price: 1200000,
    offerPrice: 1150000,
    count: 30,
    img: "/images/rish.webp",
    desc: "ریش تراش با شانه‌های قابل تنظیم در سایزهای مختلف.",
    propertys: [
      {
        title: "شانه‌ها",
        desc: "این ریش تراش دارای سایزهای مختلف است.",
        icon: "",
      },
    ],
    colors: ["red", "green", "blue"],
  },
  {
    id: 6,
    ename: "Jacket",
    name: "کاپشن",
    price: 150000,
    count: 1,
    img: "/images/kap.webp",
    desc: "کاپشن با قابلیت حفظ دما تا 20 درجه.",
    propertys: [
      {
        title: "دمای داخل کاپشن",
        desc: "این کاپشن تا 20 درجه دمای خود را نگه می‌دارد.",
        icon: "",
      },
    ],
    colors: ["red", "green", "blue", "yellow"],
  },
  {
    id: "7",
    ename: "Watch",
    name: "ساعت",
    price: 500000,
    offerPrice: 450000,
    count: 20,
    img: "/images/Watch.webp",
    desc: "ساعت با طراحی زیبا و کیفیت بالا، مناسب برای استفاده روزمره و مجالس رسمی.",
    propertys: [
      { title: "جنس بند", desc: "چرم طبیعی", icon: "🟤" },
      { title: "مقاومت در برابر آب", desc: "تا عمق 50 متر", icon: "💧" },
      { title: "نوع شیشه", desc: "شیشه ضد خش", icon: "🔍" },
      { title: "برند", desc: "Rolex", icon: "⌚" },
    ],
    colors: ["red", "green", "blue"],
  },
];

export const navData = [
  { id: 1, title: "صفحه اصلی", link: "/home", subPage: false, active: true },
  { id: 2, title: "پوشاک", link: "", subPage: true, active: false },
  { id: 3, title: "کالای دیجیتال", link: "", subPage: true, active: false },
  { id: 4, title: "لوازم خانگی", link: "", subPage: true, active: false },
  { id: 5, title: "زیبایی", link: "", subPage: true, active: false },
  { id: 6, title: "لوازم برقی", link: "", subPage: true, active: false },
  { id: 7, title: "سوپر مارکت", link: "", subPage: true, active: false },
  { id: 8, title: "کودک و نوزاد", link: "", subPage: true, active: false },
  { id: 9, title: "صفحات", link: "", subPage: true, active: false },
];

export const footerItemsData = [
  {
    id: 1,
    title: "پرداخت درب منزل",
    img: "/FooterImg/cash-on-delivery.svg",
  },
  {
    id: 2,
    title: "ضمانت بازگشت کالا",
    img: "/FooterImg/days-return.svg",
  },
  {
    id: 3,
    title: "تحویل سریع",
    img: "/FooterImg/express-delivery.svg",
  },
  {
    id: 4,
    title: "ضمانت اصل بودن",
    img: "/FooterImg/original-products.svg",
  },
];

export const linksData = [
  { id: 1, title: "خانه", link: "" },
  { id: 2, title: "درباره ما", link: "" },
  { id: 3, title: "پیگیری سفارش", link: "" },
  { id: 4, title: "سوالات متداول", link: "" },
  { id: 5, title: "بلاگ", link: "" },
];

export const socialLinksData = [
  {
    id: 1,
    img: "/SocialImg/github.webp",
    link: "https://github.com/ArtinAsadzade",
  },
];
export const namadData = [
  { id: 1, img: "/Namad/symbol-02.webp", link: "" },
  { id: 2, img: "/Namad/zarinPal.webp", link: "" },
];

export const categorysData = [
  { id: 1, title: "تکنولوژی" },
  { id: 2, title: "سوپرمارکت" },
  { id: 3, title: "مد و پوشاک" },
  { id: 4, title: "آرایشی و بهداشتی" },
  { id: 5, title: "لوازم خانگی" },
  { id: 6, title: "لوازم چوبی" },
  { id: 7, title: "ابزارآلات" },
  { id: 8, title: "موتور و لوازم جانبی" },
];

export const brandsData = [
  { id: 1, title: "سامسونگ" },
  { id: 2, title: "هوآوی" },
  { id: 3, title: "شیائومی" },
  { id: 4, title: "لنوو" },
  { id: 5, title: "سونی" },
];

export const orderedData = [
  { id: 1, title: "محبوب ترین" },
  { id: 2, title: "پرفروش ترین" },
  { id: 3, title: "ارزان ترین" },
  { id: 4, title: "گران ترین" },
  { id: 5, title: "جدیدترین" },
  { id: 6, title: "پربازدیدترین" },
];

export const showNavBarData = false;

export const adminPageLinksData = [
  {
    id: 1,
    title: "داشبورد",
    infos: [
      {
        id: 1,
        name: "خانه",
        link: "home",
        icon: <HomeIcon />,
        category: "dashboard",
      },
    ],
  },
  {
    id: 2,
    title: "دسترسی سریع",
    infos: [
      {
        id: 1,
        name: "کاربر ها",
        link: "users",
        icon: <UserIcon />,
        category: "quickmenu",
      },
      {
        id: 2,
        name: "محصولات",
        link: "products",
        icon: <BuildingStorefrontIcon />,
        category: "quickmenu",
      },
    ],
  },
  {
    id: 3,
    title: "پبام ها",
    infos: [
      {
        id: 1,
        name: "ایمیل",
        link: "mail",
        icon: <EnvelopeIcon />,
        category: "notification",
      },
      {
        id: 2,
        name: "نظرات",
        link: "feedback",
        icon: <InboxArrowDownIcon />,
        category: "notification",
      },
      {
        id: 3,
        name: "پیام ها",
        link: "message",
        icon: <ChatBubbleOvalLeftEllipsisIcon />,
        category: "notification",
      },
    ],
  },
  {
    id: 4,
    title: "ادمین",
    infos: [
      {
        id: 1,
        name: "مدیریت",
        link: "manage",
        icon: <HomeIcon />,
        category: "staff",
      },
      {
        id: 2,
        name: "گزارش ها",
        link: "reports",
        icon: <ExclamationCircleIcon />,
        category: "staff",
      },
    ],
  },
];

export const UsersData = [
  {
    id: 1,
    userName: "artin",
    firstName: "آرتین",
    lastName: "اسدزاده",
    password: "12345",
    email: "artinasadzade7@gmail.com",
    profile: "/Profile/artin.webp",
    perm: 2,
  },
  {
    id: 2,
    userName: "Test User",
    firstName: "کاربر",
    lastName: "تست",
    password: "123",
    email: "TestUser@gmail.com",
    profile: "",
    perm: 1,
  },
  {
    id: 3,
    userName: "mamad",
    firstName: "ممد",
    lastName: "اکبری",
    password: "123",
    email: "mmd@gmail.com",
    profile: "",
    perm: 0,
  },
];
