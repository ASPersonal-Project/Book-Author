const graphQL = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphQL;
// const AuthorsType = require("./AuthorType");
const Author = require("../../models/Author");
const Book = require("../../models/Book");

//console.log(PostType);

const AuthorsType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: GraphQLList(BookType),
      async resolve(parent, args) {
        return Book.find({ authorId: parent.id });
      }
    }
  })
});

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorsType,
      async resolve(parent, args) {
        //   return _.find(authors, { id: parent.author });
        return await Author.findById(parent.authorId);
      }
    }
  })
});

module.exports = { BookType, AuthorsType };
