import { NextResponse } from "next/server"
import { prisma } from "@/src/libs/prisma"

export async function GET(){
  const presidente= await prisma.presidente.findMany()
  
  return NextResponse.json(presidente)
}

export async function POST(request) {
    const { profesor_id, nombramiento } = await request.json();
  
    const newPresidente = await prisma.presidente.create({
      data: {
        profesor_id: profesor_id,
        nombramiento: nombramiento
      }
    });
  
    return NextResponse.json(newPresidente);
  }
  