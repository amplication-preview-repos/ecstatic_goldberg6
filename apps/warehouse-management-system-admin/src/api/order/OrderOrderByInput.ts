import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  orderNumber?: SortOrder;
  orderDate?: SortOrder;
  status?: SortOrder;
  customerId?: SortOrder;
};
