import gql from 'graphql-tag';
import { v1 as neo4j } from 'neo4j-driver';

const typeDefs = gql`
type User {
    name: String
}

extend type Query {
    user: User
}
`;

const resolvers = {
    Query: {
        async user() {
            debugger;
            var graphenedbURL = process.env.GRAPHENEDB_BOLT_URL;
            var graphenedbUser = process.env.GRAPHENEDB_BOLT_USER;
            var graphenedbPass = process.env.GRAPHENEDB_BOLT_PASSWORD;

            var driver = neo4j.driver(graphenedbURL, neo4j.auth.basic(graphenedbUser, graphenedbPass));
            var session = driver.session();
            return await session
                .run('MATCH (user:User) RETURN user.Name');
            // return {
            //     name: 'Pearse'
            // };
        }
    }
};

export { typeDefs as UserType, resolvers as UserResolvers };