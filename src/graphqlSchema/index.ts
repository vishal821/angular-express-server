const { makeExecutableSchema } = require('graphql-tools');
const { accountStatementTypeDefs, accountStatementResolvers 
} = require('../controllers/accountStatement');

const typeDefs = [
    accountStatementTypeDefs
]
const resolvers = [
    accountStatementResolvers
]
export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
  