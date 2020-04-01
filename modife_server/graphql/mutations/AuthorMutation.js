const graphQL = require('graphql');
const Author = require('../../models/Author');
const AuthorType = require('../queries/AuthorType');

const {GraphQLObjectType,GraphQLNonNull,GraphQLString,GraphQLInt} = graphQL;

const addAuthor = {
    type:AuthorType,
    args:{
        name:{type: new GraphQLNonNull(GraphQLString)},
        age:{type:new GraphQLNonNull(GraphQLInt)}
    },
    resolve: async function(parent,args){
        let author = new Author({
            name:args.name,
            age:args.age
        });
         author = await author.save();
    }
}

module.exports = {addAuthor};



