import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type InventoryUpdateInput = {
  quantity?: number | null;
  product?: ProductWhereUniqueInput | null;
  warehouse?: WarehouseWhereUniqueInput | null;
};
