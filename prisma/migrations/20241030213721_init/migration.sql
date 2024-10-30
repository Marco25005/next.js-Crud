-- CreateTable
CREATE TABLE "Actividades" (
    "id_actividad" SERIAL NOT NULL,
    "investigacionesApro" INTEGER NOT NULL,
    "eventos" INTEGER NOT NULL,
    "proyectos" INTEGER NOT NULL,
    "publicaciones" INTEGER NOT NULL,
    "articulos" INTEGER NOT NULL,
    "catedra_id" INTEGER NOT NULL,

    CONSTRAINT "Actividades_pkey" PRIMARY KEY ("id_actividad")
);

-- CreateTable
CREATE TABLE "Presidente" (
    "profesor_id" INTEGER NOT NULL,
    "nombramiento" TEXT NOT NULL,

    CONSTRAINT "Presidente_pkey" PRIMARY KEY ("profesor_id")
);

-- CreateTable
CREATE TABLE "Titulos" (
    "id_titulos" INTEGER NOT NULL,
    "tesis_diploma" BOOLEAN NOT NULL,
    "tesis_maestria" BOOLEAN NOT NULL,
    "tesis_doctorado" BOOLEAN NOT NULL,
    "profesor_id_t" INTEGER NOT NULL,

    CONSTRAINT "Titulos_pkey" PRIMARY KEY ("id_titulos")
);

-- AddForeignKey
ALTER TABLE "Actividades" ADD CONSTRAINT "Actividades_catedra_id_fkey" FOREIGN KEY ("catedra_id") REFERENCES "Catedra"("id_catedra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presidente" ADD CONSTRAINT "Presidente_profesor_id_fkey" FOREIGN KEY ("profesor_id") REFERENCES "Profesor"("id_profesor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Titulos" ADD CONSTRAINT "Titulos_profesor_id_t_fkey" FOREIGN KEY ("profesor_id_t") REFERENCES "Profesor"("id_profesor") ON DELETE RESTRICT ON UPDATE CASCADE;
