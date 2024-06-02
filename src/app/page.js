import Advantages from "@/components/advantages";
import Customize from "@/components/customize";
import Faq from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/herosection";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
      <main className="">
        <Navbar />
        <HeroSection />
        <Features />
        <Advantages />
        <Customize />
        <Testimonials />
        <Faq />
        <Footer />
      </main>
  );
}
