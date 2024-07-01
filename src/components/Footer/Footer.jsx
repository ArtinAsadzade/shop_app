import { useState } from "react";
import { footerItemsData, linksData, namadData, socialLinksData } from "../../data/data";
import FooterItems from "./FooterItems";
import Logo from "../Logo";
import SocialItems from "./SocialItems";
import NamadItems from "./NamadItems";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const [navItems] = useState(footerItemsData);
  const [links] = useState(linksData);
  const [socials] = useState(socialLinksData);
  const [namads] = useState(namadData);

  const goToUpHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="py-5 shadow-xl bg-white block">
      <div className="p-5 container">
        <div className="flex items-center justify-between my-4 px-5">
          <Logo />
          <button onClick={goToUpHandler} className="flex items-center gap-x-1 border rounded-lg px-3 py-2 text-zinc-500 text-sm md:text-base">
            برو به بالا <ChevronUpIcon className="w-5" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-10 justify-items-center mb-10">
          {navItems.map((item) => (
            <FooterItems key={item.id} {...item} />
          ))}
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 sm:w-2/3 lg:w-4/12">
            <div className="mx-auto flex flex-wrap">
              <h1 className="mb-2 text-lg">فروشگاه اینترنتی ایران مارکت</h1>
              <p className="mb-7  text-sm">
                ایران مارکت به عنوان یکی از بروزترین فروشگاه های اینترنتی با بیش از هفت سال تجربه، با پایبندی به اعتماد مشتری، موفق شده تا با
                فروشگاه‌های معتبر ایران به یکی از بزرگ‌ترین فروشگاه اینترنتی کشور تبدیل شود. هر آنچه که فکرش را بکنید و به ذهن شما خطور می‌کند در
                اینجا پیدا خواهید کرد.
              </p>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full flex flex-col">
              <h1 className="mb-2">لینک های مفید:</h1>
              {links.map((item) => (
                <a href={item.link} key={item.id} className="m-2 text-sm hover:text-red-600 transition ">
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full flex flex-col text-sm">
              <h1 className="mb-2">ارتباط با ما:</h1>
              <p className=" transition m-2">آدرس: تهران،خیابان دماوند</p>
              <p className=" transition m-2">تلفن:09102206571</p>
              <p className=" transition m-2">ساعت پاسخگویی:9 الی 18</p>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div>
              <h1 className="mb-2 text-center">شبکه های اجتماعی:</h1>
              <div className="mb-5 flex items-center justify-center">
                {socials.map((item) => (
                  <SocialItems key={item.id} {...item} />
                ))}
              </div>
              <div className="flex items-center justify-center gap-x-5">
                {namads.map((item) => (
                  <NamadItems key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
