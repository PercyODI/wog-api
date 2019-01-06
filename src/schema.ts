import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            test: {
                type: GraphQLString,
                resolve() {
                    return 'this is a test';
                }
            }
        }
    })
});

export {schema as Schema};