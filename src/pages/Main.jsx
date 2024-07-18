import { Suspense, lazy } from "react";
import Header from "../components/Header/Header";
import Footer from "./../components/Footer/Footer";

const Slider = lazy(() => import("../components/HeroSlider"));
const LastOffer = lazy(() => import("../components/Product/LastOffer"));
const Offers = lazy(() => import("../components/Product/Offers"));

export default function Main() {
  return (
    <>
      <Header />
      <main className="bg-gray-100 p-3">
        <Suspense fallback={<span className="loading loading-dots loading-md"></span>}>
          <section>
            <Slider />
          </section>
          <section>
            <LastOffer />
          </section>
          <section>
            <Offers />
          </section>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
