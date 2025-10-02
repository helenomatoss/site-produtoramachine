import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mx-auto max-w-4xl animate-fade-in-up">
          <h1 id="hero-heading" className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Transforme sua visao em uma
            <span className="text-glow"> experiencia inesquecivel</span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Do conceito a entrega, produzimos videos e audio que envolvem seu publico e elevam a presenca da sua marca.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="btn-hero px-8 py-4 text-lg" onClick={() => scrollToSection("contact")} size="lg">
              Vamos falar do seu projeto
            </Button>
            <Button
              className="btn-secondary text-lg"
              onClick={() => scrollToSection("portfolio")}
              size="lg"
              variant="outline"
            >
              Ver nossos trabalhos
            </Button>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="absolute left-10 top-20 h-20 w-20 rounded-full bg-primary/20 animate-pulse" />
      <div
        aria-hidden="true"
        className="absolute bottom-20 right-10 h-16 w-16 rounded-full bg-secondary/20 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        aria-hidden="true"
        className="absolute left-20 top-1/2 h-12 w-12 rounded-full bg-accent/20 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
};

export default HeroSection;
