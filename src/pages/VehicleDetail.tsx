import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { getVehicleById } from "@/data/mockVehicles";
import { Calendar, Gauge, Palette, Fuel, MessageCircle, Phone, Mail } from "lucide-react";

export default function VehicleDetail() {
  const { id } = useParams();
  const vehicle = getVehicleById(id || "");
  const { toast } = useToast();
  
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    phone: "",
    email: ""
  });

  if (!vehicle) {
    return <Navigate to="/404" replace />;
  }

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada!",
      description: "Nossa equipe entrará em contato em breve com mais informações sobre este veículo.",
    });
    setInquiryForm({ name: "", phone: "", email: "" });
  };

  const handleWhatsAppInquiry = () => {
    const message = `Olá! Tenho interesse no veículo ${vehicle.name} ${vehicle.year}. Gostaria de mais informações.`;
    window.open(`https://wa.me/5561984000200?text=${encodeURIComponent(message)}`, '_blank');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vehicle Image and Info */}
          <div className="space-y-6">
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Vehicle Details */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{vehicle.name}</CardTitle>
                  <Badge variant="secondary">{vehicle.year}</Badge>
                </div>
                <p className="text-3xl font-bold text-primary">{formatPrice(vehicle.price)}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Ano</p>
                      <p className="font-semibold">{vehicle.year}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Gauge className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Quilometragem</p>
                      <p className="font-semibold">{vehicle.km?.toLocaleString()} km</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Fuel className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Motor</p>
                      <p className="font-semibold">{vehicle.engine}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Palette className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Cor</p>
                      <p className="font-semibold">{vehicle.color}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-2">Especificações</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Marca:</span>
                      <span className="ml-2 font-medium">{vehicle.brand}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Modelo:</span>
                      <span className="ml-2 font-medium">{vehicle.model}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Inquiry Form and Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Interessado neste veículo?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={handleWhatsAppInquiry}
                  className="w-full flex items-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  Conversar no WhatsApp
                </Button>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => window.location.href = 'tel:+556133522619'}
                  >
                    <Phone className="h-4 w-4" />
                    Ligar
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => window.location.href = 'mailto:vendas@multicarros.com.br'}
                  >
                    <Mail className="h-4 w-4" />
                    E-mail
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Inquiry Form */}
            <Card>
              <CardHeader>
                <CardTitle>Solicitar Mais Informações</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-name">Nome *</Label>
                    <Input
                      id="inquiry-name"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry-phone">Telefone *</Label>
                    <Input
                      id="inquiry-phone"
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="(61) 99999-9999"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry-email">E-mail *</Label>
                    <Input
                      id="inquiry-email"
                      type="email"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Solicitar Informações
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <h4 className="font-semibold">Precisa de Financiamento?</h4>
                  <p className="text-sm text-muted-foreground">
                    Temos as melhores condições do mercado
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/financing">Ver Opções de Financiamento</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
}