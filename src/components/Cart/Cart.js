import React, { useState } from 'react';
import './Cart.js'

function Cart() {
  // Define a state variable to store the cart items
  const [cart, setCart] = useState([]);

  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 5.99 },
  ];

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <main>
            <br></br>
            {/* <h1>Shopping Cart:</h1> */}
            <br></br><br></br>
    <div>
      {/* <h1>Shopping Cart</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <p>{product.name} - ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p> */}

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
            <tr>
                <td data-th="Product">
                <div class="row">
                    <div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." class="img-responsive" /></div>
                    <div class="col-sm-10">
                    <h4 class="nomargin">Product 1</h4>
                    </div>
                </div>
                </td>
                <td data-th="Price">$5.11</td>
                <td data-th="Quantity">
                <input type="number" class="form-control text-center" value="1"/>
                </td>
                <td data-th="Subtotal" class="text-center">$5.11</td>
                <td class="actions" data-th="">
                {/* <button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button> */}
                <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>
                </td>
            </tr>
            <tr>
                <td data-th="Product">
                <div class="row">
                    <div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." class="img-responsive" /></div>
                    <div class="col-sm-10">
                    <h4 class="nomargin">Product 1</h4>
                    </div>
                </div>
                </td>
                <td data-th="Price">$5.11</td>
                <td data-th="Quantity">
                <input type="number" class="form-control text-center" value="1"/>
                </td>
                <td data-th="Subtotal" class="text-center">$5.11</td>
                <td class="actions" data-th="">
                {/* <button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button> */}
                <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>
                </td>
            </tr>
            
            </tbody>
            <tfoot>
            <tr>
                <td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>
                <td colspan="2" class="hidden-xs"></td>
                <td class="hidden-xs text-center"><strong>Total $ 5.11</strong></td>
                <td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
            </tr>
            </tfoot>
        </table>
        </div>
    </div>
    </main>
  );
}

export default Cart;