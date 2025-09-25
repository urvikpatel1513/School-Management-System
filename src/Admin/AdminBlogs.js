import "../Admin/Style/AdminBlogs.css";
import "../Admin/Style/AdminTable.css";
import { Link } from "react-router-dom";
// import AdminblogData from "./Modules/AdminBlogData";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://schoolproject.osapplications.com/api/all-blog-show"
      );
      setBlogs(response.data[0]);
    } catch (error) {
      alert("Failed to fetch blogs");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(
          `https://schoolproject.osapplications.com/api/blog-delete/${id}`
        );
        alert("Blog deleted successfully");
        fetchBlogs();
      } catch (error) {
        console.error(error);
        alert("Failed to delete blog");
      }
    }
  };

  return (
    <>
      <div className="admin-main-blogs">
        <div className="admin-blogs-header">
          <h2>Blogs</h2>
          <div className="add-blog-btn">
            <button className="add-btn2">
              <Link to="/admin/uploadblogsdata">Add Blogs +</Link>
            </button>
          </div>
        </div>

        <div className="admin-blogs-container">
          <ul className="admin-blogs-list">
            {blogs.map((blog, index) => (
              <li className="admin-blogs-card" key={index}>
                <img
                  src={`https://schoolproject.osapplications.com/images/${blog.profile}`}
                  className="blog-img"
                  alt={`Blog ${index + 1}`}
                />
                <div className="blog-info">
                  <h3 className="admin-blogs-title">{blog.title}</h3>
                  <p className="admin-blogs-description">{blog.description}</p>
                  <div className="blogs-actions">
                    <Link
                      to="/edit-blog"
                      state={{ blog }}
                      className="admin-blogs-link"
                    >
                      Edit
                    </Link>
                    <button
                      className="admin-blogs-delete-btn"
                      onClick={() => handleDelete(blog.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default AdminBlogs;
