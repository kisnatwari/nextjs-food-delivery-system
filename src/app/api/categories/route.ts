import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export const GET = async (req: NextRequest, res: NextResponse) => {
    try{
        const categories = await prisma.category.findMany();
        return new NextResponse(JSON.stringify(categories), {status: 200});
    }catch(err){
        console.log(err);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }), {status:500});
    }
}