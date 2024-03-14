import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
      // const [readTime, setReadTime] = bookmarks
      // const newReadTime = [...bookmarks, ]
      // const { read_time } = bookmarks

      return (
            <div className='md:w-1/3 bg-gray-300 p-4 rounded-2xl'>
                  <h1 className='bg-[#6047EC] rounded-xl p-4 text-white text-2xl'>Spent time on read : {readingTime} min</h1>
                  <h2 className='text-3xl mt-4'>Bookmarked Blogs :{bookmarks.length}</h2>
                  {
                        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark = {bookmark}/>)
                  }
            </div>
      );
};

export default Bookmarks;