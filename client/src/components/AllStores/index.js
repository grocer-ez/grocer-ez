import React from "react";
const Home = () => {
  // useState
  // useEffect grab data, populate your state
  // contains all stored lists.
  const listArray = [
    {id: "something", name: "Ralphs", createdAt:"someDate", lists: ["lettuce", "cabbage"]},
    {id: "something1", name: "Safeway", createdAt:"someDate", lists: ["wine", "cheese"]},
    {id: "something2", name: "Frys", createdAt:"someDate", lists: ["computer parts", "comic books"]}
  ]
  return (
    
    <div className="container">
      {
        listArray.map((element)=>{
          return <>
<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  </div>
  </>
        })
      };
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

// // import React, { useEffect } from 'react';
// // import { useQuery } from '@apollo/react-hooks';
// // import { useStoreContext } from '../../utils/GlobalState';
// // import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
// // import { QUERY_CATEGORIES } from '../../utils/queries';
// // import { idbPromise } from '../../utils/helpers';

// // function CategoryMenu() {
// //   const [state, dispatch] = useStoreContext();

// //   const { categories } = state;

// //   const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

// //   useEffect(() => {
// //     if (categoryData) {
// //       dispatch({
// //         type: UPDATE_CATEGORIES,
// //         categories: categoryData.categories
// //       });
// //       categoryData.categories.forEach(category => {
// //         idbPromise('categories', 'put', category);
// //       });
// //     } else if (!loading) {
// //       idbPromise('categories', 'get').then(categories => {
// //         dispatch({
// //           type: UPDATE_CATEGORIES,
// //           categories: categories
// //         });
// //       });
// //     }
// //   }, [categoryData, loading, dispatch]);

// //   const handleClick = id => {
// //     dispatch({
// //       type: UPDATE_CURRENT_CATEGORY,
// //       currentCategory: id
// //     });
// //   };

// //   return (
// //     <div>
// //       <h2>Choose a Category:</h2>
// //       {categories.map(item => (
// //         <button
// //           key={item._id}
// //           onClick={() => {
// //             handleClick(item._id);
// //           }}
// //         >
// //           {item.name}
// //         </button>
// //       ))}
// //     </div>
// //   );
// // }

// // export default CategoryMenu;


// import React from "react";
// const Home = () => {
//   // useState



//   // useEffect grab data, populate your state

//   useEffect(() => {
//     // already in global store
//     if (products.length) {
//       setCurrentProduct(products.find(product => product._id === id));
//     } 
//     // retrieved from server
//     else if (data) {
//       dispatch({
//         type: UPDATE_PRODUCTS,
//         products: data.products
//       });

//       data.products.forEach((product) => {
//         idbPromise('products', 'put', product);
//       });
//     }
//     // get cache from idb
//     else if (!loading) {
//       idbPromise('products', 'get').then((indexedProducts) => {
//         dispatch({
//           type: UPDATE_PRODUCTS,
//           products: indexedProducts
//         });
//       });
//     }
//   }, [products, data, loading, dispatch, id]);


//   // contains all stored lists.
//   const listArray = [
//     {id: "something", name: "Ralphs", createdAt:"someDate", lists: ["lettuce", "cabbage"]},
//     {id: "something1", name: "Safeway", createdAt:"someDate", lists: ["wine", "cheese"]},
//     {id: "something2", name: "Frys", createdAt:"someDate", lists: ["computer parts", "comic books"]}
//   ]
//   return (
//     <div className="container">
//       <h1>test</h1>
//       {
//         listArray.map((element)=>{
//           return <>
//             <div className="card" style={{width: "18rem", backgroundColor:"lightgreen"}}>
//               <img className="card-img-top" src="..." alt="Card image cap"/>
//               <div className="card-body">
//                 <h5 className="card-title">{element.name}</h5>
//                 {/* this link needs to use the store id somehow */}
//                 <a href="/thislist/0" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </>
//         })
//       }
//     </div>
//   );
// };
// export default Home;