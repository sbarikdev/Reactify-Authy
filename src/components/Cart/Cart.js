import axios from 'axios';
import { API_URL } from '../../constant';
import React, { useState, useEffect } from 'react';
import './Cart.js'
import { axiosInstance } from '../../constant';
import { useNavigate } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { removeFromCart } from '../Cart/Redux/cartActions';




const Cart = ({ cartItems }) => {
  const naviage = useNavigate();
  // Define a state variable to store the cart items
  const [cart, setCart] = useState([]);
  console.log('cartItems--->', cartItems)
  // const cartLength = cartItems.length;
  // const cartItems = useSelector((state) => state.cart.cartItems);

  // // Function to add a product to the cart


  // const removeFromCart = (id) => {
  //   const confirmed = window.confirm('Are you sure you want to delete this item?');

  //   if (confirmed){
  //     axiosInstance.delete(`${API_URL}cart?id=${id}`).then(res => {
  //         console.log(res)
  //           // const del = category.filter(category => id !== category.id)
  //           // setCategory(del);
  //           // props.showAlert("Cart item deleted Successfully" , "success");
  //           window.location.reload();
            
  //       }).catch((err) => {
  //           console.log(err);
  //           // props.showAlert("Something Went Wrong" , "failure");
  //       });
  //       }
  //   };

  // useEffect(() => {
  //   axiosInstance.get('/cart')
  //   .then((res)=>{
  //       console.log(res)
  //       setCart(res.data.data)
  //   }
  //   )
  // }, []);

    // const Cart = ({ cartItems }) => {
    //   return (
    //     <div>
    //       <h2>Shopping Cart</h2>
    //       <ul>
    //         {cartItems.map((item, index) => (
    //           <li key={index}>{item.name}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   );
    // };


  // Function to calculate the total price of items in the cart
  // const calculateTotal = () => {
  //   return cart.reduce((total, product) => total + product.price, 0);
  // };

  // const total = calculateTotal();
  // alert(total);

  return (
    <main>
            <br></br>
            {/* <h1>Shopping Cart:</h1> */}
            <br></br><br></br>
    <div>

        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
        <div class="container">
        <table id="cart" class="table table-hover table-condensed">
            <thead>
            <tr>
                <th style={{width:'50%'}}>Product</th>
                <th style={{width:'10%%'}}>Price</th>
                <th style={{width:'8%'}}>Quantity</th>
                <th style={{width:'22%'}} class="text-center">Subtotal</th>
                <th style={{width:'10%'}}></th>
            </tr>
            </thead>
            <tbody>
            
            {
              cartItems.map((item, index) => (
                <tr>
                  <td data-th="Product">
                    <div class="row">
                      <div class="col-sm-2 hidden-xs"><img src={item.product_image} alt="..." class="img-responsive" /></div>
                      <div class="col-sm-10">
                        <h4 class="nomargin">
                          {item.product_name}
                        </h4>
                      </div>
                    </div>
                  </td>
                  <td data-th="Price">${item.product_price}</td>
                  <td data-th="Quantity">
                    <input type="number" class="form-control text-center" value={item.quantity} />
                  </td>
                  <td data-th="Subtotal" class="text-center">${item.product_price * item.quantity}</td>
                  <td class="actions" data-th="">
                    {/* <button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button> */}
                    <button onClick={()=>removeFromCart(item.id)} class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>
                  </td>
                </tr>
              ))
            }

            
            </tbody>
            <tfoot>
            <tr>
                <td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>
                <td colspan="2" class="hidden-xs"></td>
                <td class="hidden-xs text-center"><strong>Total</strong></td>
                <td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
            </tr>
            </tfoot>
        </table>
        </div>
    </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(Cart);