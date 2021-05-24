import React from 'react'
import SingleList from '../components/SingleList';
import Auth from '../utils/auth';
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

  const loggedIn = Auth.loggedIn();
  console.log("Name", data);

  return (
    <div>
          {loggedIn && data ? (
             <div className="card mb-3">
                 <SingleList store={storeId} />
               <h1> Display Store Name and list here </h1>
             <div className="card-body">
     
             </div>
           </div>
          ) : null} 
    </div>
  );
};

export default List;