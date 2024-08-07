import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  Fname: {
    type: String,
    required: [true, 'Please provide first name'],
  },
  SName: {
    type: String,
    required: [true, 'Please provide a Second Name']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  },
  phone: {
    type: Number,
    required: [true , 'Please provide phone number'
    ]
  },
  userType: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password']
  }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
