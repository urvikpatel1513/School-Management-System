import "./Style/Blogs.css";
import { Link } from "react-router-dom";
import Hero from "../Layout/Hero";
import { useEffect, useState } from "react";
import axios from "axios";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios
      .get("https://schoolproject.osapplications.com/api/all-blog-show")
      .then((response) => {
        setBlogs(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to fetch blogs");
      });
  };

  return (
    <>
      <Hero
        content="Some Learning News of SMP Negeri 1 Cibadak"
        heading="Blogs"
      />
      <section className="blogs">
        <h2>Blogs</h2>
        <div className="blog-grid">
          {blogs.slice(0, 3).map((blog, index) => (
            <article className="blog-item" key={index}>
              <img
                src={`https://schoolproject.osapplications.com/images/${blog.profile}`}
                alt={`Blog-image ${index + 1}`}
              />
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <Link>Read More...</Link>
            </article>
          ))}
        </div>
      </section>

      {blogs
        .filter((_, index) => index === 3)
        .map((blog, index) => (
          <section className="featured" key={index}>
            <img
              src={`https://schoolproject.osapplications.com/images/${blog.profile}`}
              alt={`Blog-image ${index + 1}`}
            />
            <div className="featured-content">
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <Link>Read More...</Link>
            </div>
          </section>
        ))}

      <section className="blogs">
        <div className="blog-grid">
          {blogs
            .filter((_, index) => index <= 2 || index === 6)
            .map((blog, index) => (
              <article className="blog-item" key={index}>
                <img
                  src={`https://schoolproject.osapplications.com/images/${blog.profile}`}
                  alt={`Blog-image ${index + 1}`}
                />
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <Link>Read More...</Link>
              </article>
            ))}
        </div>
      </section>

      <section className="recent-posts">
        <h2>Recent Post</h2>
        <div className="tags">
          <Link>Study at home</Link>
          <Link>
            One Day of Studying Outside in SMPN 1 Cibadak classNameroom
          </Link>
          <Link>Teaching and learning activities at home</Link>
          <Link>Home Learning Activities 2020</Link>
        </div>
      </section>
    </>
  );
}

export default Blogs;
