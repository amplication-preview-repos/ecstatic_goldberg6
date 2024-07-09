import { InventoryUpdateManyWithoutWarehousesInput } from "./InventoryUpdateManyWithoutWarehousesInput";

export type WarehouseUpdateInput = {
  name?: string | null;
  location?: string | null;
  inventories?: InventoryUpdateManyWithoutWarehousesInput;
};
