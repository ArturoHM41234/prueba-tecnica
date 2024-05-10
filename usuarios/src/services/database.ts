import { pool } from 'pg';
import dbConfig from './db_properties.json';

const { Pool } = pg;

const pool = new Pool({
  host: dbConfig.host,
  user: dbConfig.user,
  database: dbConfig.database
  password: dbConfig.password,
  port: 5432
})

