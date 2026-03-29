import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-aiox-background p-8">
      <h1 className="text-4xl font-bold text-aiox-foreground">
        Vibecoding League
      </h1>
      <p className="text-aiox-muted text-lg">
        A arena definitiva para desenvolvedores que usam IA.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary" size="lg">
          Entrar na Arena
        </Button>
        <Button variant="secondary" size="lg">
          Saiba Mais
        </Button>
        <Button variant="ghost" size="lg">
          Ver Ranking
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary" size="sm">Primary SM</Button>
        <Button variant="secondary" size="md">Secondary MD</Button>
        <Button variant="ghost" size="lg">Ghost LG</Button>
      </div>
    </main>
  );
}
