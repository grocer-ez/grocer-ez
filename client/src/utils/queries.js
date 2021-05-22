import gql from 'graphql-tag';

export const QUERY_ALL_STORES = gql`
{
  stores {
    _id
    name
    createdAt
    list {
      item
      quantity
    }
  }
}
`;   

export const QUERY_LIST = gql`
{
  list {
    item
    quantity
  }
}
`;

export const QUERY_ME = gql` 
{
  me {
    _id
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

