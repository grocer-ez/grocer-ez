import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_STORE } from '../utils/queries';
import { REMOVE_ITEM, UPDATE_ITEM } from '../utils/mutations';
import AddListForm from '../components/AddListForm'



const List = props => {

  const [REMOVEITEM] = useMutation(REMOVE_ITEM, {
    update(cache, { data: { REMOVEITEM } }) {
      // read what's currently in the cache
      const { item } = cache.readQuery({ query: QUERY_STORE });
  
      // prepend the newest thought to the front of the array
      cache.writeQuery({
        query: QUERY_STORE,
        data: { item: [REMOVEITEM, ...item] }
      });
    }
  });

  const [UPDATEITEM] = useMutation(UPDATE_ITEM, {
    update(cache, { data: { UPDATEITEM }}) {
      const { item } = cache.readQuery({ query: QUERY_STORE });

      cache.writeQuery({
        query: QUERY_STORE, 
        data: { item: [UPDATEITEM, ...item]}
      });
    }
  });

  const { id: storeId } = useParams();
  const { data } = useQuery(QUERY_STORE, {
    variables: { id: storeId }, 
  });

  function deleteitem(id) {
    try {
     REMOVEITEM({
        variables: { storeId: storeId, itemId: id }
    });
} catch (e) {
    console.error(e);
    console.log(props)
  }
    }

    function updateitem(id) {
      try{
        UPDATEITEM({
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
          <div className="col" key={element._id} style={{ backgroundColor: "grey", color: "black"}}>
            <h3>{element.item}</h3>
            <p>Quantity: {element.quantity}</p>
            <button onClick={() => deleteitem(element._id)}>
                    ✗
            </button> 
            <button onClick={() => updateitem(element._id)}>
                    🖊
            </button>

            </div> :
            <div className="col" key={element._id} style={{ backgroundColor: "white", color: "black"}}>
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
  <div className="card-footer grey">< AddListForm/></div>
    </div>
  );
};

export default List;
