import gql from 'graphql-tag';

export const QUERY_LISTS = gql`
  query getList($category: ID) {
    lists(category: $category) {
      _id
      name
      quantity
      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_LISTS = gql`
  {
    lists {
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
`;

export const QUERY_STORES = gql`
{
  stores {
    _id
    name
  }
}
`;    

export const QUERY_USER = gql `
  {
    user{ 
      username
      stores{
        _id
        lists{
          _id
        }
      }
    }
  }
`;

