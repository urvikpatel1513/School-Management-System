import "./Style/About.css";
import Hero from "../Layout/Hero";
import { useEffect, useState } from "react";
import axios from "axios";
import ScrollTop from "./ScrollTop";

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
      <ScrollTop>
        <Hero content="Welcome new prospective students of SMPN 1 CIBADAK for the 2024-2025 academic year" />
        <div className="info-container">
          {data.map((item, index) => (
            <div>
              <div className="info-header">{item.title}</div>
              <p className="info-text">{item.information}</p>
            </div>
          ))}
        </div>
      </ScrollTop>
    </>
  );
}

export default About;
