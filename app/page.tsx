import checklist from "@/public/checklist.png";
import hacker from "@/public/hacker.png";
import danger from "@/public/danger.png";
import { Card } from "@/components/Card";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { MacScroll } from "@/components/MacScroll";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex max-sm:flex-col max-sm:mt-16 max-sm:gap-y-8 justify-center sm:gap-8">
        <Card
          title="Stay Alert"
          description="We detect risks before they become problems."
          src={danger.src}
        />
        <Card
          title="Threat Protection"
          description="Block viruses, malware, and attacks instantly."
          src={hacker.src}
        />
        <Card
          title="Instant Reports"
          description="Get clear, reliable scan results in seconds."
          src={checklist.src}
        />
      </div>
      <MacScroll title="Be virus free on your device." />
      <Footer />
    </>
  );
}
