/*
    remember to add:
    "type": "module",
    in package.json to use ES6 import statements
*/
import express from 'express';
/*
    allows us to take incoming POST request bodies
*/
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

/*
    specifies we are going to use JSON data in our whole application
*/
app.use(bodyParser.json());

app.use('/users', userRoutes);

/*
    listens for incoming requests
*/
app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});

/*
    routes to '/' or home page
*/
app.get('/', (req, res) => {
    res.send("Home Page");
});
