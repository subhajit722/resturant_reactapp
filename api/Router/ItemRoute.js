import express from 'express';
import { postItem, getItemById, getItems, deleteItem, updateItem } from '../Contex/ItemContex.js';

const router = express.Router();

// POST request to create a new item
router.post('/', postItem);

// GET request to retrieve all items
router.get('/', getItems);

// GET request to retrieve a specific item by ID
router.get('/:itemid', getItemById);

// DELETE request to delete an item by ID
router.delete('/:itemid', deleteItem);

// PUT request to update an item by ID
router.put('/:itemid', updateItem);

export default router;
