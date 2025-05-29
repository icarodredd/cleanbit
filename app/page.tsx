import { Card } from "@/components/card";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex justify-center gap-8">
        <Card title="Card 1" description="This is the first card" />
        <Card title="Card 1" description="This is the first card" />
        <Card title="Card 1" description="This is the first card" />
      </div>
    </>
  );
}
