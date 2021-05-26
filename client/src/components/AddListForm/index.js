import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_LIST } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import { useParams } from 'react-router-dom'

const ListForm = props => {
  
  
  const [item, setItem] = useState() 
  const [quantity, setQuantity] = useState() 
  const { id: storeId } = useParams();

//   const { loading, data } = useQuery(QUERY_ME, {
//     variables: { id: storeId }, 
//   });

  const [addList] = useMutation(ADD_LIST, {
    update(cache, { data: { addList } }) {
      // read what's currently in the cache
      const { store } = cache.readQuery({ query: QUERY_ME });
  
      // prepend the newest thought to the front of the array
      cache.writeQuery({
        query: QUERY_ME,
        data: { store: [addList, ...store] }
      });
    }
  });

  const handleChange = event => {  
    
    // if (event.target.value) {
      setItem(event.target.value);
    
//   }; 
};
  const handleQuantityChange = event => {  
    
    // if (event.target.value) {
      setQuantity(event.target.value);
    
//   }; 
};
  const handleFormSubmit = async event => {
    event.preventDefault();


    try {
      await addList({
         
        variables: { id: storeId, item: item, quantity: parseInt(quantity)}
      });

      
      setItem('');
      setQuantity('');
     
      
    } catch (e) {

      console.error(e);
    }
  };
  return (
    <div>
      <form className="flex-row justify-center justify-space-between-md align-stretch" onSubmit={handleFormSubmit}>
        <input placeholder="item:" value={item || ''} type="undifined"
          className="form-input col-12 col-md-9" onChange={handleChange}></input>
        <input placeholder="quantity:" value={quantity || ''} type='number' min="1"
          className="form-input col-12 col-md-9" onChange={handleQuantityChange}></input>
          <button className="col-12 col-md-3" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
};
export default ListForm;