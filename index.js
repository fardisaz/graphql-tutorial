const {ApolloServer}=require("apollo-server")
const {typeDefs}=require("./schema/type-defs")
const {resolvers}=require("./schema/resolvers")
const server=new ApolloServer({typeDefs,resolvers})
// typeDefs: everything like every queries, every types that you are defing in graphql exist in it
// resolvers: all the functions that resolves those types & make calls to APIs & make calls to dbs , sending data back is in this
server.listen().then(({url})=>{
    console.log("YOUR API IS RUNNING AT: "+url);
})