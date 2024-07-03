/*
  Warnings:

  - Added the required column `employeeId` to the `Contribution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contribution" ADD COLUMN     "employeeId" TEXT NOT NULL;
