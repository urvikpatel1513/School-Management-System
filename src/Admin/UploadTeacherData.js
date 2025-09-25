import { useState } from "react";
import "../Admin/Style/UploadTeacherData.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UploadTeacherData() {
  const [formData, setFormData] = useState({
    name: "",
    Phone: "",
    address: "",
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
    data.append("name", formData.name);
    data.append("Phone", formData.Phone);
    data.append("address", formData.address);
    data.append("profile", formData.profile);

    try {
      const response = await axios.post(
        "https://schoolproject.osapplications.com/api/teacher-store",
        data
      );
      if (response) {
        alert("Teacher data uploaded successfully");
        navigate("/admin/teacher");
      } else {
        alert("Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to upload teacher data. Please try again");
    }
  };

  return (
    <>
      <section className="upload-teachers-section">
        <div className="upload-teachers-container">
          <h1>Upload Teacher Data</h1>
          <form
            className="upload-teachers-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              onChange={handleChange}
              required
            />

            <label>Phone No:</label>
            <input
              type="number"
              name="Phone"
              placeholder="Enter your Number"
              onChange={handleChange}
              required
            />

            <label>Address:</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your Address"
              onChange={handleChange}
              required
            />

            <label>Profile:</label>
            <input type="file" name="profile" onChange={handleChange} />

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default UploadTeacherData;
