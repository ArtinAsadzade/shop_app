import {} from "@heroicons/react/24/outline";
import Slider from "../components/HeroSlider";
import LastOffer from "../components/LastOffer";
import Offers from "../components/Offers";
import AmazingOffer from "../components/AmzingOffer";
import Header from "../components//Header";
import Footer from "./../components/Footer";

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
