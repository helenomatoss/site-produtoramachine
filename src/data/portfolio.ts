import portfolioBoston from "@/assets/portfolio-boston.jpg";
import portfolioAlexandre from "@/assets/portfolio-alexandre.jpg";
import portfolioGerson from "@/assets/portfolio-gerson.jpg";

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description?: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "boston-scientifics",
    title: "Boston Scientifics",
    category: "Evento corporativo",
    image: portfolioBoston,
    alt: "Painel iluminado com o logotipo da Boston Scientifics ao fundo",
    description: "Evento corporativo com transmissao ao vivo e cobertura integral de palco e plateia.",
  },
  {
    id: "alexandre-pires",
    title: "Alexandre Pires",
    category: "Show ao vivo",
    image: portfolioAlexandre,
    alt: "Show ao vivo de Alexandre Pires sob luzes coloridas",
    description: "Show registrado com direcao de multicameras e audio profissional para DVD.",
  },
  {
    id: "gerson-rufino",
    title: "Gerson Rufino",
    category: "Gravacao de DVD",
    image: portfolioGerson,
    alt: "Cena da gravacao de DVD do cantor Gerson Rufino",
    description: "Gravacao de DVD com iluminacao cenica e cinematografia dedicada.",
  },
];
