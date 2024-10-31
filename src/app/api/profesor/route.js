import { NextResponse } from "next/server"
import { prisma } from "@/src/libs/prisma"

export async function GET(){
    const profesor= await prisma.profesor.findMany()
    return NextResponse.json(profesor)
}
export async function POST(request) {
    const {
      nombre,
      e_mail,
      telefono,
      catedra_id
    } = await request.json();
  
    const newProfesor = await prisma.profesor.create({
      data: {
        nombre: nombre,
        e_mail: e_mail,
        telefono: telefono,
        catedra_id: catedra_id
      }
    });
  
    return NextResponse.json(newProfesor);
  }
  