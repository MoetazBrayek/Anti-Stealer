// create a simple express server with a single route
import express from 'express';
import { Request, Response } from 'express';
import connectDB from './db.js';
import routes from './routes.js';
import { checkPassword } from './middleware.js';
const app = express();
//accept json
app.use(express.json());


// connect to cloud.mongodb db
connectDB();

app.get('/', (req: Request, res: Response) => {
    res.send('Mister Spy With love !☕');
    }
);

// add routes
// before allow access to the api ask for a password

app.use(checkPassword);
app.use('/api', routes);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);


