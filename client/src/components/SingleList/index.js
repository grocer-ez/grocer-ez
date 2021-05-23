// import { stripIgnoredCharacters } from 'graphql';
import React from 'react';
// import { Link } from 'react-router-dom';

const SingleList = ({ stores }) => {
  return (
    <div className='container position-absolute top-50 start-50 translate-middle'>
      {stores.filter(stores.list => store.includes(${stores._id})).map(filteredStore => (
          <div key={element._id} className="card mb-3">
            <p className="card-header">
                {element.name}
            </p>
            <div className="card-body row">

            <div>
              {element.list ? 
                  //array.map() returns an array of stuff.
                  element.list.map((element, index)=>{
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
            </div>
          </div>
      ))}
    </div>
  );
};

export default SingleList;
