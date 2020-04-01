const graphQL = require('graphql');
const Author = require('../../models/Author');
const Book = require('../../models/Book');



const AuthorType = require('./AuthorType');
const BookType = require('./BookType');
// const PostType = require('./PostType');
// console.log(BookType);
// console.log(AuthorType)

const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID
} = graphQL;

const QueryRootType = new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        authors:{
            type:new GraphQLList(AuthorType),
            resolve: async function(parent,args){
                const authors = await Author.find();
                return authors;
            }
        },
        author:{
            type: AuthorType,
            args:{id:{type:GraphQLID}},
            resolve: async function(parent,args){
                const author = await Author.findById(args.id);
                return author;
            }
        },
        books:{
            type: new GraphQLList(BookType),
            resolve: async function(parent,args){
                const books = await Book.find()
                return books;
            }
        },
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve: async function(parent,args){
                const book = await Book.findById(args.id);
                return book;
            }
        }
    }
})

module.exports = QueryRootType;