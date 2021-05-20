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
  type Product {
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
  type Checkout {
    session: ID
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    stores(username: String): [Store]
    me: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(username: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    addStore(name: String!): Store
    addList(storeId: ID!, item: String!, quantity: Int!): Store
  }
`;

module.exports = typeDefs;