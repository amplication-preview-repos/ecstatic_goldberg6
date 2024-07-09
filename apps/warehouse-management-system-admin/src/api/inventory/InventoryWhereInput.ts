import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type InventoryWhereInput = {
  id?: StringFilter;
  quantity?: IntNullableFilter;
  product?: ProductWhereUniqueInput;
  warehouse?: WarehouseWhereUniqueInput;
};
