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

export const QUERY_STORE = gql`
  {
    store {
      _id
      name
      username
      createdAt
   }
  }
`;    

export const QUERY_USER = gql`
  {
    user{ 
      username
      stores{
        _id
        name
        createdAt
      }
    }
  }
`;

