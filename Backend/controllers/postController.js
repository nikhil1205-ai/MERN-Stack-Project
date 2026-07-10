import Post from '../models/Post.js';
import User from '../models/User.js';

export const createPost = async (req, res, next) => {
  try {
    const { caption, image } = req.body;

    if (!caption || caption.trim() === '') {
      return res.status(400).json({ message: 'Caption is required' });
    }

    const post = await Post.create({
      userId: req.user._id,
      caption,
      image: image || '',
    });

    res.status(201).json({ post });
  } catch (error) {
    next(error);
  }
};

export const getPosts = async (_req, res, next) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).populate('userId', 'name username profileImage');
    res.json({ posts });
  } catch (error) {
    next(error);
  }
};

export const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate('userId', 'name username profileImage');
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ post });
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'You can only edit your own posts' });
    }

    const { caption, image } = req.body;
    if (caption !== undefined) post.caption = caption;
    if (image !== undefined) post.image = image;

    await post.save();
    res.json({ post });
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'You can only delete your own posts' });
    }

    await post.deleteOne();
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    next(error);
  }
};
