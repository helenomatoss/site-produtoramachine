import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { siteMetadata } from "@/config/site-metadata";

const CONTACT_DELAY_IN_MS = 1000;

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, CONTACT_DELAY_IN_MS));

    toast({
      title: "Mensagem enviada com sucesso",
      description: "Entraremos em contato em ate 24 horas.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactEmail = siteMetadata.contactEmail?.trim();
  const contactPhone = siteMetadata.contactPhone?.trim();

  return (
    <section id="contact" className="scroll-mt-24 md:scroll-mt-28 bg-gradient-to-b from-background to-background/95 py-20">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in-up mb-16 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Pronto para criar <span className="text-glow">algo incrivel?</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Conte com a nossa equipe para transformar ideias em projetos audiovisuais marcantes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Card className="service-card animate-fade-in-left p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="name">
                  Seu nome
                </label>
                <Input
                  autoComplete="name"
                  className="bg-input border-border focus:border-primary focus:ring-primary"
                  id="name"
                  name="name"
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                  required
                  type="text"
                  value={formData.name}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="email">
                  Endereco de email
                </label>
                <Input
                  autoComplete="email"
                  className="bg-input border-border focus:border-primary focus:ring-primary"
                  id="email"
                  name="email"
                  onChange={handleInputChange}
                  placeholder="Digite seu email"
                  required
                  type="email"
                  value={formData.email}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="message">
                  Detalhes do projeto
                </label>
                <Textarea
                  className="bg-input border-border focus:border-primary focus:ring-primary resize-none"
                  id="message"
                  name="message"
                  onChange={handleInputChange}
                  placeholder="Compartilhe objetivos, prazos e necessidades especificas"
                  required
                  rows={6}
                  value={formData.message}
                />
              </div>
              <Button className="btn-hero w-full" disabled={isSubmitting} size="lg" type="submit">
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-b-2 border-white" aria-hidden />
                    Enviando
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send aria-hidden className="h-4 w-4" />
                    Enviar mensagem
                  </span>
                )}
              </Button>
            </form>
          </Card>

          <div className="animate-fade-in-right space-y-8">
            <Card className="service-card p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/20 p-3">
                  <Mail aria-hidden className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Envie um email</h3>
                  <p className="text-muted-foreground">
                    {contactEmail || "Configure VITE_CONTACT_EMAIL"}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">Retorno em ate 24 horas uteis</p>
                </div>
              </div>
            </Card>
            <Card className="service-card p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-secondary/20 p-3">
                  <Phone aria-hidden className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Fale com a equipe</h3>
                  <p className="text-muted-foreground">
                    {contactPhone || "Configure VITE_CONTACT_PHONE"}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{siteMetadata.officeHours}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

