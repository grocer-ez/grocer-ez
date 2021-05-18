import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_LIST = gql`
mutation addList($storeId: ID!, $item: String!, $quantity: Int!) {
  addList(storeId: $storeId, item: $item, quantity: $quantity) {
    _id
    name
    username
    lists {
      _id
      item
      quantity
      username
    }
    
  }
}
`
export const ADD_STORE = gql`
mutation addStore($name: String!) {
  addStore(name: $name) {
    _id
    name
    createdAt
    username    
  }
}
`


export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
      name
      description
      price
      quantity
      category {
        name
      } 
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;