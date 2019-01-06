import * as express from 'express';

const app = express();
const port = process.env.PORT || 8081;

app.get('/', (req, res) => {
    res.json({ 'test': 'true', 'Added Prop': 'I changed!' });
});

app.listen(port, () => {
    console.log(`server started on port ${port}.`);
});