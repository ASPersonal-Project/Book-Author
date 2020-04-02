const { GraphQLList } = require("graphql");
const Book = require("../../models/Book");
const { BookType } = require("../types/index.types");

module.exports = {
  type: new GraphQLList(BookType),
  resolve: async function(parent, args) {
    const books = await Book.find();
    console.log(books);
    return books;
  }
};
