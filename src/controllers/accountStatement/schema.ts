  
// The GraphQL schema in string form
export const typeDef = `
    type Query
    { 
        getBooksList: [Book]
    }
    type Book 
    {
        title: String,
        description: String
    }
    type Mutation 
    {
        addBooks(title: String!, description: String!) : Response
    }
    type Response {
        message: String
    }
`;