import "./Style/About.css";
import Hero from "../Layout/Hero";
import { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://schoolproject.osapplications.com/api/all-about-show")
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to fetch data");
      });
  };

  return (
    <>
      <Hero content="Welcome new prospective students of SMPN 1 CIBADAK for the 2024-2025 academic year" />
      <div className="info-container">
        {data.map((item, index) => (
          <div>
            <div className="info-header">{item.title}</div>
            <p className="info-text">{item.information}</p>
          </div>
        ))}
        {/* <div className="info-header">Information</div>
                <p className="info-text">
                    For your information, registration for the 2021-2022 period for the Affirmative, Parent/Guardian Transfer, and Achievement pathways will be opened from June 28 to July 2, 2021, while for the Zoning pathway it will be opened from July 5 to July 9, 2021.
                </p>
                <p className="info-text">
                    The registration simulation has been opened, but outside the date mentioned above, it will be deleted again. Thank you.
                </p>
                <p className="info-text">
                    Admin of PPDB SMPN 1 Cibadak
                </p> */}
      </div>
    </>
  );
}

export default About;
