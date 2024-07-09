import { Customer } from "../customer/Customer";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orderNumber: string | null;
  orderDate: Date | null;
  status: string | null;
  customer?: Customer | null;
};
