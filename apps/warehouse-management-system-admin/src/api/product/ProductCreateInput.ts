import { InventoryCreateNestedManyWithoutProductsInput } from "./InventoryCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  sku?: string | null;
  inventories?: InventoryCreateNestedManyWithoutProductsInput;
};
