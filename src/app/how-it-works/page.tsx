import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0d0f15]">
      <Header />
      <main>
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
