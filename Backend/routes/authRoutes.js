import express from 'express';
import { deleteAccount, getProfile, loginUser, registerUser, updateProfile } from '../controllers/authController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);
router.delete('/delete', protect, deleteAccount);

export default router;
