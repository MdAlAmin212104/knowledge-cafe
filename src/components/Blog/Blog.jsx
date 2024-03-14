import React from 'react';

const Blog = ({blog}) => {
      console.log(blog);
      const{title, author_img, author_name, cover, posted_date, read_time, hashtags} = blog;
      return (
            <div>
                  <img src={cover} alt={`Cover Picture of the title ${title}`} />
                  <div className='flex justify-between mt-4'>
                        <div className='flex gap-6'>
                              <img className='w-14 rounded-[100%]' src={author_img} alt="" />
                              <div>
                                    <h4>{author_name}</h4>
                                    <p>{posted_date}</p>
                              </div>

                        </div>
                        <div>
                              <span>{read_time} min read</span>

                        </div>
                  </div>
                  <h2>Blog Name :{title}</h2>
                  <p>
                        {
                              hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                        }
                  </p>
            </div>
      );
};

export default Blog;