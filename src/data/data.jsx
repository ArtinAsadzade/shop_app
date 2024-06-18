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
    name: "ایرپاد",
    price: 3500000,
    offerPrice: 3200000,
    count: 2,
    img: "/images/airpod.jpg",
  },
  {
    id: 1,
    name: "گوشی شیامی",
    price: 2000000,
    offerPrice: 1800000,
    count: 9,
    img: "/images/Phone.jpg",
  },
  {
    id: 2,
    name: "لپتاپ ایسوس",
    price: 12000000,
    offerPrice: 11500000,
    count: 35,
    img: "/images/laptop.webp",
  },
  {
    id: 3,
    name: "تلویزیون سامسونگ",
    price: 45000000,
    offerPrice: 43300000,
    count: 11,
    img: "/images/tv.jpg",
  },
  {
    id: 5,
    name: "ریش تراش",
    price: 1200000,
    offerPrice: 1150000,
    count: 30,
    img: "/images/rish.jpg",
  },
  {
    id: 6,
    name: "کاپشن",
    price: 150000,
    count: 1,
    img: "/images/kap.jpg",
  },
  {
    id: 7,
    name: "ساعت",
    price: 500000,
    offerPrice: 450000,
    count: 20,
    img: "/images/Watch.jpg",
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
    img: "/SocialImg/github.png",
    link: "https://github.com/ArtinAsadzade",
  },
];
export const namadData = [
  { id: 1, img: "/Namad/symbol-02.png", link: "" },
  { id: 2, img: "/Namad/zarinPal.png", link: "" },
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
    title: "Dashboard",
    infos: [
      {
        id: 1,
        name: "Home",
        link: "home",
        icon: <HomeIcon />,
        category: "dashboard",
      },
    ],
  },
  {
    id: 2,
    title: "Quick Menu",
    infos: [
      {
        id: 1,
        name: "Users",
        link: "users",
        icon: <UserIcon />,
        category: "quickmenu",
      },
      {
        id: 2,
        name: "Admins",
        link: "admins",
        icon: <UserIcon />,
        category: "quickmenu",
      },
      {
        id: 3,
        name: "Products",
        link: "products",
        icon: <BuildingStorefrontIcon />,
        category: "quickmenu",
      },
    ],
  },
  {
    id: 3,
    title: "Notification",
    infos: [
      {
        id: 1,
        name: "Mail",
        link: "mail",
        icon: <EnvelopeIcon />,
        category: "notification",
      },
      {
        id: 2,
        name: "Feedback",
        link: "feedback",
        icon: <InboxArrowDownIcon />,
        category: "notification",
      },
      {
        id: 3,
        name: "Message",
        link: "message",
        icon: <ChatBubbleOvalLeftEllipsisIcon />,
        category: "notification",
      },
    ],
  },
  {
    id: 4,
    title: "Staff",
    infos: [
      {
        id: 1,
        name: "Manage",
        link: "manage",
        icon: <HomeIcon />,
        category: "staff",
      },
      {
        id: 2,
        name: "Reports",
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
    email: "artin@gmail.com",
    profile: "/Profile/artin.jpg",
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
