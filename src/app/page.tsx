import { HeroSection } from "@/components/sections/HeroSection";
import { WhyBrazilSection } from "@/components/sections/WhyBrazilSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section
        id="formato"
        className="bg-aiox-surface px-8 py-20"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-section text-aiox-foreground">Formato</h2>
          <p className="text-body mt-4 text-aiox-muted">
            Em breve — conteúdo desta seção será implementado na próxima story.
          </p>
        </div>
      </section>

      <WhyBrazilSection />

      <WaitlistSection />
    </>
  );
}
