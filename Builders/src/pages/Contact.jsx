import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setSuccess(true);
          e.target.reset();
        },
        () => {
          alert("❌ Message not sent. Try again!");
        }
      );
  };

  const whatsappNumber = "923XXXXXXXXX"; // apna WhatsApp number (country code ke sath)
  const whatsappMessage =
    "Hello Sustainable Builders, I’m interested in your eco-friendly construction solutions.";

  return (
    <section className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          Get in touch with Sustainable Builders for eco-friendly construction
          solutions.
        </p>

        <div className="contact-grid">
          {/* INFO SECTION */}
          <div className="contact-info">
            <h3>Get in Touch</h3>

            <p>
              📧 Email:
              <br />
              <strong>sustainablebuilders3@gmail.com</strong>
            </p>

            <div className="whatsapp-box">
              <p>💬 WhatsApp:</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* FORM SECTION */}
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* SUCCESS MODAL */}
        {success && (
          <div className="modal-overlay">
            <div className="modal-box">
              <h2>✅ Message Sent</h2>
              <p>Your message has been successfully sent.</p>
              <button onClick={() => setSuccess(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
