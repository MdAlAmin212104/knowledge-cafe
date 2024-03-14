import React from 'react';

const Bookmark = ({ bookmark }) => {
      const {title} = bookmark;
      return (
            <div className='bg-slate-600 p-4 m-4 rounded-3xl '>
                  <h3 className='text-white text-xl'>{title}</h3>
                  
            </div>
      );
};

export default Bookmark;