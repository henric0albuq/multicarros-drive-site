import { MapPin, Phone, MessageCircle, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              MULTICARROS
            </div>
            <p className="text-primary-foreground/80">
              Certeza de bons negócios
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(61) 3352-2619</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 flex-shrink-0" />
                <span>(61) 98400-0200</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>vendas@multicarros.com.br</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>QNE 7, Loja 19/20, Taguatinga Norte - Brasília/DF</span>
              </div>
            </div>
          </div>

          {/* Hours and Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Horários</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p>Segunda a Sexta: 8:00 às 18:00</p>
                  <p>Sábados: 8:00 às 13:00</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium">Redes Sociais</h4>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://wa.me/5561984000200"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Multicarros. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}