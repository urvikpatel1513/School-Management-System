import "./Style/Teacher.css";
import Hero from "../Layout/Hero";
import { useEffect, useState } from "react";
import axios from "axios";

function Teacher() {
  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = () => {
    axios
      .get("https://schoolproject.osapplications.com/api/all-teacher-show")
      .then((response) => {
        console.log(response.data);
        setTeacherData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed");
      });
  };
  return (
    <>
      <Hero
        heading="Our Best Faculty"
        content="Data Guru - Guru SMP Negeri 1 Cibadak"
      />
      <div className="teachers-body">
        <section className="teachers-container">
          <h2>Teachers</h2>
          <div className="grid">
            {teacherData.map((teacher, index) => (
              <article className="img-card" key={index}>
                <img
                  src={`https://schoolproject.osapplications.com/images/${teacher.profile}`}
                  alt={`Teacher ${index + 1}`}
                />
                <p>
                  <strong>Name: </strong>
                  {teacher.name}
                </p>
                <p>
                  <strong>Phone No: </strong>
                  {teacher.Phone}
                </p>
                <p>
                  <strong>Address: </strong>
                  {teacher.address}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Teacher;
