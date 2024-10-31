import { NextResponse } from "next/server"
import { prisma } from "@/src/libs/prisma"

export async function GET(request, { params }) {
    const profesor = await prisma.profesor.findUnique({
      where: { id_profesor: Number(params.id) }
    });
    return NextResponse.json(profesor);
}

export async function PUT(request, { params }) {
    const data = await request.json();
    const updatedProfesor = await prisma.profesor.update({
      where: { id_profesor: Number(params.id) },
      data,
    });
    return NextResponse.json(updatedProfesor);
}

export async function DELETE(request, { params }) {
    try{
        const deletedProfesor = await prisma.profesor.delete({
        where: { id_profesor: Number(params.id) }
        });
        return NextResponse.json(deletedProfesor);
    }catch(error){
        return NextResponse.json(error.message);
    }
}
  
  