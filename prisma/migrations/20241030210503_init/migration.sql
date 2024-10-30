-- CreateTable
CREATE TABLE "Catedra" (
    "id_catedra" SERIAL NOT NULL,
    "Nombre_catedra" TEXT NOT NULL,
    "adscrita_a" TEXT NOT NULL,
    "fecha_fundada" INTEGER NOT NULL,
    "cantidad_profesores" INTEGER NOT NULL,
    "cantidad_estudiantes" INTEGER NOT NULL,

    CONSTRAINT "Catedra_pkey" PRIMARY KEY ("id_catedra")
);

-- CreateTable
CREATE TABLE "Profesor" (
    "id_profesor" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "e_mail" TEXT NOT NULL,
    "telefono" INTEGER NOT NULL,
    "catedra_id" INTEGER NOT NULL,

    CONSTRAINT "Profesor_pkey" PRIMARY KEY ("id_profesor")
);

-- AddForeignKey
ALTER TABLE "Profesor" ADD CONSTRAINT "Profesor_catedra_id_fkey" FOREIGN KEY ("catedra_id") REFERENCES "Catedra"("id_catedra") ON DELETE RESTRICT ON UPDATE CASCADE;
