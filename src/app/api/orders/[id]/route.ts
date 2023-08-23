import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    try {
        const { status } = await req.json();
        const order = await prisma.order.update({
            where: {
                id: id,
            },
            data: {
                status: status,
            },
        });
        return new NextResponse(
            JSON.stringify(order),
            { status: 200 }
        );
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong" }),
            { status: 500 }
        );
    }
}