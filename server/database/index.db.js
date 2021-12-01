import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config('../.env');

const pool = new Pool();

export const query = (text, params) => pool.query(text, params);
