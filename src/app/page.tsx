import { HeroSection } from "@/components/sections/HeroSection";
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
        <section
          id="formato"
          className="bg-aiox-surface px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-section text-aiox-foreground">Formato</h2>
            <p className="text-body mt-4 text-aiox-muted">
              Em breve — conteúdo desta seção será implementado na próxima story.
            </p>
          </div>
        </section>
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
