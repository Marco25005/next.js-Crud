import { NextResponse } from "next/server";
import { prisma } from "@/src/libs/prisma";
export async function GET(){
   const catedra= await prisma.catedra.findMany()
 
    return NextResponse.json(catedra)
}
export async function POST(request){
    const {nombre_catedra, adscrita_a, fecha_fundada, cantidad_profesores, cantidad_estudiantes   }=await request.json()
  
    const newCatedra=await prisma.catedra.create({data:{
            nombre_catedra: nombre_catedra,
            adscrita_a: adscrita_a,
            fecha_fundada: fecha_fundada,
            cantidad_profesores: cantidad_profesores,
            cantidad_estudiantes: cantidad_estudiantes
        }   
    })
    return NextResponse.json(newCatedra)
}
