import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5561984000200?text=Olá! Gostaria de mais informações sobre os veículos.", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg"
      size="icon"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}