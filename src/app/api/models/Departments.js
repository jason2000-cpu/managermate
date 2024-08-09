import mongoose from  'mongoose'


const DepartmentSchema = new mongoose.Schema({
    department_name: {
        type: String,
        required: [true, 'Provide Department Name']
    },
    department_code: {
        type: String,
        required: [true, 'Provide Department Code']
    },
    hod_name: {
        type: String
    },
    contact_email: {
        type: String,
        required: [true, 'Provide Department Email']
    },
    date_created: {
        type: Date
    }

})

export default mongoose.models.User || mongoose.model('Departments', DepartmentSchema)