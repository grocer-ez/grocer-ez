import React, { useState } from 'react'
// import SingleList from '../components/SingleList';
// import Auth from '../utils/auth';
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks';
// import { QUERY_STORE } from '../utils/queries';
import { QUERY_STORE } from '../utils/queries'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



const List = props => {

  const [userFormData, setUserFormData] = useState({item: "", quantity: 0})
  const [ list, setList ] = useState([]);
  // const [item, setItem ] = useState("");
  // const [quantity, setQuantity] = useState(0);

  const { id: storeId } = useParams();
  const { loading, data } = useQuery(QUERY_STORE, {
    variables: { id: storeId }, 
  });

  const store = data?.store || {};

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setUserFormData({...userFormData, [name]: value})
  }

  let itemData = {};

  const handleFormSubmit = async (event) => {
    event.preventDefault();
   if (userFormData.item === ""){
     return  
   }
   
  itemData = {
     item: userFormData.item,
     quantity: userFormData.quantity
   }
   setList(list =>[...list, itemData]);
   setUserFormData({item: "", quantity: 0})
  }

  const handleDeleteItem = (event) => {

    event.preventDefault();
    const result = list.filter(({item}) => item !== event.target.name)

    setList(result)

  }

  // const loggedIn = Auth.loggedIn();

  return (
    <div className="container">
        <br></br>
      <div className="card mb-3">
    <p className="card-header">
      <span style={{ fontWeight: 700 }} className="text-light">
        {store.name}
      </span>{' '}
    </p>
    <div className="card-body">

    {list.length > 0 ?
        list.map((element, index) =>{
          return index % 2 ?
          <div style={{ backgroundColor: "grey", color: "black"}}>
              <h3>{`${element.item}`}</h3>
            <p>Quantity: {`${element.quantity}`}</p>
            <button name={element.item} onClick={handleDeleteItem}>Delete Item</button>
            </div> 
            : 
            <div style={{ backgroundColor: "white", color: "black"}}>
            <h3>{`${element.item}`}</h3>
            <p>Quantity: {`${element.quantity}`}</p>
            <button name={element.item} onClick={handleDeleteItem}>Delete Item</button>
          </div>
       
        })
        : <p>No List found</p>
      }
    
      
      <Form onSubmit={handleFormSubmit}>
  <Form.Group controlId="formItem">
    <Form.Label>Item</Form.Label>
    <Form.Control name="item" value={userFormData.item} onChange={handleInputChange} type="type" placeholder="Enter item" />
  </Form.Group>

  <Form.Group controlId="formQuantity">
    <Form.Label>Quantity</Form.Label>
    <Form.Control name="quantity" value={userFormData.quantity} onChange={handleInputChange} type="number" placeholder="0" />
  </Form.Group>
  {/* <Form.Group>
  <Form.Label>Check box if you have a coupon</Form.Label>
    <Form.Check type="checkbox" label="Coupon" />
  </Form.Group> */}
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

    </div>
  </div>
    </div>



  );
  

};

export default List;
