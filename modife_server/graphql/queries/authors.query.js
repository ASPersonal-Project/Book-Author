const { GraphQLList } = require("graphql");
const Author = require("../../models/Author");
const { AuthorsType } = require("../types/index.types");

module.exports = {
  type: new GraphQLList(AuthorsType),
  resolve: async function(parent, args) {
    const authors = await Author.find();
    return authors;
  }
};
