const { typeDef } = require('./schema');
const userDataSchema = require("../../mongoSchema/user");

export const accountStatementTypeDefs = typeDef;
export const accountStatementResolvers = {
    Query: 
    { 
        getBooksList:async (_, args, context) => {
          let { db } = context;
          let res = await userDataSchema.find({}, { title: 1, description: 1 });
          return res;
        }
    },
    Mutation: 
    { 
      addBooks:async (_, args, context) => {
        const instance = new userDataSchema({title: args.title, description: args.description});
          await instance.save();
          return {message: "Success"};
        }
    },
};