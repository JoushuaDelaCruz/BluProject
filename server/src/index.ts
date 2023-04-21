import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/handler.js';

const PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

app.get("/api", (req, res) => {
    res.send({ message: "Hello World" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});