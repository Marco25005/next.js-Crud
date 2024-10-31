/*
  Warnings:

  - You are about to drop the column `Nombre_catedra` on the `Catedra` table. All the data in the column will be lost.
  - Added the required column `nombre_catedra` to the `Catedra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Catedra" DROP COLUMN "Nombre_catedra",
ADD COLUMN     "nombre_catedra" TEXT NOT NULL;
