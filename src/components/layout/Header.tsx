import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MessageCircle, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  const navigationItems = [
    { href: "/about", label: "Sobre a Empresa" },
    { href: "/financing", label: "Financiamento" },
    { href: "/contact", label: "Contato" }
  ];

  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "https://wa.me/5561984000200", icon: MessageCircle, label: "WhatsApp" }
  ];

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar with contact info and social links */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(61) 3352-2619</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>(61) 98400-0200</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="hover:opacity-80 transition-opacity"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="text-2xl font-bold text-primary">
              MULTICARROS
            </div>
            <div className="text-xs text-muted-foreground">
              Certeza de bons negócios
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}