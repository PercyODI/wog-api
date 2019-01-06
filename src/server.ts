import * as express from 'express';
import * as sslify from 'express-sslify';
import * as graphqlHttp from 'express-graphql';
import {Schema} from './schema';

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

app.use('/gql', graphqlHttp({
    schema: Schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`server started on port ${port}.`);
});