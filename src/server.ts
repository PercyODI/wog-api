import * as express from 'express';
import * as sslify from 'express-sslify';

const app = express();
const port = process.env.PORT || 8081;
const environment = process.env.NODE_ENV || 'development';

// Enforce SSL connections if Prod
if (environment === 'production') {
    app.use(sslify.HTTPS({ trustProtoHeader: true }));
}

app.get('/', (req, res) => {
    res.json({ 'test': 'true', 'Added Prop': 'I changed!' });
});

app.listen(port, () => {
    console.log(`server started on port ${port}.`);
});