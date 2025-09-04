export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  category: 'new-arrivals' | 'best-sellers' | 'full-stock';
  km?: number;
  engine?: string;
  color?: string;
}