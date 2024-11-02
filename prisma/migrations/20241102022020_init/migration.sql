-- AlterTable
ALTER TABLE "Actividades" ALTER COLUMN "investigacionesApro" SET DATA TYPE TEXT,
ALTER COLUMN "eventos" SET DATA TYPE TEXT,
ALTER COLUMN "proyectos" SET DATA TYPE TEXT,
ALTER COLUMN "publicaciones" SET DATA TYPE TEXT,
ALTER COLUMN "articulos" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Catedra" ALTER COLUMN "fecha_fundada" SET DATA TYPE TEXT,
ALTER COLUMN "cantidad_profesores" SET DATA TYPE TEXT,
ALTER COLUMN "cantidad_estudiantes" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Profesor" ALTER COLUMN "telefono" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Titulos" ALTER COLUMN "tesis_diploma" SET DATA TYPE TEXT,
ALTER COLUMN "tesis_maestria" SET DATA TYPE TEXT,
ALTER COLUMN "tesis_doctorado" SET DATA TYPE TEXT;
