import { NextResponse } from "next/server"
import { prisma } from "@/src/libs/prisma"

export async function GET(request, { params }) {
    const presidente = await prisma.presidente.findUnique({
      where: { profesor_id: Number(params.id) }
    });
    return NextResponse.json(presidente);
}

export async function PUT(request, { params }) {
    const data = await request.json();
    const updatedPresidente = await prisma.presidente.update({
      where: { profesor_id: Number(params.id) },
      data,
    });
    return NextResponse.json(updatedPresidente);
}

export async function DELETE(request, { params }) {
    try{
        const deletedPresidente = await prisma.presidente.delete({
        where: { profesor_id: Number(params.id) }
        });
        return NextResponse.json(deletedPresidente);
    }catch(error){
        return NextResponse.json(error.message)
    }   
}
  