import React from 'react'
// import SingleList from '../components/SingleList';
// import Auth from '../utils/auth';
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks';
// import { QUERY_STORE } from '../utils/queries';
import { QUERY_STORE } from '../utils/queries'

const List = props => {
  // console.log("Props",props)

  const { id: storeId } = useParams();
  console.log("StoreId", storeId)
  const { loading, data } = useQuery(QUERY_STORE, {
    variables: { id: storeId }, 
  });
  console.log("StoreData", data)

  const store = data?.store || {};
  console.log("Store", store);

  // const loggedIn = Auth.loggedIn();
  console.log("Name", data);

  return (
    <div>
      <div className="card mb-3">
    <p className="card-header">
      <span style={{ fontWeight: 700 }} className="text-light">
        {store.name}
      </span>{' '}
      {/* thought on {thought.createdAt} */}
    </p>
    <div className="card-body">
      {store.list ?
        store.list.map((element, index) =>{
          return index % 2 ?
          <div style={{ backgroundColor: "grey", color: "black"}}>
            <h3>{element.item}</h3>
            <p>Quantity: {element.quantity}</p>
            </div> :
            <div style={{ backgroundColor: "white", color: "black"}}>
            <h3>{element.item}</h3>
            <p>Quantity: {element.quantity}</p>
          </div>
        })
        : <p>No List found</p>
      }
    </div>
  </div>
    </div>
  );
};

export default List;
