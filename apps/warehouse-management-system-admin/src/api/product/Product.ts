import { Inventory } from "../inventory/Inventory";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  price: number | null;
  sku: string | null;
  inventories?: Array<Inventory>;
};
