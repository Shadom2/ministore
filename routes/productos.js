import express from 'express';
import { getProductos } from '../backend/controller/productosController';

const router = express.Router();
router.get('/', getProductos);

export default router