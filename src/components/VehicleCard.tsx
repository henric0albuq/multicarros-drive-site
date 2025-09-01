import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Vehicle } from "@/types/vehicle";
import { Link } from "react-router-dom";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <Link to={`/vehicle/${vehicle.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
        <div className="aspect-video overflow-hidden">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="text-xs">
                {vehicle.year}
              </Badge>
              <span className="text-sm text-muted-foreground">{vehicle.brand}</span>
            </div>
            <h3 className="font-semibold text-lg leading-tight">{vehicle.name}</h3>
            <p className="text-2xl font-bold text-primary">{formatPrice(vehicle.price)}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}