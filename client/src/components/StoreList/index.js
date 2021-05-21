import React from 'react';
import { Link } from 'react-router-dom';

const StoreList = ({ stores }) => {
  if (!stores.length) {
    return <h3>No Stores Yet</h3>;
  }

  return (
    <div>
      <h3>Your Stores here:</h3>
      {stores &&
        stores.map(stores => (
          <div key={stores._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/singlelist/${stores.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {stores.username}
              </Link>{' '}
              thought on {stores.createdAt}
            </p>
            <div className="card-body">
              <p>
                lorem ipsum
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default StoreList;
