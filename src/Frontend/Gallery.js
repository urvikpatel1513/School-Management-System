/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import galleryImages from "../Frontend/Modules/GalleryImage";
import "./Style/Gallery.css";
import axios from "axios";
import ScrollTop from "./ScrollTop";

function Gallery() {
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

  return (
    <>
      <ScrollTop>
        <div className="image-gallery">
          <div className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-img">
              {images.map((image, index) => (
                <img
                  src={`https://schoolproject.osapplications.com/images/${image.profile}`}
                  key={index}
                  alt={`Gallery-image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </ScrollTop>
    </>
  );
}

export default Gallery;
