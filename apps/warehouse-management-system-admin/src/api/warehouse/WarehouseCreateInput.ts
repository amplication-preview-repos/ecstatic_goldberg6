import { InventoryCreateNestedManyWithoutWarehousesInput } from "./InventoryCreateNestedManyWithoutWarehousesInput";

export type WarehouseCreateInput = {
  name?: string | null;
  location?: string | null;
  inventories?: InventoryCreateNestedManyWithoutWarehousesInput;
};
