import gql from 'graphql-tag';


export const QUERY_STORE_LIST = gql`
  {
    stores {
      _id
      name
      createdAt
      list {
        _id
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



