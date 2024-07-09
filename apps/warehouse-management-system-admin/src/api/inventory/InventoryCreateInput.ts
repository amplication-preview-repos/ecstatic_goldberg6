import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type InventoryCreateInput = {
  quantity?: number | null;
  product?: ProductWhereUniqueInput | null;
  warehouse?: WarehouseWhereUniqueInput | null;
};
