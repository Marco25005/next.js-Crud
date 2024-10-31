import { NextResponse } from "next/server"
import { prisma } from "@/src/libs/prisma"

export async function GET(){
    const actividad= await prisma.actividades.findMany()
  
    return NextResponse.json(actividad)
 }
 export async function POST(request) {
    const {
      investigacionesApro,
      eventos,
      proyectos,
      publicaciones,
      articulos,
      catedra_id
    } = await request.json();
  
    const newActividad = await prisma.actividades.create({
      data: {
        investigacionesApro: investigacionesApro,
        eventos: eventos,
        proyectos: proyectos,
        publicaciones: publicaciones,
        articulos: articulos,
        catedra_id: catedra_id
      }
    });
  
    return NextResponse.json(newActividad);
  }
  