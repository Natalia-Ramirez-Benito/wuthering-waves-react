'use client'
import Navbar from "./components/Header/Navbar";
import Carousel from "./components/Slider/Carousel";
import ResonatorsGrid from "./components/Cards/ResonatorsGrid";
import ContactForm from "./components/Form/ContactForm";
import SocialFooter from "./components/Footer/SocialFooter";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Carousel />

        <section id="characters" className="py-16">
          <div className="mx-auto max-w-screen-xl px-4">
            <ResonatorsGrid />
          </div>
        </section>

        <ContactForm />
      </main>

      <SocialFooter />
    </>
  );
}