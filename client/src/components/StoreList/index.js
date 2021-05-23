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
<div>
  {
    stores.list ? stores.list.map((element, index)=>{
      return index % 2 ?
      <div>
      <h3>{element.item}</h3>
      <p>Quantity: {element.quantity}</p>
      </div> :
      <div>
         <h3>{element.item}</h3>
      <p>Quantity: {element.quantity}</p>
        </div>
    })
    : <p>Please add items</p>
  }
  </div>
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
