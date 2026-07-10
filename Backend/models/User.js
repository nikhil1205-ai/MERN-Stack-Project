import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    username: { type: String, required: true, unique: true, trim: true, lowercase: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true, minlength: 8 },
    bio: { type: String, default: '' },
    profileImage: { type: String, default: '' },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
