const graphQL= require('graphql');
const BookType = require('../queries/BookType');
const Book = require('../../models/Book');

const {GraphQLString,GraphQLNonNull,GraphQLID} = graphQL;

const addBook = {
    type:BookType,
    args:{
        name:{type:new GraphQLNonNull(GraphQLString) },
        genre:{type:new GraphQLNonNull(GraphQLString)},
        authorId:{type:new GraphQLNonNull(GraphQLID)}
    },
    resolve: async function(parent,args){
        let book = new Book({
            name:args.name,
            genre:args.genre,
            authorId:args.authorId
        });
        book = await book.save();
        return book;
    }
}

module.exports = {addBook};