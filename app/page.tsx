import { Card } from "@/components/Card";
import HeroSection from "@/components/HeroSection";
import { MacScroll } from "@/components/MacScroll";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex justify-center gap-8">
        <Card title="Card 1" description="This is the first card" />
        <Card title="Card 1" description="This is the first card" />
        <Card title="Card 1" description="This is the first card" />
      </div>
      <MacScroll title="This is a Mac Scroll" />
    </>
  );
}
