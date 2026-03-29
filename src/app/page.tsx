import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FormatSection } from "@/components/sections/FormatSection";
import { MonetizationSection } from "@/components/sections/MonetizationSection";
import { WhyBrazilSection } from "@/components/sections/WhyBrazilSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <>
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection>
        <StatsSection />
      </AnimatedSection>

      <AnimatedSection>
        <FormatSection />
      </AnimatedSection>

      <AnimatedSection>
        <MonetizationSection />
      </AnimatedSection>

      <AnimatedSection>
        <WhyBrazilSection />
      </AnimatedSection>

      <AnimatedSection>
        <WaitlistSection />
      </AnimatedSection>
    </>
  );
}
