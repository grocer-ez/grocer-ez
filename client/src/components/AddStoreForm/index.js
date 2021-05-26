import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_STORE } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

function refreshPage() {
  window.location.reload(false);
}

const StoreForm = () => {
  const [name, setName] = useState('');

  const [addStore, { error }] = useMutation(ADD_STORE, {
    update(cache, { data: { addStore } }) {
      // read what's currently in the cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      console.log("Me", me);
  
      // prepend the newest thought to the front of the array
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: [addStore, ...me] }
      });
    }
  });
  console.log("Store", addStore);

  const handleChange = event => {
    // if (event.target.value) {
      setName(event.target.value);
    // }
  }; 

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      await addStore({ 
        variables: { name }
      });
      
      setName('');
      console.log("NewStore", name)
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container">
      <form id="addStoreForm" className="flex-row justify-center" onSubmit={handleFormSubmit}>
        <input placeholder="Store Name Here:" value={name}
         className="form-input col-md-9" onChange={handleChange}></input>
      <button onClick={refreshPage} type="submit">
          Add Store
        </button>
      </form>
      </div>
  );
};

export default StoreForm;