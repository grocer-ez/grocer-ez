import React from 'react';
import StoreList from '../components/StoreList';
import AddStoreForm from '../components/AddStoreForm';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_STORE);
  const { data: userData } = useQuery(QUERY_ME);
  // const stores = data?.stores || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
              {loggedIn && userData ? (
          <div className="container">
            <br></br>
            <div className="row">
            <StoreList
              stores={userData.me.stores}
            />
            </div>

           {/* <button className="row">Add a Store</button> */}

          </div>
          
        ) : null}

        <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <AddStoreForm />
          </div>
        )}
        </div>

    </main>
  );
};

export default Home;