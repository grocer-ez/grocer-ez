import gql from 'graphql-tag';


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

export const QUERY_STORE = gql`
query store($_id: ID!){
  store(_id:$_id){
    _id
    name
    list{
      _id
      item
      quantity
    }
  }
}
`;

