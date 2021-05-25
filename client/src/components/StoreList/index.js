import React from 'react';
import { Link } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";


const StoreList = ({ stores }) => {

  const addItem = () => {

    const inputSaveHandler = ()=>{
      const val = document.getElementById("itemName").value;
      
      // $.post("server.js",{name: val},(res)=>{
      //   alert(res);
      // });
      
    };

    // const onClose = ()=>{
    //   setModalDisplay(false);
    // }

    return (
      <div>
       <Modal show={true}>
       <Modal.Header>Add an item</Modal.Header>
       <Modal.Body>
         <input type='text' id='itemName'></input>
       </Modal.Body>
       <Modal.Footer>
        {/* <button onClick={onClose}>Close</button> */}
       <button onClick={inputSaveHandler}>Save</button> 
       </Modal.Footer>
     </Modal>
     </div>
   )
  }

  const deleteItem = (idxStore, idx) => {
    alert(stores[idxStore].list[idx].item);

    // $.post("server.js",{name: val},(res)=>{
    //   alert(res);
    // });

  }

  const deleteList = (_id) => {
    alert(_id)

    // $.post("server.js",{name: val},(res)=>{
    //   alert(res);
    // });
  }


  if (!stores.length === 0) {
    return <h3>No Stores Yet</h3>;
  }
  return (
    <div>

    {stores &&
      stores.map((stores, idxStore) => (
        <div className ="container">
          <div className="row">
            <div className="col justify-content-center">
        <div key={stores._id} className="card mb-3">
          <p className="card-header">
            <Link
              to={`/singlelist/${stores.name}`}
              style={{ fontWeight: 700 }}
              className="text-dark"
            >
              {stores.name}
            </Link>{' '}
          </p>
          <div className="card-body">
<div>
  {
    stores.list ? stores.list.map((element, index)=>{
      return index % 2 ?
      <div style={{ backgroundColor: "grey", color: "black"}}>
      <h3>{element.item}</h3>
      <p>Quantity: {element.quantity}</p>
      <button type="button" class="btn btn-primary" onClick={addItem}>Add Item</button>
      <button type="button" class="btn btn-primary"onClick={deleteItem}>Delete Item</button>
      <button type="button" class="btn btn-primary"onClick={() => deleteList(stores._id)}>Delete List</button>
      </div> :
      <div style={{ backgroundColor: "white", color: "black"}}>
         <h3>{element.item}</h3>
      <p>Quantity: {element.quantity}</p>
      <button type="button" class="btn btn-primary" onClick={addItem}>Add Item</button>
      <button type="button" class="btn btn-primary"onClick={()=>deleteItem(idxStore, index)}>Delete Item!</button>
      <button type="button" class="btn btn-primary"onClick={() => deleteList(stores._id)}>Delete List</button>

        </div>
    })
    : <p>Please add items</p>
  }
  </div>
              </div>
          </div>
          </div>
           </div>
           </div>
        ))}
    </div>
  );
};

export default StoreList;
