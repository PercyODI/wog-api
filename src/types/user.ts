import gql from 'graphql-tag';

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
        user() {
            return {
                name: 'Pearse'
            };
        }
    }
};
export { typeDefs as UserType, resolvers as UserResolvers };