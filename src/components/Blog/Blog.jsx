import React from 'react';

const Blog = ({blog}) => {
      console.log(blog);
      const{title, author_img, author_name, cover, posted_date, read_time} = blog;
      return (
            <div>
                  <h2>Blog Name :{title}</h2>
            </div>
      );
};

export default Blog;