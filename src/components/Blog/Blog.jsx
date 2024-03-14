import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleClick, handleMarkAsTime }) => {
      // console.log(blog);
      const{id, title, author_img, author_name, cover, posted_date, read_time, hashtags} = blog;
      return (
            <div className='mb-20'>
                  <img className='w-[845px] h-[450px]' src={cover} alt={`Cover Picture of the title ${title}`} />
                  <div className='flex justify-between mt-4'>
                        <div className='flex gap-6'>
                              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                          <img alt="Tailwind CSS Navbar component" src={author_img} />
                                    </div>
                              </div>
                              <div>
                                    <h4>{author_name}</h4>
                                    <p>{posted_date}</p>
                              </div>

                        </div>
                        <div>
                              <span>{read_time} min read</span>
                              <button onClick={()=>handleClick(blog)} className='mb-4 text-xl text-red-600'><FaBookmark /></button>

                        </div>
                  </div>
                  <h2 className='mb-4'>Blog Name :{title}</h2>
                  <p>
                        {
                              hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                        }
                  </p>
                  <button onClick={()=>handleMarkAsTime(id, read_time)} className='mt-4 text-[#6047EC] font-bold underline'>Mark as read</button>
            </div>
      );
};

export default Blog;