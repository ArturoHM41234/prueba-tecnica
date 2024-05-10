import { Request, Response } from "express";
import pool from '../services/database.ts';

export conts createUser = asyn(req, response) {
const { nombre, ....} = req.body
try {
    const query = 'INSERT INTO USUARIO VALUES ($1)'
    const  = await.pool.query(nombre, query);
} catch {}
}

expr const getMail = async(req, res) {
try {
    const query = 'SELECT correo From USURIOS';
    const resp = await.pool.query(query);
    res.
} catch
}
