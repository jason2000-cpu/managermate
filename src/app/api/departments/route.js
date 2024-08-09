import { NextResponse } from 'next/server'
import dbConnect from '../models/mongodb'
import Departments from '../models/Departments'

export async function GET() {
    await dbConnect();

    try {
        const departments = await Departments.find({});
        return NextResponse.json(departments, {status: 200});
    } catch (error) {
        return NextResponse.json({success: false}, {status: 400})
    }
}

export async function POST(req, res) {
    await dbConnect();

    try {
        const department = await Departments.create(req.body);
        res.status(201).json(department)
    } catch (error) {
        res.status(400).json({success: false});
    }
}


export async function PUT(req, res) {
    await dbConnect()

    try {
        const {id, ...updateData} = req.body;

        const department = await Departments.findByIdAndUpdate(id, updateData, {new: true});
        res.status(200).json(department);
    } catch (error) {
        res.status(400).json({success: false})
    }
}


export async function DELETE(req, res) {
    await dbConnect();

    try {
        const { id } = req.body;
        await Departments.findByIdAndDelete(id)
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false })
    }
}