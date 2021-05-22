import React from 'react';
import { Link } from 'react-router-dom';


const StoreList = ({ stores }) => {
  if (!stores.length === 0) {
    return <h3>No Stores Yet</h3>;
  }
  return (
    <div>

      {stores &&
        stores.map(stores => (
          <div className ="container">
            <div className="row">
              <div className="col justify-content-center">
          <div key={stores._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/singlelist/${stores.name}`}
                style={{ fontWeight: 700 }}
                className="text-dark"
              >
                {stores.name}
              </Link>{' '}
            </p>
            <div className="card-body">
              <p>
                {stores._id}
                {/* insert store.list? here to display list item. Could just dispaly items 1-3 to make it mobile friendly? */}
              </p>
            </div>
          </div>
          </div>
           </div>
           </div>
        ))}
    </div>
  );
};

export default StoreList;
