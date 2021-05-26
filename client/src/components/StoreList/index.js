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
          <div key={stores._id+1} className="card col mb-3">
            <h2 className="card-header">
              <Link
              // should the link be to stores.name?
                to={`/list/${stores._id}`}
                style={{ fontWeight: 700}}
              >
                {stores.name}
                
              </Link>{' '}
            </h2>
            <div className="card-body row">

            <div>
              {stores.list ? 
                  //array.map() returns an array of stuff.
                  stores.list.map((element, index)=>{
                    return index % 2 ?
                    <div key={element._id} style={{ backgroundColor: "grey", color: "black"}}>
                      <h3>{element.item}</h3>
                      <p>Quantity: {element.quantity}</p>
                    </div> : 
                    <div key={element._id} style={{ backgroundColor: "white", color: "black"}}>
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
};

export default StoreList;
