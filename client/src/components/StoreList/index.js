// import { stripIgnoredCharacters } from 'graphql';
import React from 'react';
import { Link } from 'react-router-dom';

const StoreList = ({ stores }) => {

  if (!stores.length === 0) {
    return <h3>No Stores Yet</h3>;
  }
  return (
    <div className='container position-absolute top-50 start-50 translate-middle'>
      {stores &&
        stores.map(stores => (
          <div key={stores._id} className="card mb-3">
            <p className="card-header">
              <Link
              // should the link be to stores.name?
                to={`/singlelist/${stores._id}`}
                style={{ fontWeight: 700}}
              >
                {stores.name}
                
              </Link>{' '}
            </p>
            <div className="card-body row">

            <div>
              {stores.list ? 
                  //array.map() returns an array of stuff.
                  stores.list.map((element, index)=>{
                    return index % 2 ?
                    <div style={{ backgroundColor: "grey", color: "black"}}>
                      <h3>{element.item}</h3>
                      <p>Quantity: {element.quantity}</p>
                    </div> : 
                    <div style={{ backgroundColor: "white", color: "black"}}>
                      <h3>{element.item}</h3>
                      <p>Quantity: {element.quantity}</p>
                    </div>
                  }) 
                : <p>No lists found.</p>}
              </div>

                {/* insert store.list? here to display list item. Could just dispaly items 1-3 to make it mobile friendly? */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default StoreList;
