import gql from 'graphql-tag';
import * as grapheneDao from '../services/grapheneDao';
import { AddArgumentsAsVariables } from 'graphql-tools';

const typeDefs = gql`
type User {
    name: String
}

extend type Query {
    user: [User]
}

extend type Mutation {
    addUser(name: String): String
}
`;

export interface User {
    name: String;
}

const resolvers = {
    Query: {
        async user(): Promise<User[]> {
            return await grapheneDao.GetAllUsers();
        }
    },

    Mutation: {
        async addUser(_: any, args: any): Promise<String> {
            var res = await grapheneDao.AddUser(args.name);
            return JSON.stringify(res);
            // return 'Done.';
        }
    }
};

export { typeDefs as UserType, resolvers as UserResolvers };