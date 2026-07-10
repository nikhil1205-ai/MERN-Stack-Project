import express from 'express';
import { createPost, deletePost, getPostById, getPosts, updatePost } from '../controllers/postController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);

export default router;
