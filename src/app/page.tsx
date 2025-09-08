import Header from "@/components/header";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Header />

      {/* Main content area */}
      <div className="flex-1">
        <HeroSection />
      </div>
    </div>
  );
}
