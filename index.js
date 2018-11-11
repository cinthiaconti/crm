import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb');

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => 
  res.send(`Node and express server is running on port${PORT}`)
);

app.listen(PORT, () => 
  console.log(`your server is running on port ${PORT}`)
);
