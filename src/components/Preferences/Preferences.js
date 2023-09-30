import React from 'react';
import './Preferences.css';

export default function Preferences() {
  return(
    <main>
        <section class="product">
            <img src="product1.jpg" alt="Product 1"/>
            <h2>Product 1</h2>
            <p>Description of Product 1.</p>
            <p>Price: $19.99</p>
            <button>Add to Cart</button>
        </section>

        <section class="product">
            <img src="product2.jpg" alt="Product 2"/>
            <h2>Product 2</h2>
            <p>Description of Product 2.</p>
            <p>Price: $24.99</p>
            <button>Add to Cart</button>
        </section>
        <section class="product">
            <img src="product1.jpg" alt="Product 1"/>
            <h2>Product 3</h2>
            <p>Description of Product 1.</p>
            <p>Price: $19.99</p>
            <button>Add to Cart</button>
        </section>

        <section class="product">
            <img src="product2.jpg" alt="Product 2"/>
            <h2>Product 4</h2>
            <p>Description of Product 2.</p>
            <p>Price: $24.99</p>
            <button>Add to Cart</button>
        </section>
    </main>
  );
}