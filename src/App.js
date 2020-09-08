import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id === item.id
    })
    if(isAlreadyAdded !== -1){
      toast("Already Added in Cart", {
        type:"error"
      })
    }
    setCartItem([...cartItem],item)
  };

  const buyNow = () => {
    setCartItem([])
    toast("Purchase Complete",{
      type:"success"
    })
  };

  const removeItem = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id)
    )}

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
