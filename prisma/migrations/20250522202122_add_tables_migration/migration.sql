/*
  Warnings:

  - You are about to drop the column `lowStockAlert` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `InventoryTransaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Media` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Page` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SEO` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Section` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "InventoryTransaction" DROP CONSTRAINT "InventoryTransaction_productId_fkey";

-- DropForeignKey
ALTER TABLE "Media" DROP CONSTRAINT "Media_sectionId_fkey";

-- DropForeignKey
ALTER TABLE "SEO" DROP CONSTRAINT "SEO_pageId_fkey";

-- DropForeignKey
ALTER TABLE "Section" DROP CONSTRAINT "Section_pageId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "lowStockAlert";

-- DropTable
DROP TABLE "InventoryTransaction";

-- DropTable
DROP TABLE "Media";

-- DropTable
DROP TABLE "Page";

-- DropTable
DROP TABLE "SEO";

-- DropTable
DROP TABLE "Section";

-- DropEnum
DROP TYPE "InventoryTransactionType";
