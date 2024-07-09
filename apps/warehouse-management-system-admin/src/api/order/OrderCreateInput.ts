import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderCreateInput = {
  orderNumber?: string | null;
  orderDate?: Date | null;
  status?: string | null;
  customer?: CustomerWhereUniqueInput | null;
};
