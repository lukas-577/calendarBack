/*
  Warnings:

  - You are about to drop the `Titulo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `tituloId` on the `FechaHorario` table. All the data in the column will be lost.
  - Added the required column `lugarId` to the `FechaHorario` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Titulo";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Lugar" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FechaHorario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "horario" TEXT NOT NULL,
    "lugarId" INTEGER NOT NULL,
    CONSTRAINT "FechaHorario_lugarId_fkey" FOREIGN KEY ("lugarId") REFERENCES "Lugar" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_FechaHorario" ("fecha", "horario", "id") SELECT "fecha", "horario", "id" FROM "FechaHorario";
DROP TABLE "FechaHorario";
ALTER TABLE "new_FechaHorario" RENAME TO "FechaHorario";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
