/**
 * used for routing
 * ! browsers can make only GET requests
 */
import { Router } from 'express';

/**
 * used for creating unique user ids
 * Refer:  https://www.npmjs.com/package/uuid
 */
import { v4 as uuid } from 'uuid';

const router = Router();

/**
 * holds user lists
 * may or may not be empty by default
 */
let users = [];

/**
 * all routes in here are starting with /users
 */

/**
 * gets users from the database
 */
router.get('/', (req, res) => {
    try {
        res.send(users);
    } catch (error) {
        res.send('Internal Server Error!');
        console.log(error);
    }
});

/**
 * adds users to the database
 * why post?
 * to send data from the frontend to the server
 */
router.post('/', (req, res) => {
    try {
        /**
         * req.body:
         * grabs the body of the post request
         * ! uuid() generates unique id
         */
        users.push({ ...req.body, id: uuid() });

        res.send(`User with the User Name: ${req.body.firstName + req.body.lastName} has been added to the database!`);

    } catch (error) {
        console.log(error);
        res.send("Internal Server Error");
    }
});

/**
 * Route to show specific user details
 * the '/:' means if we put anything after
 * the colon, the route is going to get hit
 * ! /users/2 => req.params
 * ! the param in this case is id
 * ! req.params => 
 * {
 *  "id": ":2"
 * }
 */
router.get('/:id', (req, res) => {
    const specificUser = users.find((user) => user.id === req.params.id);
    res.send(specificUser);
});

/**
 * route for deleting users
 */
router.delete('/:id', (req, res) => {
    users = users.filter((user) => user.id !== req.params.id);
    res.send(`User with the id: ${req.params.id} has been deleted from the database!`);
});

/**
 * route for updating user data
 */
router.patch('/:id', (req, res) => {
    let user = users.find((user) => user.id === req.params.id);

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.age = req.body.age

    res.send('Database has been updated successfully');
});

export default router;