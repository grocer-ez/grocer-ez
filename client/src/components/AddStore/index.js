import React from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";



const AddStore = () => {
  console.log("test")

  return (
    
    <Modal show={true}>
    <Modal.Header>Hi</Modal.Header>
    <Modal.Body>asdfasdf</Modal.Body>
    <Modal.Footer>This is the footer</Modal.Footer>
  </Modal>


/* <div class="modal" id="myModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add A New Store</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
  <div class="mb-3">
    <label for="storeName" class="form-label">Store Name</label>
    <input type="text" class="form-control"></input>
  </div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */
)
};

// AddStore()

export default AddStore