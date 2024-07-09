import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";

export type WarehouseWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  location?: StringNullableFilter;
  inventories?: InventoryListRelationFilter;
};
