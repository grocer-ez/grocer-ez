import React from 'react';
import { Link } from 'react-router-dom';

const StoreList = ({ stores }) => {
  // if (!stores.length) {
  //   return <h3>No Stores Yet</h3>;
  // }

  return (
    <div>
      <button>Add a Store</button>
      <h3>Your Stores:</h3>
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

                {/* i feel like these buttons belong on the 
                single list page. it makes it cluttered in mobile.

                 <button>Add to List</button>
                <button>Remove from list</button> */}
                <br></br>
                {stores._id}
                {/* insert store.list? here to display list item. Could just dispaly items 1-3 to make it mobile friendly? */}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default StoreList;
