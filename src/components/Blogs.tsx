"use client";

import React, { useState, useEffect } from 'react';
import './Blogs.css';

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const blogsPerPage = 3;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://navneettoptech.com/wp-json/wp/v2/posts?categories=48&_embed');
        const data = await res.json();

        // Map the data to the format we want
        const formattedBlogs = data.map((post: any) => ({
          date: new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
          readTime: '5 mins read', // Static because readTime isn't provided by WP API
          title: post.title.rendered,
          description: post.excerpt.rendered.replace(/<[^>]+>/g, ''), // Remove HTML tags
          imageUrl: post._embedded['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/800x400',
        }));

        setBlogs(formattedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIdx = currentPage * blogsPerPage;
  const currentBlogs = blogs.slice(startIdx, startIdx + blogsPerPage);

  const SkeletonCard = () => (
    <div className="blog-card skeleton-card">
      <div className="skeleton skeleton-image"></div>
      <div className="blog-meta">
        <div className="skeleton skeleton-text" style={{ width: '120px' }}></div>
        <div className="skeleton skeleton-text" style={{ width: '80px' }}></div>
      </div>
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-desc"></div>
      <div className="skeleton skeleton-desc"></div>
      <div className="skeleton skeleton-button"></div>
    </div>
  );

  return (
    <section className="blogs-section" id="blogs">
      <h2>Blogs</h2>
      <p className="blogs-description">
        Explore Our Latest Articles on Upskilling Educators and Teacher Training
      </p>

      <div className="blogs-grid">
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          currentBlogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.imageUrl} alt="Blog" className="blog-image" />
            <div className="blog-meta">
              <span>{blog.date}</span>
              <span>{blog.readTime}</span>
            </div>
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-desc">{blog.description}</p>
            
            <a
  href="https://navneettoptech.com/blog?e-filter-4ee62cb-category=nitya"
  target="_blank"
  rel="noopener noreferrer"
  className="read-more-button"
>
  Read More
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
    <path d="M6.66693 4.6346C9.88862 8.54806 15.7738 7.07477 15.7738 7.07477M15.7738 7.07477C15.7738 7.07477 11.5553 11.4348 13.3336 16.1816M15.7738 7.07477L4.25844 13.7963" stroke="#062C5B" strokeLinejoin="bevel"/>
  </svg>
</a>

          </div>
          ))
        )}
      </div>

      {!loading && totalPages > 1 && (
        <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`page-number ${currentPage === i ? 'active' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i + 1}
          </button>
        ))}
        </div>
      )}
    </section>
  );
};

export default Blogs;
