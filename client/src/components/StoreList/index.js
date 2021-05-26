import React from 'react';
import { Link } from 'react-router-dom';

const StoreList = ({ stores }) => {
  console.log("Stores",stores);
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
                to={`/list/${stores._id}`}
                style={{ fontWeight: 700}}
              >
                {stores.name}
                
              </Link>{' '}
            </h2>
            <div className="card-body row">

            <div >
              {stores.list ? 
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
            </div>
          </div>
        ))}
    </div>
  );
};

export default StoreList;
