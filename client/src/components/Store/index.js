import React, { useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_STORE } from "../../utils/actions";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ALL_STORES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function Store() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_ALL_STORES);

  useEffect(() => {
    if(data) {
      dispatch({
           type: UPDATE_STORE,
          stores: data.stores
        });
        data.products.forEach((store) => {
          idbPromise('stores', 'put', store);
        });
    } else if (!loading) {
      idbPromise('stores', 'get').then((stores) => {
        dispatch({
          type: UPDATE_STORE,
         stores: stores
       });
      });
    }
  }, [data, loading, dispatch]);

  function filterStores() {
    if (!currentCategory) {
      return state.stores;
    }

    return state.store.filter(store => store.category._id === currentCategory);
  }

  return (
    <div className="my-2" >
      <h2>Your Stores:</h2>
      {state.stores.length ? (
        <div className="flex-row">
            {filterStores().map(store => (
                <Store
                  key= {store._id}
                  _id={store._id}
                  name={store.name}
                />
            ))}
        </div>
      ) : (
        <h3>You haven't added any stores yet!</h3>
      )}
    </div>
  );
}

export default Store;
