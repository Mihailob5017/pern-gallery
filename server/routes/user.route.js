import express from 'express';
// Controllers
import {
	login,
	createAccount,
	getProfile,
	updateProfile,
} from '../controller/user.controller.js';
const router = express.Router();

// Login Route
router.post('/login', login);

// Create account Route
router.post('/signup', createAccount);

// Get profile by id
router.get('/profile/:id', getProfile);

router.put('/profile/update', updateProfile);

export default router;
