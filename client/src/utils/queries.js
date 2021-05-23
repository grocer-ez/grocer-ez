import gql from 'graphql-tag';

export const QUERY_ALL_STORES = gql`
  {
    store {
      _id
      name
      username
      createdAt
      list {
        item
        quantity
      }
    }
  }
`;

export const QUERY_STORES = gql`
query stores($username: String) {
  stores(username: $username) {
      _id
      name
      username
      createdAt
      list {
        item
        quantity
    }
  }
}
`;    

export const QUERY_ME = gql`
{
  me {
    _id
    username
    stores{
      _id
      name
      list{
        _id
        item 
        quantity
      }
    }
  }
}
`;

