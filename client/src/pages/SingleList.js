import React from 'react'
import SingleList from '../components/SingleList';
import Auth from '../utils/auth';
// import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME, QUERY_STORE } from '../utils/queries';

const List = () => {

  const { loading, data } = useQuery(QUERY_ME);
  const { data: userData } = useQuery(QUERY_STORE);
  const store = data?.store || [];
  console.log("Store", store)
  const loggedIn = Auth.loggedIn();
  console.log("Name", userData);
  // const { _id} = useParams();

  return (
    <div>
          {loggedIn && data ? (
             <div className="card mb-3">
                 <SingleList store={store} />
               <h1> Lorem Ipsum </h1>
             <div className="card-body">
     
             </div>
           </div>
          ) : null} 
    </div>
  );
};

export default List;