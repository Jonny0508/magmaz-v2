import Footer from "@/components/footer/Footer";
import Benefits from "@/sections/home-page/benefits/Benefits";
import GoPlans from "@/sections/home-page/go-plans/GoPlans";
import Hero from "@/sections/home-page/hero/Hero";


export default function Home() {
  return (
    <>
     <Hero />
     <Benefits />
     <GoPlans />
     <Footer />
    </>
  );
}
