import { NextResponse } from "next/server"
import { prisma } from "@/src/libs/prisma"

export async function GET(request, { params }) {
    const actividad = await prisma.actividades.findUnique({
      where: { id_actividad: Number(params.id) }
    });
    return NextResponse.json(actividad);
}

export async function PUT(request, { params }) {
    const data = await request.json();
    const updatedActividad = await prisma.actividades.update({
      where: { id_actividad: Number(params.id) },
      data:data,
    });
    return NextResponse.json(updatedActividad);
}

export async function DELETE(request, { params }) {
  try{  
    const deletedActividad = await prisma.actividades.delete({
        where: { id_actividad: Number(params.id) }
      });
    return NextResponse.json(deletedActividad);
    }catch(error){
      return NextResponse.json(error.message)
    }  
}
  