import React from 'react';
import List from '../components/SingleList';
import Auth from '../utils/auth';
import ReactDOM from "react-dom";
import { useQuery } from '@apollo/react-hooks';
import {  QUERY_STORE } from '../utils/queries';
import { BrowserRouter, Route } from 'react-router-dom'
const AppRouter = () => (
    <BrowserRouter>
    <Route path='/singlelist/:parameter/' render={(props) => <SingleList {...props} />} />
    </BrowserRouter>
  );


const SingleList = ( props ) => {

    const { parameter } = props.match.params;

    console.log(parameter)
    const { loading, data } = useQuery(QUERY_STORE);
    const { data: userData } = useQuery(QUERY_STORE);
    const store = data?.store || [];
    console.log(store)

  const loggedIn = Auth.loggedIn();

  return (
    <main>
              {loggedIn && userData ? (
          <div className="container col-12 col-lg-3 mb-3">
            <br></br>
            <div className="row">
            <List
              store={userData.store}
            />
            </div>

          </div>
          
        ) : null}
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <List store={store} title="Your Store:" />
          )}
          
        </div>

        
      </div>
    </main>
  );
};

ReactDOM.render(<AppRouter />, document.getElementById("root"));
export default SingleList;