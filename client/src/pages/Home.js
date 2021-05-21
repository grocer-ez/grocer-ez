import React from "react";
import AllStores from "../components/AllStores";
// import CategoryMenu from "../components/Store";
// import Cart from "../components/Cart";

const Home = () => {

  return (
    <div className="container">
      {
        <AllStores />
      }
    </div>
  );
};

export default Home;