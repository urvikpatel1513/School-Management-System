import assets from "../assets/assets";
import "../Admin/Style/AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [galleryCount, setGalleryCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [blogsCount, setBlogsCount] = useState(0);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    fetchGalleryCount();
    fetchTeacherCount();
    fetchBlogsCount();
  }, []);

  const fetchGalleryCount = async () => {
    try {
      const response = await axios.get(
        "https://schoolproject.osapplications.com/api/all-gallery-show"
      );
      setGalleryCount(response.data[0].length);
    } catch (error) {
      console.error("Failed to fetch teacher count:", error);
      alert("Failed to fetch Gallery count");
    }
  };

  const fetchTeacherCount = async () => {
    try {
      const response = await axios.get(
        "https://schoolproject.osapplications.com/api/all-teacher-show"
      );
      setTeacherCount(response.data[0].length);
    } catch (error) {
      console.error("Failed to fetch teacher count:", error);
      alert("Failed to fetch teacher count");
    }
  };

  const fetchBlogsCount = async () => {
    try {
      const response = await axios.get(
        "https://schoolproject.osapplications.com/api/all-blog-show"
      );
      setBlogsCount(response.data[0].length);
    } catch (error) {
      console.error("Failed to fetch teacher count:", error);
      alert("Failed to fetch Blogs count");
    }
  };

  return (
    <>
      <main className="admin-dashboard">
        <div className="dashboard-container">
          <h2>School Management Dashboard</h2>
          <img src={assets.adminImg} alt="admin" className="welcome-img" />
          <p className="welcome-text">Welcome to your Dashboard, Urvik</p>
          <div className="dashboard-stats">
            <div
              className="dashboard-card"
              onClick={() => handleClick("/admin/gallery")}
            >
              <div className="card-value">{galleryCount}</div>
              <div className="card-label">Gallery</div>
            </div>
            <div
              className="dashboard-card"
              onClick={() => handleClick("/admin/teacher")}
            >
              <div className="card-value"> {teacherCount} </div>
              <div className="card-label">Teacher</div>
            </div>
            <div
              className="dashboard-card"
              onClick={() => handleClick("/admin/blogs")}
            >
              <div className="card-value">{blogsCount}</div>
              <div className="card-label">Blogs</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminDashboard;
