import { useState } from "react";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import portfolioOne from "@/assets/portfolio-1.jpg";
import portfolioTwo from "@/assets/portfolio-2.jpg";
import portfolioThree from "@/assets/portfolio-3.jpg";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Festival de Rock 2024",
    category: "Show ao vivo",
    image: portfolioOne,
    description: "Festival multi palco com transmissao ao vivo e direcao de camera integrada.",
  },
  {
    id: 2,
    title: "Summit Corporativo",
    category: "Video corporativo",
    image: portfolioTwo,
    description: "Conferencia executiva com captacao multicamera e conteudo institucional completo.",
  },
  {
    id: 3,
    title: "Producao de Videoclipe",
    category: "Videoclipe",
    image: portfolioThree,
    description: "Narrativa musical com iluminacao dinamica e fotografia cinematografica.",
  },
  {
    id: 4,
    title: "Lançamento de Produto",
    category: "Evento corporativo",
    image: portfolioTwo,
    description: "Apresentacao ao vivo com conteudo de apoio e transmissao simultanea.",
  },
  {
    id: 5,
    title: "Turne Sertaneja",
    category: "Show ao vivo",
    image: portfolioOne,
    description: "Cobertura completa de turne com audio captado em multipistas e video 4K.",
  },
  {
    id: 6,
    title: "Documentario Musical",
    category: "Narrativa long form",
    image: portfolioThree,
    description: "Serie documental com entrevistas, bastidores e cenas ao vivo.",
  },
] as const;

const PortfolioPage = () => {
  const [selectedItem, setSelectedItem] = useState<(typeof PORTFOLIO_ITEMS)[number] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-20">
        <section className="bg-gradient-to-b from-background/95 to-background py-20">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <Link
                className="mb-6 inline-flex items-center text-primary transition-colors hover:text-secondary"
                to="/"
              >
                <ArrowLeft aria-hidden className="mr-2 h-5 w-5" />
                Voltar para a home
              </Link>
              <div className="animate-fade-in-up text-center">
                <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                  Nosso <span className="text-glow">portfolio</span>
                </h1>
                <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
                  Explore producoes audiovisuais realizadas para marcas, artistas e eventos em todo o Brasil.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PORTFOLIO_ITEMS.map((item, index) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <button
                      className="portfolio-item group animate-fade-in-up"
                      onClick={() => setSelectedItem(item)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      type="button"
                    >
                      <div className="relative h-64 overflow-hidden rounded-xl">
                        <img
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                          src={item.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="rounded-full bg-primary/90 p-4 shadow-[var(--shadow-glow)]">
                            <Play aria-hidden className="h-8 w-8 text-white" />
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                          <span className="mb-2 block text-sm font-medium text-secondary">{item.category}</span>
                          <h2 className="mb-2 text-xl font-bold text-white">{item.title}</h2>
                          <p className="text-sm text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl border-border bg-background">
                    <div className="flex aspect-video items-center justify-center rounded-lg bg-black">
                      <div className="text-center">
                        <Play aria-hidden className="mx-auto mb-4 h-16 w-16 text-primary" />
                        <p className="text-muted-foreground">Player de video disponivel mediante integracao personalizada.</p>
                        <p className="mt-2 text-sm text-muted-foreground">Exibindo: {selectedItem?.title}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default PortfolioPage;
