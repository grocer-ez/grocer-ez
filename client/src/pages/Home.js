import React from "react";
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/Store";
// import Cart from "../components/Cart";

const Home = () => {

  //contains all stored lists
  const listArray =[

    {name: "Ralphs", cretedAt:"somedate", lists: ["lettuce", "cabbage"]}

  ]


  return (
    <div className="container">
      {/* <CategoryMenu />
      <ProductList />
      <Cart /> */}
    </div>
  );
};

export default Home;

//code from david

import React from "react";
const Home = () => {
  // useState



  // useEffect grab data, populate your state

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find(product => product._id === id));
    } 
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts
        });
      });
    }
  }, [products, data, loading, dispatch, id]);


  // contains all stored lists.
  const listArray = [
    {id: "something", name: "Ralphs", createdAt:"someDate", lists: ["lettuce", "cabbage"]},
    {id: "something1", name: "Safeway", createdAt:"someDate", lists: ["wine", "cheese"]},
    {id: "something2", name: "Frys", createdAt:"someDate", lists: ["computer parts", "comic books"]}
  ]
  return (
    <div className="container">
      <h1>test</h1>
      {
        listArray.map((element)=>{
          return <>
            <div className="card" style={{width: "18rem", backgroundColor:"lightgreen"}}>
              <img className="card-img-top" src="..." alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{element.name}</h5>
                {/* this link needs to use the store id somehow */}
                <a href="/thislist/0" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </>
        })
      }
    </div>
  );
};
export default Home;