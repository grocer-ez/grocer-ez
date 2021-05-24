import React from 'react';
import { Link } from 'react-router-dom';

const SingleList = ({ store }) => {
  console.log("SingleStore",store);
  return (
    <div> 
      <h3 className='container position-absolute top-50 start-50 translate-middle'>test</h3> 
      {store && 
      store.map(store => (
        <div key={store._id} className="card mb-3">
          <p className="card-header">
            <Link to={`/list/${store._id}`} 
            style={{fontWeight: 700}} >
              {store.name}
            </Link>
          </p>
          <div className="card-body">
            <h4>Content</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleList;