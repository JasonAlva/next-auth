import { NextResponse } from "next/server";
import { prisma } from "../../libs/prismadb";
import bcrypt from "bcrypt";

export async function POST(request) {
  const body = await request.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new NextResponse("Missing Fields", { status: 404 });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (exist) {
    return new NextResponse("User already Exists", { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
