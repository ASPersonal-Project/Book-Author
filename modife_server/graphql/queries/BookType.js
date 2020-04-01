
const graphQL = require('graphql');
const Author = require('../../models/Author');
const AuthorType = require('./AuthorType');
// console.log(AuthorType)

//console.log(PostType);


//console.log(AuthorType);
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLLIst
} = graphQL;

const BookType = new GraphQLObjectType({
    name:'BookType',
    description:'Present Book details',
    fields: () =>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        // author:{
        //     type:AuthorType,
        //     resolve:async function(parent,args){
        //         const author = await Author.findById(parent.authorId);
        //         return author;
        //     }
        // }

    })

})

module.exports = BookType;