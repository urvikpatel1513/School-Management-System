import "./Style/Home.css";
import Hero from "../Layout/Hero";
import { principal } from "../Frontend/Modules/HomeData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ScrollTop from "./ScrollTop";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [facultys, setFacultys] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchBlog();
    fetchFaculty();
    fetchImages();
  }, []);

  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        "https://schoolproject.osapplications.com/api/all-blog-show"
      );
      setBlogs(response.data[0]);
    } catch (error) {
      console.error(error);
      alert("Failed");
    }
  };

  const fetchFaculty = async () => {
    try {
      const response = await axios.get(
        "https://schoolproject.osapplications.com/api/all-teacher-show"
      );
      setFacultys(response.data[0]);
    } catch (error) {
      console.error(error);
      alert("Failed");
    }
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://schoolproject.osapplications.com/api/all-gallery-show"
      );
      setImages(response.data[0]);
    } catch (error) {
      console.error(error);
      alert("Failed");
    }
  };

  return (
    <>
      <ScrollTop>
        <Hero
          heading="MOTTO"
          content="SMP N 1 Cibadak (Ethical Smart) Cheerful, Empathetic, Rational, Peaceful, Active, Patient, Clean, Beautiful, Sincere, Faithful, Consistent, Trustworthy."
          isButton={true}
          isHome="hero-home"
        />
        {principal.map((heroImage, index) => (
          <section className="home-featured" key={index}>
            <img src={heroImage.image} alt="School Headmaster" />
            <div className="home-featured-content">
              <h2>{heroImage.title}</h2>
              <p>{heroImage.desc}</p>
              <Link to={heroImage.link} className="btn1">
                Further more
              </Link>
            </div>
          </section>
        ))}

        <div className="container1">
          <section className="blogs-sec">
            <h2 className="blog-heading">Blogs</h2>
            <div className="blogs-grid">
              {blogs.slice(0, 3).map((blog, index) => (
                <div className="blogs-item" key={index}>
                  <img
                    src={`https://schoolproject.osapplications.com/images/${blog.profile}`}
                    alt={`Blog ${index + 1}`}
                  />
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                </div>
              ))}
            </div>
            <div className="home-blogs-btn">
              <button>
                <Link to="/blogs">Further more...</Link>
              </button>
            </div>
          </section>
        </div>

        <div className="faculty">
          <h2>Our Best Faculty</h2>
          <div className="faculty1">
            {facultys.slice(0, 8).map((faculty, index) => (
              <div className="faculty2" key={index}>
                <div className="faculty3">
                  <img
                    src={`https://schoolproject.osapplications.com/images/${faculty.profile}`}
                    alt={`Faculty ${index + 1}`}
                  />
                </div>
                <h3>{faculty.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="home-main-gallery">
          <div className="home-gallery">
            <h2>Gallery</h2>
            <div className="home-gallery-img">
              {images.slice(0, 6).map((image, index) => (
                <img
                  src={`https://schoolproject.osapplications.com/images/${image.profile}`}
                  key={index}
                  alt={`Gallery-image ${index + 1}`}
                />
              ))}
            </div>
            <div className="home-gallery-btn">
              <button>
                <Link to="/gallery">Further more...</Link>
              </button>
            </div>
          </div>
        </div>
      </ScrollTop>
    </>
  );
}

export default Home;
