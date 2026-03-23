import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SolutionOverview from "@/components/SolutionOverview";
import HowItWorks from "@/components/HowItWorks";
import DemoVideo from "@/components/DemoVideo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0f15]">
      <Header />
      <main>
        <Hero />
        <Features />
        <SolutionOverview />
        <HowItWorks />
        <DemoVideo />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
