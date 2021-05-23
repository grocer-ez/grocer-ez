import React from 'react';
import SingleList from '../components/SingleList';
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
              {loggedIn && userData ? (
          <div className="container col-12 col-lg-3 mb-3">
            <br></br>
            <div className="row">
            <SingleList
              stores={userData.me.stores}
            />
            </div>

           <button className="row">Add a Store</button>

          </div>
          
        ) : null}
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <SingleList stores={stores} title="Your Stores:" />
          )}
          
        </div>

        
      </div>
    </main>
  );
};

export default Home;