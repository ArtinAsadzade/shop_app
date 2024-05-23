import Slider from "../components/HeroSlider";
import LastOffer from "../components/Product/LastOffer";
import Offers from "../components/Product/Offers";
import AmazingOffer from "../components/Product/AmzingOffer";
import Header from "../components/Header/Header";
import Footer from "./../components/Footer/Footer";

export default function Main() {
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
