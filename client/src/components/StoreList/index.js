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
                {/* insert store.list? here to display list item. Could just dispaly items 1-3 to make it mobile friendly? */}
              </p>
              <div>
              {stores.list ? 
                  //array.map() returns an array of stuff.
                  stores.list.map((element, index)=>{
                    return index % 2 ?
                    <div style={{backgroundColor: "grey"}}>
                      <h3>{element.item}</h3>
                      <p>Quantity: {element.quantity}</p>
                    </div> : 
                    <div style={{backgroundColor: "white"}}>
                      <h3>{element.item}</h3>
                      <p>Quantity: {element.quantity}</p>
                    </div>
                  }) 
                : <p>No lists found.</p>}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
};

export default StoreList;
