import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card fade-in">
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} />
        <span className="blog-card-category">{post.category}</span>
      </div>
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span><FaCalendarAlt /> {post.date}</span>
          <span><FaUser /> {post.author}</span>
        </div>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <a href="#" className="blog-card-link">
          Read More <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
