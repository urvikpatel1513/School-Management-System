import { useState } from "react";
import "../Admin/Style/UploadImage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UploadImage() {
  const [images, setImages] = useState({
    profile: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { files } = e.target;
    setImages({
      ...images,
      profile: files ? files[0] : null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("profile", images.profile);

    try {
      const response = await axios.post(
        "https://schoolproject.osapplications.com/api/gallery-store",
        data
      );
      if (response) {
        alert("Image uploaded successfully");
        navigate("/admin/gallery");
      } else {
        alert("Failed");
      }
    } catch (error) {
      alert("Failed to upload image. Please try again");
      console.error(error);
    }
  };

  return (
    <>
      <section className="upload-image-section">
        <div className="upload-image-container">
          <h1>Upload Image</h1>
          <form
            className="upload-image-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <label>Add Image</label>
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

export default UploadImage;
