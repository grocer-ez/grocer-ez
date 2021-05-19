import gql from 'graphql-tag';


export const QUERY_ALL_LISTS = gql`
  {
    lists {
      _id
      item
      quantity
      username
      store {
        name
      }
    }
  }
`;



export const QUERY_USER = gql `
  {
    user{ 
      username
      stores{
        _id
        list{
          _id
        }
      }
    }
  }
`;

// export const QUERY_LIST = gql`

// `;

