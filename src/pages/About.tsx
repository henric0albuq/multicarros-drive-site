import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Award, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4" variant="secondary">
            Nossa História
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a <span className="text-primary">Multicarros</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Há anos no mercado automotivo, trabalhamos com a certeza de bons negócios, 
            oferecendo veículos de qualidade e atendimento diferenciado.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Nossa Trajetória</h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  A Multicarros nasceu da paixão pelo mundo automotivo e do desejo de 
                  proporcionar aos nossos clientes uma experiência única na compra de veículos. 
                  Localizada em Taguatinga Norte, Brasília/DF, nossa loja se tornou referência 
                  na região pela qualidade dos veículos e transparência nos negócios.
                </p>
                <p className="text-muted-foreground mb-6 text-lg">
                  Nossa equipe é formada por profissionais experientes e apaixonados por carros, 
                  que trabalham diariamente para encontrar as melhores oportunidades do mercado 
                  e oferecer aos nossos clientes veículos com excelente custo-benefício.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop" 
                  alt="Loja Multicarros" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os princípios que norteiam nosso trabalho e fazem da Multicarros 
              uma empresa de confiança no mercado automotivo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Paixão</h3>
                <p className="text-sm text-muted-foreground">
                  Amor genuíno pelo que fazemos e dedicação total aos nossos clientes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Transparência</h3>
                <p className="text-sm text-muted-foreground">
                  Negócios claros e honestos, sem surpresas ou custos ocultos
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Qualidade</h3>
                <p className="text-sm text-muted-foreground">
                  Seleção rigorosa de veículos para garantir a melhor experiência
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Atendimento</h3>
                <p className="text-sm text-muted-foreground">
                  Relacionamento próximo e personalizado com cada cliente
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Nossa Missão</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Proporcionar aos nossos clientes a melhor experiência na compra de veículos, 
              oferecendo produtos de qualidade, atendimento diferenciado e soluções 
              financeiras que cabem no seu bolso.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                "Certeza de bons negócios"
              </h3>
              <p className="text-muted-foreground">
                Este é mais que um slogan, é o nosso compromisso com cada cliente que 
                confia na Multicarros para realizar o sonho do carro próprio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
}