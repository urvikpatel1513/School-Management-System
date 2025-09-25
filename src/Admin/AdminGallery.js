import "../Admin/Style/AdminGallery.css";
import { Link } from "react-router-dom";
// import admingalleryImages from "./Modules/AdminGalleryData";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

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

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this Image?")) {
      try {
        await axios.delete(
          `https://schoolproject.osapplications.com/api/gallery-delete/${id}`
        );
        alert("Image delete Successfully");
        fetchImages();
      } catch (error) {
        console.error(error);
        alert("Failed to delete Image");
      }
    }
  };

  return (
    <>
      <div className="admin-main-gallery">
        <div className="admin-gallery-header">
          <h2>Gallery Images</h2>
          <div className="add-image-btn">
            <button className="add-btn">
              <Link to="/admin/uploadimage">Add Image +</Link>
            </button>
          </div>
        </div>

        <div className="admin-gallery-grid">
          {images.map((image, index) => (
            <div className="admin-gallery-item" key={index + 1}>
              <img
                src={`https://schoolproject.osapplications.com/images/${image.profile}`}
                alt={`Gallery-image ${index + 1}`}
              />
              <button
                className="admin-delete-btn"
                onClick={() => handleDelete(image.id)}
              >
                Delete Image <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminGallery;
