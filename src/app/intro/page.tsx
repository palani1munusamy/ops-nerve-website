import Header from "@/components/Header";
import DemoVideo from "@/components/DemoVideo";
import Footer from "@/components/Footer";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#0d0f15]">
      <Header />
      <main>
        <DemoVideo />
      </main>
      <Footer />
    </div>
  );
}
