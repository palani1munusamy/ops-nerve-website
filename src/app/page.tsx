import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DemoVideo from "@/components/DemoVideo";
import Features from "@/components/Features";
import SolutionOverview from "@/components/SolutionOverview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0f15]">
      <Header />
      <main>
        <Hero />
        <DemoVideo />
        <Features />
        <SolutionOverview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
