import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  orderNumber?: StringNullableFilter;
  orderDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
};
