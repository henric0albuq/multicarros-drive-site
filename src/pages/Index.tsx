import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { VehicleCard } from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getVehiclesByCategory } from "@/data/mockVehicles";
import { Star, Shield, Users, Zap } from "lucide-react";

const Index = () => {
  const newArrivals = getVehiclesByCategory('new-arrivals');
  const bestSellers = getVehiclesByCategory('best-sellers');
  const fullStock = getVehiclesByCategory('full-stock');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4" variant="secondary">
            Ofertas Especiais
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Encontre o Seu
            <span className="text-primary block">Carro dos Sonhos</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Na Multicarros você encontra os melhores veículos com a garantia de bons negócios. 
            Financiamento facilitado e atendimento personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Ver Ofertas
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Falar com Vendedor
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Garantia</h3>
              <p className="text-sm text-muted-foreground">Todos os veículos com garantia</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Financiamento</h3>
              <p className="text-sm text-muted-foreground">Aprovação rápida e fácil</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Atendimento</h3>
              <p className="text-sm text-muted-foreground">Equipe especializada</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Qualidade</h3>
              <p className="text-sm text-muted-foreground">Veículos selecionados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Sections */}
      <div className="container mx-auto px-4 py-16">
        {/* Acabaram de Chegar */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🚗 Acabaram de Chegar!</h2>
            <p className="text-muted-foreground">Os últimos veículos que chegaram em nosso estoque</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newArrivals.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </section>

        {/* Mais Vendidos */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🏆 Mais Vendidos</h2>
            <p className="text-muted-foreground">Os veículos preferidos dos nossos clientes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellers.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </section>

        {/* Estoque Completo */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🚙 Estoque Completo</h2>
            <p className="text-muted-foreground">Explore toda nossa variedade de veículos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fullStock.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </section>
      </div>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Index;
