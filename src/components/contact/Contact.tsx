import "./Contact.scss";
import { useState, useRef, FormEvent} from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);


  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    Swal.fire(
  "Message sent!",
  "success"
);

    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs
      .sendForm("service_jzq2thb", "template_yb2h5ze", currentForm, "XTVeLD5KMScM5-3p5")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
     <>
     <section className="section-contact" id="contact">
    <div className="container">
        <div className="text-zone">
            <h1 className="heading-secondary">
                Contact me
            </h1>
            <p className="paragraph">
              I am interested in a internship opportunity... 
            </p>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                      <input type="text" name="name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} required />
                  </li>
                  <li className="half">
                      <input type="email" name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                  </li>
                  <li>
                    <textarea placeholder="Message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button btn btn--blue" value="SEND" /> 
                  </li>
                </ul>
              </form>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Contact
