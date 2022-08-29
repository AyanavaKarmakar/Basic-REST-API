/**
 * remember to add:
 * "type": "module",
 * in package.json to use ES6 import statements
 */
import express from 'express';

/**
 * allows us to take incoming POST request bodies
 */
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();

/**
 * For Cross Origin Resource Sharing
 */
import cors from 'cors';
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

/**
 * specifies we are going to use JSON data in our whole application
 */
app.use(bodyParser.json());

app.use('/users', userRoutes);

/**
 * listens for incoming requests
 */
app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running!');
});

/**
 * routes to '/' or home page
 */
app.get('/', (req, res) => {
    res.send(`
        <center>
            <h1>Home Page</h1>
            <p>Please refer to the below image for reference:</p>
            <img src='https://camo.githubusercontent.com/fc2a56a0c92aed48aef7ffd47b67a55c01914d6ea5ef9ced1abee0588d2c43fa/68747470733a2f2f692e6962622e636f2f374757434362702f53637265656e73686f742d323032302d30372d31322d61742d30382d33302d33322e706e67' alt='api reference'>
            <br><br>
            <p>
                Hosted by <a href='http://www.heroku.com/' target="_blank">Heroku</a>
            </p>
            <p>
                <a href='https://github.com/AyanavaKarmakar/rest-api' target='_blank'>
                    Check out the source code here ↗
                </a>
                <p>
                    <p>
                        Designed and maintained by <mark><u>Ayanava Karmakar</u></mark>
                    </p>
                    <p>
                        <a href='https://www.linkedin.com/in/ayanava-karmakar-b6ba90219/' target='_blank'>
                        Linkedin ↗
                        </a>
                    </p>
                    <p>
                        <a href='https://github.com/AyanavaKarmakar' target='_blank'>
                        Github ↗
                        </a>
                    </p>
                </p>
            </p>
        </center>
    `);
});
