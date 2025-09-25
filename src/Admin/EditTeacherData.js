import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Style/EditTeacherData.css";

function EditTeacherData() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    Phone: "",
    address: "",
    profile: null,
  });

  const [existingProfile, setExistingProfile] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const teacher = location.state?.teacher;

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
    data.append("name", formData.name);
    data.append("Phone", formData.Phone);
    data.append("address", formData.address);
    if (formData.profile) {
      data.append("profile", formData.profile);
    }

    try {
      await axios.post(
        "https://schoolproject.osapplications.com/api/updateteacher",
        data
      );
      alert("Teacher data update successfully");
      navigate("/admin/teacher");
    } catch (error) {
      console.error(error);
      alert("Failed to update teacher data");
    }
  };

  useEffect(() => {
    if (teacher) {
      setFormData({
        id: teacher.id,
        name: teacher.name,
        Phone: teacher.Phone,
        address: teacher.address,
        profile: null,
      });
      setExistingProfile(teacher.profile);
    } else {
      alert("No teacher data found. Redirecting...");
      navigate("/admin/teacher");
    }
  }, [teacher, navigate]);

  return (
    <>
      <section className="edit-teachers-section">
        <div className="edit-teachers-container">
          <h1>Edit Teacher Data</h1>
          <form
            className="edit-teachers-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <input type="hidden" value={formData} />

            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your Name"
              onChange={handleChange}
              required
            />

            <label>Phone No:</label>
            <input
              type="number"
              name="Phone"
              value={formData.Phone}
              placeholder="Enter your Number"
              onChange={handleChange}
              required
            />

            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              placeholder="Enter your Address"
              onChange={handleChange}
              required
            />

            <label>Profile:</label>
            {existingProfile && (
              <img
                src={`https://schoolproject.osapplications.com/images/${existingProfile}`}
                alt="Current Profile"
                className="edit-teacher-img"
              />
            )}
            <input type="file" name="profile" onChange={handleChange} />

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default EditTeacherData;
