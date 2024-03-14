import React, { useEffect, useState } from 'react';
import Blog from '../../Blog/Blog';

const Cart = ({ handleClick, handleMarkAsTime }) => {
      const [cart, setCart] = useState([])
      useEffect(() =>{
            fetch('../../../../public/blogs.json')
            .then(res => res.json())
            .then(data => setCart(data))
      }, []);
      return (
            <div className='md:w-2/3'>
                  {
                        cart.map(blog => <Blog 
                              key={blog.id} 
                              blog = {blog}
                              handleClick={handleClick}
                              handleMarkAsTime ={handleMarkAsTime}
                        />)
                  }
                  
            </div>
      );
};

export default Cart;