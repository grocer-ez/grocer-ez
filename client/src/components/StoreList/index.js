// import { stripIgnoredCharacters } from 'graphql';
import React from 'react';
import { Link } from 'react-router-dom';

const StoreList = ({ stores }) => {

  if (!stores.length === 0) {
    return <h3>No Stores Yet</h3>;
  }
  return (
    <div className='container center'>
      {stores &&
        stores.map(stores => (
          <div key={stores.list._id} className="card mb-3">
            <h2 className="card-header">
              <Link
              // should the link be to stores.name?
                to={`/singlelist/${stores._id}`}
                style={{ fontWeight: 700}}
              >
                {stores.name}
                
              </Link>{' '}
            </h2>
            <div className="card-body row">

            <div >
              {stores.list ? 
                  //array.map() returns an array of stuff.
                  stores.list.map((element, index)=>{
                    return index % 2 ?
                    <div key={stores.list.item} style={{ backgroundColor: "grey", color: "black"}}>
                      <h3>{element.item}</h3>
                      <p>Quantity: {element.quantity}</p>
                    </div> : 
                    <div key={stores.id} style={{ backgroundColor: "white", color: "black"}}>
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
