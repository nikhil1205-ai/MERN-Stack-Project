import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    caption: { type: String, required: true, trim: true, maxlength: 500 },
    image: { type: String, default: '' },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);
export default Post;
