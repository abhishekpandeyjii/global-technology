import SectionTitle from '../../common/SectionTitle/SectionTitle';
import BlogCard from '../../cards/BlogCard/BlogCard';
import { blogPosts } from '../../../data/siteData';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import './Blog.css';

const Blog = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="blog section" id="blog" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <SectionTitle
            subtitle="Latest News"
            title="Read Our Latest"
            highlight="Blog Posts"
            description="Stay updated with the latest engineering insights, ground improvement techniques, and innovations in geotechnical solutions."
          />
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
