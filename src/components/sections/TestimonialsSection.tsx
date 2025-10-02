import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Maria Silva",
    company: "Eventos Premium",
    content:
      "A Produtora Machine transformou nosso evento corporativo em uma experiencia inesquecivel. O cuidado com os detalhes fez toda a diferenca.",
    rating: 5,
    initials: "MS",
  },
  {
    name: "Joao Santos",
    company: "Rock Nation Band",
    content:
      "O videoclipe superou as expectativas. A direcao criativa e a execucao tecnica foram impecaveis do inicio ao fim.",
    rating: 5,
    initials: "JS",
  },
  {
    name: "Ana Costa",
    company: "Tech Solutions",
    content:
      "Equipe profissional, pontual e talentosa. Recebemos nosso video corporativo dentro do prazo e com alto padrao de qualidade.",
    rating: 5,
    initials: "AC",
  },
] as const;

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-background/95 to-background py-20">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in-up mb-16 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            O que nossos <span className="text-glow">clientes dizem</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Depoimentos de quem ja produziu com a Machine Produtora e confiou na nossa entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card
              className="service-card animate-fade-in-up p-6"
              key={`${testimonial.name}-${index}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex h-full flex-col">
                <div className="mb-4 flex space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} aria-hidden className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="mb-6 flex-grow leading-relaxed text-muted-foreground">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <Avatar className="border-2 border-primary/20">
                    <AvatarFallback className="bg-gradient-to-r from-primary/20 to-secondary/20 font-semibold text-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
