import { Inventory } from "../inventory/Inventory";

export type Warehouse = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  location: string | null;
  inventories?: Array<Inventory>;
};
