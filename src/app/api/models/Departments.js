import mongoose from  'mongoose'


const DepartmentSchema = new mongoose.Schema({
    department_name: {
        type: String,
        required: [true, 'Provide Department Name']
    },
    parent_department: {
        type: String,
        required: [true, 'Provide a Parent Department']
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
    description: {
        type: String,
    },
    date_created: {
        type: Date
    },
    employees: {
        type: Array
    }

})

export default mongoose.models.Departments || mongoose.model('Departments', DepartmentSchema)