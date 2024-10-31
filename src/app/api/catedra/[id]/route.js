import { NextResponse } from "next/server"
import { prisma } from "@/src/libs/prisma"
export async function GET(request, {params}){
   const catedra= await prisma.catedra.findUnique({where:{
      id_catedra:Number(params.id)
   }})
   return NextResponse.json(catedra)
 }
 
 export async function PUT(request, {params}){
   const data= await request.json()
   const catedraUpdate =await prisma.catedra.update({where: {
      id_catedra: Number(params.id)
   },
   data:data

})
   return NextResponse.json(catedraUpdate)
 }
 
 
 export async function DELETE(request, {params}){
   try{
   const catedraRemoved= await prisma.catedra.delete({where:{
      id_catedra:Number(params.id)
   }})
   return NextResponse.json(catedraRemoved)
}catch(error){
      return NextResponse.json(error.message)
   }
}
 