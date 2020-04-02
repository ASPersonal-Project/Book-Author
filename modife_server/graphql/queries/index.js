const graphQL = require("graphql");
const Author = require("../../models/Author");
const Book = require("../../models/Book");

// const AuthorType = require("../types/AuthorType");
const { BookType, AuthorsType } = require("../types/index.types");

const { GraphQLObjectType, GraphQLList, GraphQLID } = graphQL;

const authors = require("../queries/authors.query");
const books = require("../queries/books.queries");
const QueryRootType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    authors,
    author: {
      type: AuthorsType,
      args: { id: { type: GraphQLID } },
      resolve: async function(parent, args) {
        const author = await Author.findById(args.id);
        return author;
      }
    },
    books,
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve: async function(parent, args) {
        const book = await Book.findById(args.id);
        return book;
      }
    }
  }
});

module.exports = QueryRootType;
