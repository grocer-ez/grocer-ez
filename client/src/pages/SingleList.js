import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_STORE } from '../utils/queries';
import { REMOVE_ITEM } from '../utils/mutations';



const List = props => {

  const [REMOVEITEM, { error }] = useMutation(REMOVE_ITEM, {
    update(cache, { data: { REMOVEITEM } }) {
      // read what's currently in the cache
      const { me } = cache.readQuery({ query: QUERY_STORE });
  
      // prepend the newest thought to the front of the array
      cache.writeQuery({
        query: QUERY_STORE,
        data: { me: [REMOVEITEM, ...me] }
      });
    }
  });

  const { id: storeId } = useParams();
  console.log("StoreId", storeId)
  const { loading, data } = useQuery(QUERY_STORE, {
    variables: { id: storeId }, 
  });
  console.log("StoreData", data)

  function deleteitem(id) {
    console.log(id, "storeID: ", storeId);
    try {
     REMOVEITEM({
        variables: { storeId: storeId, itemId: id }
    });
} catch (e) {
    console.error(e);
  }
    }

  const store = data?.store || {};

  return (
    <div className="container">
        <br></br>
      <div className="card mb-3">
    <p className="card-header">
      <span style={{ fontWeight: 700 }} className="text-light">
        {store.name}
      </span>{' '}
    </p>
    <div className="card-body">
      {store.list ?
        store.list.map((element, index) =>{
          return index % 2 ?
          <div className="col" style={{ backgroundColor: "grey", color: "black"}}>
            <h3>{element.item}</h3>
            <p>Quantity: {element.quantity}</p>
            <button onClick={() => deleteitem(element._id)}>
                    ✗
            </button>

            </div> :
            <div className="col" style={{ backgroundColor: "white", color: "black"}}>
            <h3>{element.item}</h3>
            <p>Quantity: {element.quantity}</p>
            <button onClick={() => deleteitem(element._id)}>
                    ✗
            </button>
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
