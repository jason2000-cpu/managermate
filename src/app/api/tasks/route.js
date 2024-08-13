import { NextRequest, NextResponse, URLPattern } from 'next/server'
import { ObjectId } from 'mongodb'
import dbConnect from '../models/mongodb'
import Tasks from '../models/Tasks'


export async function GET(req) {
    await dbConnect()

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id')
    if (id) {
        console.log("ID TO GET:::", id)
        try{
            const task = await Task.find(new ObjectId(id));

            return NextResponse.json(task, {success: 200})
        } catch (err){
            console.log("Error While getting task ", id ,err.message)
            return NextResponse.json({success: false}, {status: 400})
        }

    }
    try {
        const tasks = await Tasks.find({})

        return NextResponse.json(tasks, {status: 200})
    } catch (err) {
        return NextResponse.json({success: false}, {status: 400})
    }
}


export async function POST(req, res){
    await dbConnect()
    const body = await req.json();
    console.log("TASK POST REQUEST BODY:::", body)
    try {
        const task = await Tasks.create({...body})

        return NextResponse.json(task, {status: 201})
    } catch (err) {
        console.log("Error While creating task", err)
        return NextResponse.json({success: false}, {status: 400})
    }
}

export async function DELETE(req, res) {
    await dbConnect()
    
    try {
        body = await req.json()
        console.log("TASK DELETE REQUEST BODY:::", body)
        const task = await Tasks.findByIdAndDelete(body)
        return NextResponse.json({}, {status: 200})
    } catch (err) {
        console.log("ERROR WHILE DELETING TASK:::", err)
        return NextResponse.json({success: false}, {status: 400})
    }
}

export  async function PUT(req, res) {
    await dbConnect()
    const body = await req.json()
    console.log("TASK PUT REQUEST BODY:::", body)
   
    try {
        const tasks = await Tasks.find({})

        return NextResponse(tasks, {status: 200})
    } catch (err) {
        return NextResponse({success: false}, {status: 400})
    }
}