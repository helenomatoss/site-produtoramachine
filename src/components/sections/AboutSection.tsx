import { Award, Heart, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const ABOUT_FEATURES = [
  {
    icon: Award,
    title: "Qualidade premium",
    description: "Equipamentos de ponta e padrões profissionais em todas as etapas.",
  },
  {
    icon: Users,
    title: "Equipe especializada",
    description: "Profissionais experientes e apaixonados pelo audiovisual.",
  },
  {
    icon: Zap,
    title: "Entrega ágil",
    description: "Processos eficientes que mantêm o ritmo sem perder excelência.",
  },
  {
    icon: Heart,
    title: "Paixão por histórias",
    description: "Cada projeto recebe dedicação integral da nossa equipe criativa.",
  },
] as const;

const ABOUT_STATS = [
  { label: "Projetos realizados", value: "500+" },
  { label: "Anos de experiência", value: "10+" },
  { label: "Clientes atendidos", value: "50+" },
  { label: "Suporte dedicado", value: "24/7" },
] as const;

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 md:scroll-mt-28 bg-gradient-to-b from-background to-background/95 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="animate-fade-in-left">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Por que escolher a <span className="text-glow">Machine Produtora</span>
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
              Transformamos ideias em experiências que emocionam. A combinação de estratégia, estética e tecnologia guia cada entrega, do briefing à finalização.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {ABOUT_FEATURES.map((feature) => (
                <div className="flex items-start gap-3" key={feature.title}>
                  <div className="rounded-lg bg-primary/20 p-2">
                    <feature.icon aria-hidden className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="grid grid-cols-2 gap-6">
              {ABOUT_STATS.map((stat) => (
                <Card className="service-card p-6 text-center" key={stat.label}>
                  <div className="mb-2 text-3xl font-bold text-glow">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
