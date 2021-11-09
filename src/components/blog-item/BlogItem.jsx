import { Link } from 'react-router-dom';

function BlogItem() {
  return (
    <article>
      <h3>Title</h3>
      <Link to='/'>Read more</Link>
    </article>
  );
}

export default BlogItem;
