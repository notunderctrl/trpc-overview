import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/user', (req, res) => {
    res.status(200).json({
        id: 1,
        name: 'John Doe',
    });
});

app.listen(3000, () => console.log(`Listening on port 3000`));
