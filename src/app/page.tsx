import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { FormatSection } from "@/components/sections/FormatSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { WhyNowSection } from "@/components/sections/WhyNowSection";
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

      {/* DS-ADAPT-1.3: WhoWeAre — light section (bb-cream bg) */}
      <AnimatedSection>
        <WhoWeAreSection />
      </AnimatedSection>

      <AnimatedSection>
        <FormatSection />
      </AnimatedSection>

      {/* DS-ADAPT-1.3: PainPoints — dual ticker (bb-surface bg) */}
      <AnimatedSection>
        <PainPointsSection />
      </AnimatedSection>

      <AnimatedSection>
        <WhyNowSection />
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
