import { NextRequest, NextResponse } from 'next/server';
import dbConnect from "../models/mongodb";
import User from "../models/User";

export async function GET() {
  await dbConnect();

  try {
    const users = await User.find({})
    // const users = await User.findById('66b3cc0ebce294cfd5057eea')
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(req, res) {
  await dbConnect();
  const body = await req.json()
  console.log("REQUEST BODY::::",body)
  try {
    const user = await User.create({...body});
    return NextResponse.json(user, {status: 201});
  } catch (error) {
    console.log("Error Creating User::", error.message )
    return NextResponse.json({ success: false, message: error.message}, {status: 400})
  }
}

export async function PUT(req, res) {
  await dbConnect();

  try {
    const { id, ...updateData } = req.body;
    const user = await User.findByIdAndUpdate(id, updateData, { new: true });

    return NextResponse.json(user, {status: 200});
  } catch (error) {
    return NextResponse.json({success: false}, {status: 400})
  }
}

export async function DELETE(req, res) {
  await dbConnect();

  try {
    const { id } = req.body;
    await User.findByIdAndDelete(id);
   return NextResponse.json({}, {status: 200})
  } catch (error) {
    return NextResponse.json({success: false}, {status: 400})
  }
}
