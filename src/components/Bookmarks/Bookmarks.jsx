import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
      return (
            <div className='md:w-1/3 bg-gray-300 p-4 rounded-2xl'>
                  <h2 className='text-3xl'>Bookmarked Blogs :{bookmarks.length}</h2>
                  {
                        bookmarks.map((bookmark) => <Bookmark bookmark = {bookmark}/>)
                  }
            </div>
      );
};

export default Bookmarks;