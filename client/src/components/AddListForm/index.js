import React, { useState } from 'react';

import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_LIST } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import { useParams } from 'react-router-dom'

const ListForm = props => {
  
  
  const [item, setItem] = useState() 
  const [quantity, setQuantity] = useState() 
  const { id: storeId } = useParams();
  console.log(storeId)

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { id: storeId }, 
  });
  console.log("StoreData", data)

  const [addList, { error }] = useMutation(ADD_LIST, {
    update(cache, { data: { addList } }) {
      // read what's currently in the cache
      const { store } = cache.readQuery({ query: QUERY_ME });
      console.log("LIST ME", store);
  
      // prepend the newest thought to the front of the array
      cache.writeQuery({
        query: QUERY_ME,
        data: { store: [addList, ...store] }
      });
    }
  });
  console.log("LIST", addList);

  const handleChange = event => {  
    
    if (event.target.value) {
      setItem(event.target.value);
    
  }; 
};
  const handleQuantityChange = event => {  
    
    if (event.target.value) {
      setQuantity(event.target.value);
    
  }; 
};


  const handleFormSubmit = async event => {
    event.preventDefault();
    console.log("NewStore", item, quantity)
  

    try {
      await addList({
         
        variables: { id: storeId, item: item, quantity: parseInt(quantity)}
      });
      console.log("after", item, quantity)
      
      setItem('');
      setQuantity('');
     
      
    } catch (e) {
      console.log("catch", item, quantity)
      console.error(e);
    }
  };

  return (
    <div>
      <p className="m-0">
      
      </p>
      <form className="flex-row justify-center justify-space-between-md align-stretch" onSubmit={handleFormSubmit}>
        <input placeholder="item:" value={item}
          className="form-input col-12 col-md-9" onChange={handleChange}></input>
        <input placeholder="quantity:" value={quantity} type='number'
          className="form-input col-12 col-md-9" onChange={handleQuantityChange}></input>
          <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ListForm;