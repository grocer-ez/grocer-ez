<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Link, useParams} from 'react-router-dom';
import { idbPromise } from '../../utils/helpers'
import {  UPDATE_STORE } from "../../utils/actions";
import { QUERY_ME } from "../../utils/queries";
import { useQuery } from '@apollo/react-hooks';
import { useStoreContext } from "../../utils/GlobalState";

const StoreList = ({ stores }) => {

  const [state, dispatch] = useStoreContext();  
  

  const { loading, data } = useQuery(QUERY_ME);
  console.log("test", data)
  
  useEffect(() => {
   if(data) {      
      dispatch({
           type: UPDATE_STORE,
            stores: data.me
        });
        console.log('dispatch',data.me)
        data.me.stores.forEach((stores) => {
          console.log('Store', stores)
          idbPromise('stores', 'put', stores);
        });
    } else if (!loading) {
      console.log('loading', stores)
      idbPromise('stores', 'get').then((stores) => {
        dispatch({
          type: UPDATE_STORE,
         stores: data
       });
      });
    }
  }, [data, loading, dispatch]);




=======
import React from 'react';
import { Link } from 'react-router-dom';

const StoreList = ({ stores }) => {
  console.log("Stores",stores);
>>>>>>> 97faf4e411e2f51ee166de8c86d8666e915f552b
  if (!stores.length === 0) {
    return <h3>No Stores Yet</h3>;
  }
  return (
    <div className='container center'>
      {stores &&
        stores.map(stores => (
          <div key={stores.list._id} className="card mb-3">
            <h2 className="card-header">
              <Link
              // should the link be to stores.name?
                to={`/list/${stores._id}`}
                style={{ fontWeight: 700}}
              >
                {stores.name}
                
              </Link>{' '}
            </h2>
            <div className="card-body row">

            <div >
              {stores.list ? 
                  //array.map() returns an array of stuff.
                  stores.list.map((element, index)=>{
                    return index % 2 ?
                    <div key={stores.list.item} style={{ backgroundColor: "grey", color: "black"}}>
                      <h3>{element.item}</h3>
                      <p>Quantity: {element.quantity}</p>
                    </div> : 
                    <div key={stores.id} style={{ backgroundColor: "white", color: "black"}}>
                      <h3>{element.item}</h3>
                      <p>Quantity: {element.quantity}</p>
                    </div>
                  }) 
                : <p>No lists found.</p>}
              </div>

                {/* insert store.list? here to display list item. Could just dispaly items 1-3 to make it mobile friendly? */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default StoreList;
