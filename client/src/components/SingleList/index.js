import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";
// import listSchema from "../../../server/models/List";

function ThisList() {
    const { data } = useQuery(QUERY_USER);
    let user;
  
    if (data) {
      user = data.user;
    }
  
    return (
      <>
        <div className="container my-1">
          <Link to="/home">
            ← Back to Lists
            </Link>
  
          {user ? (
            <>
              <h2>{ user.storeSchema.name }</h2>
              {user.storeSchema.map((storeSchema) => (
                <div key={storeSchema.listSchema._id} className="my-2">
                  <h3>{new Date(parseInt(storeSchema.listSchema.createdAt)).toLocaleDateString()}</h3>
                  <div className="flex-row">
                    {storeSchema.listSchema.map(({ item }, index) => (
                      <div key={index} className="card px-1 py-1">
                          <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : null}
  
        </div>
  
      </>)
  
  };


export default ThisList;

// import React from "react";
// import { Link } from "react-router-dom";
// import { pluralize } from "../../utils/helpers"
// import { useStoreContext } from "../../utils/GlobalState";
// import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
// import { idbPromise } from "../../utils/helpers";

// function ProductItem(item) {
//   const [state, dispatch] = useStoreContext();

//   const {
//     image,
//     name,
//     _id,
//     price,
//     quantity
//   } = item;

//   const { cart } = state

//   const addToCart = () => {
//     const itemInCart = cart.find((cartItem) => cartItem._id === _id)
//     if (itemInCart) {
//       dispatch({
//         type: UPDATE_CART_QUANTITY,
//         _id: _id,
//         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
//       });
//       idbPromise('cart', 'put', {
//         ...itemInCart,
//         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
//       });
//     } else {
//       dispatch({
//         type: ADD_TO_CART,
//         product: { ...item, purchaseQuantity: 1 }
//       });
//       idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
//     }
//   }

//   return (
//     <div className="card px-1 py-1">
//       <Link to={`/products/${_id}`}>
//         <img
//           alt={name}
//           src={`/images/${image}`}
//         />
//         <p>{name}</p>
//       </Link>
//       <div>
//         <div>{quantity} {pluralize("item", quantity)} in stock</div>
//         <span>${price}</span>
//       </div>
//       <button onClick={addToCart}>Add to cart</button>
//     </div>
//   );
// }

// export default ProductItem;
