import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import axios from 'axios';

const AddStore = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);


  const inputSaveHandler = ()=>{
 
    //just need correct url and correct query in the post request
    
  //https://github.com/axios/axios
    axios.post(
      'http://localhost:3001/graphql',
      {
        me:{
        stores:{
          name:"test"
        }}
      }
    ) 
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  const onClose = ()=>{
    props.setModalDisplay(false);
  }

  return (
   <div>
    <Modal show={true}>
    <Modal.Header>Add a New Store</Modal.Header>
    <Modal.Body>
      <input type='text' id='storeName'></input>
    </Modal.Body>
    <Modal.Footer>
     <button onClick={onClose}>Close</button>
    <button onClick={inputSaveHandler}>Save</button> 
    </Modal.Footer>
  </Modal>
  </div>
)
};

export default AddStore