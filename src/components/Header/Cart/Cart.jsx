import React, { useEffect, useState } from 'react';

const Cart = () => {
      const [cart, setCart] = useState([])
      useEffect(() =>{
            fetch('../../../../public/blogs.json')
            .then(res => res.json())
            .then(data => setCart(data))
      }, []);
      return (
            <div>
                  <h1>blos in this cart {cart.length}</h1>
                  
            </div>
      );
};

export default Cart;