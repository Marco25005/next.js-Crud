import { NextResponse } from "next/server"
import { prisma } from "@/src/libs/prisma"

export async function GET(){
    const titulos= await prisma.titulos.findMany()
    
    return NextResponse.json(titulos)
}

export async function POST(request) {
    const {
      tesis_diploma,
      tesis_maestria,
      tesis_doctorado,
      profesor_id_t
    } = await request.json();
  
    const newTitulo = await prisma.titulos.create({
      data: {
        tesis_diploma: tesis_diploma,
        tesis_maestria: tesis_maestria,
        tesis_doctorado: tesis_doctorado,
        profesor_id_t: profesor_id_t
      }
    });
  
    return NextResponse.json(newTitulo);
  }
  