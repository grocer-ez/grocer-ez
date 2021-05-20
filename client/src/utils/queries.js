import gql from 'graphql-tag';

export const QUERY_ALL_STORES = gql`
  {
    stores {
      _id
      name
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
   }
  }
`;    

export const QUERY_USER = gql`
  {
    user{ 
      username
      stores{
        _id
      }
    }
  }
`;

