import React from 'react';
import { Link } from 'react-router-dom';



const StoreList = ({ stores }) => {
if (!stores.length === 0) {
    console.log(stores)
    return <h3>No Stores Yet</h3>;
  } else {
  return (
    <div>
      {stores &&
        stores.map(stores => (
          <div key={stores._id} className="card mb-3">
            <p className="card-header">
              <Link
              // should the link be to stores.name?
                to={`/singlelist/${stores.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {stores.username}
              </Link>{' '}
               {stores.name}
            </p>
            <div className="card-body">
              <p>
                {stores._id}
                {/* <StoreList stores={store.list} title="Your Stores here:" /> */}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
};

export default StoreList;
