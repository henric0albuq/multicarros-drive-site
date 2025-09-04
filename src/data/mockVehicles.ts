import { Vehicle } from "@/types/vehicle";

export const mockVehicles: Vehicle[] = [
  // New Arrivals
  {
    id: "1",
    name: "Honda Civic EXL",
    brand: "Honda",
    model: "Civic",
    year: 2022,
    price: 125000,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&h=400&fit=crop",
    category: "new-arrivals",
    km: 15000,
    engine: "2.0 CVT",
    color: "Prata"
  },
  {
    id: "2",
    name: "Toyota Corolla XEI",
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    price: 98000,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop",
    category: "new-arrivals",
    km: 25000,
    engine: "2.0 Automático",
    color: "Branco"
  },
  {
    id: "3",
    name: "Volkswagen Jetta TSI",
    brand: "Volkswagen",
    model: "Jetta",
    year: 2023,
    price: 140000,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop",
    category: "new-arrivals",
    km: 8000,
    engine: "1.4 TSI Turbo",
    color: "Preto"
  },

  // Best Sellers
  {
    id: "4",
    name: "Hyundai HB20 Comfort",
    brand: "Hyundai",
    model: "HB20",
    year: 2020,
    price: 65000,
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop",
    category: "best-sellers",
    km: 35000,
    engine: "1.6 Manual",
    color: "Vermelho"
  },
  {
    id: "5",
    name: "Chevrolet Onix LT",
    brand: "Chevrolet",
    model: "Onix",
    year: 2021,
    price: 72000,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop",
    category: "best-sellers",
    km: 22000,
    engine: "1.0 Turbo",
    color: "Azul"
  },
  {
    id: "6",
    name: "Ford Ka SE Plus",
    brand: "Ford",
    model: "Ka",
    year: 2020,
    price: 58000,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
    category: "best-sellers",
    km: 28000,
    engine: "1.5 Manual",
    color: "Prata"
  },

  // Full Stock
  {
    id: "7",
    name: "Fiat Argo Drive",
    brand: "Fiat",
    model: "Argo",
    year: 2019,
    price: 62000,
    image: "https://images.unsplash.com/photo-1494976688602-d440df281ee0?w=600&h=400&fit=crop",
    category: "full-stock",
    km: 42000,
    engine: "1.3 Manual",
    color: "Cinza"
  },
  {
    id: "8",
    name: "Nissan Versa SV",
    brand: "Nissan",
    model: "Versa",
    year: 2021,
    price: 85000,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
    category: "full-stock",
    km: 18000,
    engine: "1.6 CVT",
    color: "Branco"
  },
  {
    id: "9",
    name: "Renault Sandero Stepway",
    brand: "Renault",
    model: "Sandero",
    year: 2022,
    price: 78000,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
    category: "full-stock",
    km: 12000,
    engine: "1.6 Manual",
    color: "Laranja"
  }
];

export function getVehiclesByCategory(category: Vehicle['category']): Vehicle[] {
  return mockVehicles.filter(vehicle => vehicle.category === category);
}

export function getVehicleById(id: string): Vehicle | undefined {
  return mockVehicles.find(vehicle => vehicle.id === id);
}