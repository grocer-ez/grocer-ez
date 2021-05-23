const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  type Store {
    _id: ID
    name: String
    username: String
    createdAt: String
    list: [List]         
  }
  type List{
    _id: ID
    item: String
    quantity: Int
  }
  input ListInput {
    item: String
    quantity: Int
  }
  type Product  {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  } 
  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }
  type User {
    _id: ID
    username: String
    email: String
    createdAt: String
    stores: [Store]
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {    
    user: User    
    stores(username: String): [Store]
    me: User
    store(_id:ID!): Store
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth    
    updateUser(username: String, email: String, password: String): User    
    login(email: String!, password: String!): Auth
    addStore(_id: ID!, name: String!): Store
    updateList(_id: ID!, list:ListInput): Store
    addList(_id: ID!, item:String!, quantity: Int!): Store
    updateStore( _id: ID!, name: String!): Store      
  }
`;

module.exports = typeDefs;