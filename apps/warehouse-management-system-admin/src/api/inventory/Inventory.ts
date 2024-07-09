import { Product } from "../product/Product";
import { Warehouse } from "../warehouse/Warehouse";

export type Inventory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  quantity: number | null;
  product?: Product | null;
  warehouse?: Warehouse | null;
};
