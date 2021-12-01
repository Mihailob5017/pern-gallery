import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
// Routes
import userRoute from './routes/user.route.js';
import commentRoute from './routes/comment.route.js';
import postRoute from './routes/post.route.js';

const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.listen(PORT, () => {
	console.log('listening on port ' + PORT);
});

app.use('/user', userRoute);
app.use('/comment', commentRoute);
app.use('/post', postRoute);
