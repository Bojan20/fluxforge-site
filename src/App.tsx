import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Architecture from "./components/Architecture/Architecture";
import TechStack from "./components/TechStack/TechStack";
import SlotLab from "./components/SlotLab/SlotLab";
import DSP from "./components/DSP/DSP";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Architecture />
        <TechStack />
        <SlotLab />
        <DSP />
      </main>
      <Footer />
    </>
  );
}
