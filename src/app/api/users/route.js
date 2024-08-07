import { NextResponse } from 'next/server';
import dbConnect from "../models/mongodb";
import User from "../models/User";

export async function GET() {
  await dbConnect();

  try {
    const users = await User.find({});
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

// export async function POST(req, res) {
//   await dbConnect();

//   try {
//     const user = await User.create(req.body);
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(400).json({ success: false });
//   }
// }

// export async function PUT(req, res) {
//   await dbConnect();

//   try {
//     const { id, ...updateData } = req.body;
//     const user = await User.findByIdAndUpdate(id, updateData, { new: true });
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(400).json({ success: false });
//   }
// }

// export async function DELETE(req, res) {
//   await dbConnect();

//   try {
//     const { id } = req.body;
//     await User.findByIdAndDelete(id);
//     res.status(200).json({ success: true });
//   } catch (error) {
//     res.status(400).json({ success: false });
//   }
// }
