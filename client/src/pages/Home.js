import React, { useState } from 'react';
import StoreList from '../components/StoreList';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_STORE, QUERY_ME } from '../utils/queries';
import { ADD_STORE } from '../utils/mutations';
import { Modal } from "react-bootstrap";

const Home = () => {
  
  // const storeForm =({storeId}) => {
  //   const [storeName, setName] = useState('');
  //   const [ADD_STORE] = useMutation(ADD_STORE); }  

  const [show, setShow] = useState(false);  

  const { loading, data } = useQuery(QUERY_STORE);
  const { data: userData } = useQuery(QUERY_ME);
  const stores = data?.stores || [];
  console.log("store", stores)
  const loggedIn = Auth.loggedIn();  

 


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // update state based on form input changes
//   const handleChange = event => {    
//     setName(event.target.value);   
// };

// const handleFormSubmit = async event => {
//   event.preventDefault();

//   try {
//     await ADD_STORE({
//       variables: { name: name }
//     });

//     // clear form value
//     setBody('');
//     setCharacterCount(0);
//   } catch (e) {
//     console.error(e);
//   }
// };


  return (
    <main>
              {loggedIn && userData ? (
          <div className="container">
            <br></br>
            <div className="row">
            <StoreList
              stores={userData.me.stores}
            />
            </div>
            <button type="button" class="btn btn-primary"  data-toggle="modal" data-target="#myModal" onClick={handleShow}>Add a Store</button>

          </div>
          
        ) : null}

      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <StoreList stores={stores} title="Your Stores:" />
          )}          
        </div>
      </div>            

 <div>
    
    <Modal show={show} onHide={handleClose} animation={false}>
    <Modal.Header>
      <Modal.Title>Add Store</Modal.Title>
    </Modal.Header>
    <Modal.Body>      
      <input type='text' id='storeName' placeholder="Enter Store Name"></input>
    </Modal.Body>
    <Modal.Footer>
    <button variant="secondary" onClick={handleClose}>Close</button>
    <button variant="primary"onClick={handleClose}>Save</button> 
    </Modal.Footer>
  </Modal>
  </div>
       
    </main>
  );
};



export default Home;