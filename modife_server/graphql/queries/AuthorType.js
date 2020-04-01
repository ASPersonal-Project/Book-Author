const graphQL= require('graphql');
const Book = require('../../models/Book');
const BookType = require('./BookType');

// console.log(PostType);
// console.log(BookType)
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphQL;

const AuthorType = new GraphQLObjectType({
    name:'AuthorType',
    description: "This is present author",
    fields: () => ({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        books:{
            type:new GraphQLList(BookType),
            resolve: async function(parent,args){
                const books = await Book.find({authorId:parent.id});
                return books;
            }
        }
    })
})

module.exports = AuthorType;