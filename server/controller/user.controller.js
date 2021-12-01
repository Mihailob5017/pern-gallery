import { query } from '../database/index.db.js';

// Login function
export const login = async (req, res) => {};

// Create account function
export const createAccount = async (req, res) => {
	const { username, password, email, location, image_url, age } = req.body;

	try {
		// Add user to db and return him
		const result = await query(
			`
            INSERT INTO users(username,age,location,email,password,image_url)
            VALUES ($1,$2,$3,$4,$5,$6)
            RETURNING *;
            `,
			[username, age, location, email, password, image_url]
		);
		res.status(200).json({ status: 'success', data: result.rows });
	} catch (error) {
		console.log(error.message);
		res.status(error.statusCode).json({
			clientMessage: 'Error creating account',
			status: error.statusCode,
			message: error.message,
		});
	}
};

// Get user profile function
export const getProfile = async (req, res) => {};

// Update user profile function
export const updateProfile = async (req, res) => {};
