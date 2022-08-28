/*
    used for routing
    ! browsers can make only GET requests
*/

import { Router } from 'express';

const router = Router();
const users = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 25
    },
    {
        "firstName": "Jane",
        "lastName": "Dell",
        "age": 26
    }
]

/*
    all routes in here are starting with /users
*/

/*
    ! gets users from the database
*/
router.get('/', (req, res) => {
    try {
        res.send(users);
    } catch (error) {
        res.send('Internal Server Error!');
        console.log(error);
    }
});

/*  
    ! adds users to the database
    why post?
    to send data from the frontend to the server
*/
router.post('/', (req, res) => {
    try {
        /*  
            req.body:
            grabs the body of the POST request
        */
        users.push(req.body);

        res.send(`User with the User Name: ${req.body.firstName + req.body.lastName} & Age: ${req.body.age} has been added to the database!`);

    } catch (error) {
        console.log(error);
        res.send("Internal Server Error");
    }
});

export default router;