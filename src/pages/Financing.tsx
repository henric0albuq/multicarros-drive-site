import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calculator, FileCheck, Clock, DollarSign } from "lucide-react";

export default function Financing() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Dados do Cliente
    fullName: "",
    rg: "",
    cpf: "",
    cnh: "",
    phone: "",
    email: "",
    cep: "",
    city: "",
    state: "",
    gender: "",
    maritalStatus: "",
    // Dados do Veículo
    brand: "",
    model: "",
    year: "",
    color: "",
    price: "",
    downPayment: "",
    installments: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada!",
      description: "Em breve nossa equipe entrará em contato para dar continuidade ao seu financiamento.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4" variant="secondary">
            Financiamento
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Financie Seu <span className="text-primary">Veículo</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Condições especiais e aprovação rápida. Preencha o formulário abaixo 
            e nossa equipe preparará a melhor proposta para você.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Simulação Gratuita</h3>
              <p className="text-sm text-muted-foreground">Calcule suas parcelas sem compromisso</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Aprovação Rápida</h3>
              <p className="text-sm text-muted-foreground">Resposta em até 24 horas</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Documentação Simples</h3>
              <p className="text-sm text-muted-foreground">Processo descomplicado e transparente</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Melhores Taxas</h3>
              <p className="text-sm text-muted-foreground">Condições especiais negociadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Solicitação de Financiamento</h2>
              <p className="text-muted-foreground">
                Preencha todos os campos para receber uma proposta personalizada
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Dados do Cliente */}
              <Card>
                <CardHeader>
                  <CardTitle>Dados do Cliente</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nome Completo *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rg">RG *</Label>
                      <Input
                        id="rg"
                        value={formData.rg}
                        onChange={(e) => handleInputChange('rg', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cpf">CPF *</Label>
                      <Input
                        id="cpf"
                        value={formData.cpf}
                        onChange={(e) => handleInputChange('cpf', e.target.value)}
                        placeholder="000.000.000-00"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cnh">CNH *</Label>
                      <Input
                        id="cnh"
                        value={formData.cnh}
                        onChange={(e) => handleInputChange('cnh', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(61) 99999-9999"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cep">CEP *</Label>
                      <Input
                        id="cep"
                        value={formData.cep}
                        onChange={(e) => handleInputChange('cep', e.target.value)}
                        placeholder="00000-000"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">Estado *</Label>
                      <Select onValueChange={(value) => handleInputChange('state', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="DF">DF</SelectItem>
                          <SelectItem value="GO">GO</SelectItem>
                          <SelectItem value="MG">MG</SelectItem>
                          <SelectItem value="SP">SP</SelectItem>
                          <SelectItem value="RJ">RJ</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="gender">Sexo *</Label>
                      <Select onValueChange={(value) => handleInputChange('gender', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="masculino">Masculino</SelectItem>
                          <SelectItem value="feminino">Feminino</SelectItem>
                          <SelectItem value="nao-informar">Prefiro não informar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maritalStatus">Estado Civil *</Label>
                      <Select onValueChange={(value) => handleInputChange('maritalStatus', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="solteiro">Solteiro(a)</SelectItem>
                          <SelectItem value="casado">Casado(a)</SelectItem>
                          <SelectItem value="divorciado">Divorciado(a)</SelectItem>
                          <SelectItem value="viuvo">Viúvo(a)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dados do Veículo */}
              <Card>
                <CardHeader>
                  <CardTitle>Dados do Veículo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="brand">Marca *</Label>
                      <Input
                        id="brand"
                        value={formData.brand}
                        onChange={(e) => handleInputChange('brand', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="model">Modelo *</Label>
                      <Input
                        id="model"
                        value={formData.model}
                        onChange={(e) => handleInputChange('model', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="year">Ano *</Label>
                      <Input
                        id="year"
                        value={formData.year}
                        onChange={(e) => handleInputChange('year', e.target.value)}
                        placeholder="2024"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="color">Cor *</Label>
                      <Input
                        id="color"
                        value={formData.color}
                        onChange={(e) => handleInputChange('color', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Valor do Veículo *</Label>
                      <Input
                        id="price"
                        value={formData.price}
                        onChange={(e) => handleInputChange('price', e.target.value)}
                        placeholder="R$ 50.000,00"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="downPayment">Valor de Entrada</Label>
                      <Input
                        id="downPayment"
                        value={formData.downPayment}
                        onChange={(e) => handleInputChange('downPayment', e.target.value)}
                        placeholder="R$ 10.000,00"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="installments">Quantidade de Parcelas *</Label>
                      <Select onValueChange={(value) => handleInputChange('installments', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12">12x</SelectItem>
                          <SelectItem value="18">18x</SelectItem>
                          <SelectItem value="24">24x</SelectItem>
                          <SelectItem value="36">36x</SelectItem>
                          <SelectItem value="48">48x</SelectItem>
                          <SelectItem value="60">60x</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button type="submit" size="lg" className="px-12">
                  Solicitar Financiamento
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Ao enviar este formulário, você concorda com nossos termos de uso e política de privacidade.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
}