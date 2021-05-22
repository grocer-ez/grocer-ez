import React from 'react';
import StoreList from '../components/StoreList';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_STORES, QUERY_ME } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_STORES);
  const { data: userData } = useQuery(QUERY_ME);
  const stores = data?.stores || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <StoreList stores={stores} title="Your Stores:" />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <br></br>
            <StoreList
              stores={userData.me.stores}
            />
           <button>Add a Store</button>

          </div>
          
        ) : null}
        
      </div>
    </main>
  );
};

export default Home;