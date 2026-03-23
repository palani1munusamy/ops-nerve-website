import Header from "@/components/Header";
import Features from "@/components/Features";
import SolutionOverview from "@/components/SolutionOverview";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#0d0f15]">
      <Header />
      <main>
        <Features />
        <SolutionOverview />
      </main>
      <Footer />
    </div>
  );
}
