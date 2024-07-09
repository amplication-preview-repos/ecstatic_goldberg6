/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Inventory as PrismaInventory,
  Product as PrismaProduct,
  Warehouse as PrismaWarehouse,
} from "@prisma/client";

export class InventoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.InventoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.inventory.count(args);
  }

  async inventories(
    args: Prisma.InventoryFindManyArgs
  ): Promise<PrismaInventory[]> {
    return this.prisma.inventory.findMany(args);
  }
  async inventory(
    args: Prisma.InventoryFindUniqueArgs
  ): Promise<PrismaInventory | null> {
    return this.prisma.inventory.findUnique(args);
  }
  async createInventory(
    args: Prisma.InventoryCreateArgs
  ): Promise<PrismaInventory> {
    return this.prisma.inventory.create(args);
  }
  async updateInventory(
    args: Prisma.InventoryUpdateArgs
  ): Promise<PrismaInventory> {
    return this.prisma.inventory.update(args);
  }
  async deleteInventory(
    args: Prisma.InventoryDeleteArgs
  ): Promise<PrismaInventory> {
    return this.prisma.inventory.delete(args);
  }

  async getProduct(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.inventory
      .findUnique({
        where: { id: parentId },
      })
      .product();
  }

  async getWarehouse(parentId: string): Promise<PrismaWarehouse | null> {
    return this.prisma.inventory
      .findUnique({
        where: { id: parentId },
      })
      .warehouse();
  }
}
