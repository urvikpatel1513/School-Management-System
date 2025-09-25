import { useState } from "react";
import "../Admin/Style/UploadBlogsData.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UploadBlogsData() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    profile: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("profile", formData.profile);

    try {
      const response = await axios.post(
        "https://schoolproject.osapplications.com/api/blog-store",
        data
      );
      if (response) {
        alert("Blog data uploaded successfully");
        navigate("/admin/blogs");
      } else {
        alert("Failed");
      }
    } catch (error) {
      alert("Failed to upload blog data. Please try again");
      console.error(error);
    }
  };

  return (
    <>
      <section className="upload-blogs-section">
        <div className="upload-blogs-container">
          <h1>Upload Blogs Data</h1>
          <form
            className="upload-blogs-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Blog Description"
              onChange={handleChange}
              required
            />
            <input
              type="file"
              name="profile"
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default UploadBlogsData;
