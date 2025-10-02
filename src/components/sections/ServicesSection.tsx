import { Link } from "react-router-dom";
import { Camera, Lightbulb, Mic, Radio, Users, Video } from "lucide-react";
import { Card } from "@/components/ui/card";

const SERVICES = [
  {
    icon: Video,
    title: "Videoclipes e DVDs",
    description: "Narrativa com linguagem cinematografica e finalizacao profissional para dar vida a cada musica.",
  },
  {
    icon: Users,
    title: "Eventos e shows ao vivo",
    description: "Cobertura completa para eventos de qualquer porte com palco, audio e video integrados.",
  },
  {
    icon: Radio,
    title: "Transmissoes ao vivo",
    description: "Streaming estavel em alta definicao com audio nitido e direcao multicamera.",
  },
  {
    icon: Camera,
    title: "Video corporativo",
    description: "Apresentacoes, treinamentos e campanhas institucionais com narrativa alinhada ao seu negocio.",
  },
  {
    icon: Mic,
    title: "Producao de audio",
    description: "Gravacao, mixagem e masterizacao realizadas com equipamentos de referencia no mercado.",
  },
  {
    icon: Lightbulb,
    title: "Iluminacao cenica",
    description: "Desenho de luz dinamico para criar atmosferas marcantes em cada producao.",
  },
] as const;

const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-24 md:scroll-mt-28 bg-gradient-to-b from-background to-background/95 py-20">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in-up mb-16 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Servicos completos de <span className="text-glow">producao</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Cuidamos de cada etapa com planejamento preciso, criatividade e tecnologia de ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Link className="group block" key={service.title} to="/portfolio">
              <Card
                className="service-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 p-4 transition-all duration-300 group-hover:from-primary/30 group-hover:to-secondary/30">
                    <service.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground transition-all duration-300 group-hover:text-glow">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

