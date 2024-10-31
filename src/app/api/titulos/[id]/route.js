import { NextResponse } from "next/server"
import { prisma } from "@/src/libs/prisma"

export async function GET(request, { params }) {
    const titulo = await prisma.titulos.findUnique({
      where: { id_titulos: Number(params.id) }
    });
    return NextResponse.json(titulo);
}

export async function PUT(request, { params }) {
    const data = await request.json();
    const updatedTitulo = await prisma.titulos.update({
      where: { id_titulos: Number(params.id) },
      data,
    });
    return NextResponse.json(updatedTitulo);
}

export async function DELETE(request, { params }) {
    try{
        const deletedTitulo = await prisma.titulos.delete({
        where: { id_titulos: Number(params.id) }
        });
        return NextResponse.json(deletedTitulo);
    }catch(error){
        return NextResponse.json(error.message);
    }
  }
  
  
  