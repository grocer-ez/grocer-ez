// import { stripIgnoredCharacters } from 'graphql';
// import { fromPromise } from 'apollo-link';
// import ReactDOM from "react-dom";
import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom'

// const AppRouter = () => (
//   <BrowserRouter>
//   <Route path='/singlelist/:parameter/' render={(props) => <List {...props} />} />
//   </BrowserRouter>
// );

const List = ( { store }) => {
  // const { parameter } = props.match.params;

  // console.log(parameter)
  console.log(store)
  return (
    <div className='container position-absolute top-50 start-50 translate-middle'>
  {store.filter(name => name.includes(store)).map(element => (
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
// ReactDOM.render(<AppRouter />, document.getElementById("root"));

export default List;


