/**
 * used for routing
 * ! browsers can make only GET requests
 */
import { Router } from 'express';
import { getUsers, createUser, getUserDetails, deleteUser, updateUser } from '../controllers/users.js';

const router = Router();

/**
 * all routes in here are starting with /users
 */
router.get('/', getUsers);
/**
 * why post?
 * to send data from the frontend to the server
 */
router.post('/', createUser);
/**
 * the '/:' means if we put anything after
 * the colon, the route is going to get hit
 */
router.get('/:id', getUserDetails);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

export default router;