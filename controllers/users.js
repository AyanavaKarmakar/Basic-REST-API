/**
 * used for creating unique user ids
 * Refer:  https://www.npmjs.com/package/uuid
 */
import { v4 as uuid } from 'uuid';

/**
 * holds user lists
 * may or may not be empty by default
 */
let users = [];

/**
 * fetches users from the database
 */
export const getUsers = (req, res) => {
    try {
        res.send(users);
    } catch (error) {
        res.send('Internal Server Error!');
        console.log(error);
    }
}

/**
 * adds users to the database 
 */
export const createUser = (req, res) => {
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
}

/**
 * /users/2 => req.params
 * the param in this case is id
 * req.params => 
 * {
 *   "id": ":2"
 * }
 */
export const getUserDetails = (req, res) => {
    try {
        const specificUser = users.find((user) => user.id === req.params.id);
        res.send(specificUser);
    } catch (error) {
        console.log(error);
    }
}

/**
 * deletes users
 */
export const deleteUser = (req, res) => {
    try {
        users = users.filter((user) => user.id !== req.params.id);
        res.send(`User with the id: ${req.params.id} has been deleted from the database!`);
    } catch (error) {
        console.log(error);
    }
}

/**
 * updates user details
 */
export const updateUser = (req, res) => {
    try {
        let user = users.find((user) => user.id === req.params.id);

        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.age = req.body.age

        res.send('Database has been updated successfully');
    } catch (error) {
        console.log(error);
    }
}