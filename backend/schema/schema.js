const graphQl = require('graphql');
const Event = require('../models/Event');

const {
    GraphQLSchema,
    GraphQLString,
    GraphQLObjectType,
    GraphQLID,
    GraphQLFloat,
    GraphQLList
} = graphQl;


const EventType = new GraphQLObjectType({
    name:'Event',
    fields: () => ({
        id:{type:GraphQLID},
        title:{type:GraphQLString},
        description:{type:GraphQLString},
        price:{type:GraphQLFloat}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        events:{
            type: new GraphQLList(EventType),
            resolve:async function(parent,args){
                return await Event.find();
            } 
        }
        
    }
});

const Mutation = new GraphQLObjectType({
    name:'RootMutationType',
    fields:{
        createEvent: {
            type:EventType,
            args:{
                title:{type:GraphQLString},
                description:{type:GraphQLString},
                price:{type:GraphQLFloat}

            },
             resolve:async function(parent,args){
                let event = new Event({
                    title: args.title,
                    description:args.description,
                    price:args.price
                });

                return await event.save();

            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})