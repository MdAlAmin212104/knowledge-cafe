import React, { useEffect, useState } from 'react';
import Blog from '../../Blog/Blog';

const Cart = () => {
      const [cart, setCart] = useState([])
      useEffect(() =>{
            fetch('../../../../public/blogs.json')
            .then(res => res.json())
            .then(data => setCart(data))
      }, []);
      return (
            <div className='md:w-2/3'>
                  <h1>blos in this cart {cart.length}</h1>
                  {
                        cart.map(blog => <Blog 
                              key={blog.id} 
                              blog = {blog}
                        />)
                  }
                  
            </div>
      );
};

export default Cart;