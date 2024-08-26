import express from 'express';
import { getUsers, getUser, addUser, editUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

// Display all users
router.get('/', getUsers);

// Display form to add a new user
router.get('/add', (req, res) => {
  res.render('add-user');
});

// Add a new user
router.post('/add', addUser);

// Display form to edit a user
router.get('/edit/:id', getUser);

// Update a user
router.post('/edit/:id', editUser);

// Delete a user
router.get('/delete/:id', deleteUser);

export default router;
