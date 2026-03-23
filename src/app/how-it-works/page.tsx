import Header from "@/components/Header";
import SolutionOverview from "@/components/SolutionOverview";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0d0f15]">
      <Header />
      <main>
        <SolutionOverview />
      </main>
      <Footer />
    </div>
  );
}
