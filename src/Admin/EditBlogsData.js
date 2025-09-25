import React, { useEffect, useState } from "react";
import "./Style/EditBlogsData.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function EditBlogsData() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    profile: null,
  });

  const [existingProfile, setExistingProfile] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;

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
    data.append("id", formData.id);
    data.append("title", formData.title);
    data.append("description", formData.description);
    if (formData.profile) {
      data.append("profile", formData.profile);
    } else {
      data.append("oldProfile", existingProfile);
    }

    try {
      await axios.post(
        "https://schoolproject.osapplications.com/api/updateblog-data",
        data
      );
      alert("Blog data updated successfully");
      navigate("/admin/blogs");
    } catch (error) {
      console.error(error);
      alert("Failed to update blog data");
    }
  };

  useEffect(() => {
    if (blog) {
      setFormData({
        id: blog.id,
        title: blog.title,
        description: blog.description,
        profile: null,
      });
      setExistingProfile(blog.profile);
    } else {
      alert("No blog data found to edit");
      navigate("/admin/blogs");
    }
  }, [blog, navigate]);

  return (
    <>
      <section className="edit-blogs-section">
        <div className="edit-blogs-container">
          <h2>Edit Blogs Data</h2>
          <form
            className="edit-blogs-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <input type="hidden" name="oldProfile" value={existingProfile} />

            <label>Profile:</label>
            {existingProfile && (
              <img
                src={`https://schoolproject.osapplications.com/images/${existingProfile}`}
                alt="Current Profile"
                className="edit-blogs-img"
                required
              />
            )}
            <input type="file" name="profile" onChange={handleChange} />

            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter Blog Title"
              required
            />

            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              placeholder="Enter Blog Description"
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default EditBlogsData;
