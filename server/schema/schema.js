const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

var books = [
    {name:'Madolduwa',genre:'Fantasy',id:'1',autherId:'1'},
    {name:'Hensare',genre:'Rusia',id:'2',autherId:'2'},
    {name:'Waseelasa',genre:'Japan',id:'3',autherId:'3'},
    {name:'Panpasidura',genre:'Gerro',id:'4',autherId:'2'},
    {name:'Herial',genre:'Bulls',id:'5',autherId:'1'},
    {name:'Harry Poter',genre:'Light',id:'6',autherId:'2'},
];

var authors = [
    {name:'Anjana',age:26,id:'1'},
    {name:'Thumula',age:44,id:'2'},
    {name:'Dasu',age:55,id:'3'}
]

const BookType = new GraphQLObjectType({
    name:'Book',
    fields:() =>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        author:{
            type:AuthorType,
            resolve(parent,args){
                console.log(parent,args);
                return _.find(authors,{id:parent.autherId})
                
            }
        }

    })
});

const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields:() =>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        books:{
            type: new GraphQLList(BookType),
            resolve(parent,args){
                return _.filter(books,{autherId:parent.id})
            }
        }

    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return _.find(books,{id:args.id});
            }
        },
        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return _.find(authors,{id:args.id});
            }
        },
        books:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                return books
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query:RootQuery
})
