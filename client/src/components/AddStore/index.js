import React, {useState} from 'react';
import { Modal } from "react-bootstrap";
// import axios from 'axios';

const AddStore = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);


  const inputSaveHandler = ()=>{

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
};

 export default AddStore