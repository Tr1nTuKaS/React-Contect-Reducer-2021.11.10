import { useState, useEffect } from 'react';
import BlogItem from '../../components/blog-item/BlogItem';

const blogDataArr = [
  { id: 1, title: 'Best blog', url: '/blog' },
  { id: 2, title: '3000 year', url: '/blog' },
  { id: 3, title: 'Potato chips', url: '/blog' },
];

function BlogsSection() {
  // console.log(JSON.stringify(blogDataArr));
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const resp = await fetch('/db/posts.json');
    const data = await resp.json();
    console.log(data);
    setPosts(data);
  }

  return (
    <section className='container'>
      <h2>Our blogs</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        aspernatur repudiandae nobis earum voluptate id adipisci nostrum
        mollitia, ipsam, asperiores, soluta dolorem facere exercitationem
        laborum. Magni mollitia laudantium vel tempore.
      </p>
      <div>
        {posts.map((postObj) => (
          <BlogItem key={postObj.id} />
        ))}
      </div>
    </section>
  );
}

export default BlogsSection;
