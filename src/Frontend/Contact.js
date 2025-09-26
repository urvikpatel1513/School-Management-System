import "./Style/Contact.css";
import Hero from "../Layout/Hero";
import { useRef } from "react";
import ScrollTop from "./ScrollTop";

function Contact() {
  const formRef = useRef();

  const showAlert = (e) => {
    e.preventDefault();
    alert("Form Submitted successfully!");
    formRef.current.reset();
  };

  return (
    <>
      <ScrollTop>
        <Hero
          content="If you have any questions, please fill in the form below"
          heading="Contact US"
        />
        <div className="container-body">
          <div className="container">
            <form
              className="contact-form"
              id="contact-form"
              ref={formRef}
              onSubmit={showAlert}
            >
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="mail">E-mail</label>
                  <input
                    type="email"
                    name="mail"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="number">Phone No.</label>
                <input
                  type="tel"
                  name="number"
                  pattern="[0-9]{10}"
                  minLength="10"
                  maxLength="10"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="desc">Description</label>
                <textarea
                  name="desc"
                  id="desc"
                  cols="30"
                  rows="10"
                  placeholder="Description"
                  required
                ></textarea>
              </div>
              <button type="submit" id="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
          <div className="map">
            <iframe
              title="SMP Negeri 1 CIBADAK Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.968263510909!2d106.78756397736555!3d-6.894399575325771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68316af442641b%3A0x96edb366f22211d5!2sSMP%20Negeri%201%20CIBADAK!5e0!3m2!1sen!2sin!4v1743154486897!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </ScrollTop>
    </>
  );
}

export default Contact;
