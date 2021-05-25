import gql from 'graphql-tag';

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


export const ADD_STORE = gql`
mutation addStore($name: String!) {
  addStore(name: $name) {
    _id
    name
    createdAt
    username
  }
}
`;

export const UPDATE_STORE = gql `
mutation updateStore($_id: ID!, $name: String!) {
  updateStore(_id: $_id, name: $name) {
    _id
    name
  }
}
`;



export const ADD_LIST = gql`
mutation addList($_id: ID!, $item: String!, $quantity: Int!) {
  addList(_id: $_id, item: $item, quantity: $quantity) {
    _id
    name
    list {
      _id
      item
      quantity
    }
  }
}
`;

export const REMOVE_ITEM = gql`
mutation removeItem($storeId: ID!, $itemId: ID!) {
  removeItem(storeId:$storeId, itemId:$itemId) {
    _id
    name
    list {
      _id
      item
      quantity
    }
  }
}
`;

export const CLEAR_LIST = gql`
mutation clearList($storeId: ID!) {
  clearList(storeId: $storeId) {
    _id
    name
    list {
      _id
      item
      quantity
    }
  }
}
`;