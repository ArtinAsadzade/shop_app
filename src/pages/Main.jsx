import Slider from "../components/HeroSlider";
import LastOffer from "../components/Product/LastOffer";
import Offers from "../components/Product/Offers";
import AmazingOffer from "../components/Product/AmzingOffer";
import Header from "../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import { UsersData, productsData } from "./../data/data";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    localStorage.setItem("usersData", JSON.stringify(UsersData));
    localStorage.setItem("productsData", JSON.stringify(productsData));
  }, []);

  return (
    <>
      <Header />
      <main className="bg-gray-100 p-3">
        <section>
          <Slider />
        </section>
        <section>
          <LastOffer />
        </section>
        <section>
          <Offers />
        </section>
        <section>
          <AmazingOffer />
        </section>
      </main>
      <Footer />
    </>
  );
}
