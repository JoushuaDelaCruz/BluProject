import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/handler.js';

const PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});