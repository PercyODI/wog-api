import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
// import { UserType } from './types/user';
import { makeExecutableSchema } from 'graphql-tools';
import gql from 'graphql-tag';
import { merge } from 'lodash';

import { UserType, UserResolvers } from './types/user';

const typeDefs = gql`
type Query {
    test: String
}

type Mutation {
    test: String
}

schema {
    query: Query,
    mutation: Mutation
}
`;

const resolvers = {
    Query: {
        test() {
            return 'Just a test';
        }
    }
};

const executableSchema = makeExecutableSchema({
    typeDefs: [typeDefs, UserType],
    resolvers: merge(resolvers, UserResolvers)
});

export { executableSchema as Schema };