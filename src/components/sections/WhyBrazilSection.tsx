import { ArgumentCard } from "@/components/ui/ArgumentCard";

const brazilArguments = [
  {
    title: "CazéTV",
    highlight: "50M espectadores",
    description:
      "O maior canal de streaming esportivo do Brasil. Provou que formatos alternativos têm audiência massiva no país.",
  },
  {
    title: "LOUD & FURIA",
    highlight: "Base global de fãs",
    description:
      "Times brasileiros de esports com relevância internacional. Comunidade engajada e habituada a acompanhar competições de tech.",
  },
  {
    title: "Kings League BR",
    highlight: "Kaká & Neymar",
    description:
      "O formato que revolucionou o futebol casual chega ao Brasil com embaixadores de classe mundial — e o playbook já está provado.",
  },
];

export function WhyBrazilSection() {
  return (
    <section
      id="por-que-brasil"
      className="bg-aiox-background px-8 py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <span
            className="mb-4 text-5xl"
            role="img"
            aria-label="Bandeira do Brasil"
          >
            🇧🇷
          </span>
          <h2 className="text-section text-aiox-foreground">Por que o Brasil?</h2>
          <p className="text-body mt-4 max-w-2xl text-aiox-muted">
            O maior mercado de esports da América Latina. Pronto para o próximo esporte digital.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brazilArguments.map((arg) => (
            <ArgumentCard
              key={arg.title}
              title={arg.title}
              highlight={arg.highlight}
              description={arg.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
