import mongoose from 'mongoose'


const TaskSchema = new mongoose.Schema({
    task_title: {
        type: String,
        required: [true, 'Please provide task title']
    },
    description: {
        type: String,
        required: [true, 'Please provide task description']
    },
    start_date: {
        type: Date,
        required: [true, 'Please provide task start date']
    },
    end_date: {
        type: Date,
        required: [true, 'please provide task end date']
    },
    assigned_to: {
        type: Object,
        default: null
    },
    assigned_by: {
        type: Object,
        default: null
    },
    color: {
        type: String,
        default: "#f56954"
    },
    status: {
    type:  String,
    default: "incomplete"
    }
})

export default mongoose.models.Tasks || mongoose.model('Tasks', TaskSchema)