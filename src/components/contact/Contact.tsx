import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const refForm = useRef()
  // const [success, setSuccess] = useState(false)
  // const [failed, setFailed] = useState(false)

  const sendEmail = (e: { preventDefault: () => void })=> {
    e.preventDefault()
  }
  return (
     <>
     <section className="section-contact">
    <div className='container'>
        <div className='text-zone'>
            <h1 className="heading-secondary">
                Contact me
            </h1>
            <p className="paragraph">
              I am interested in a internship opportunity... 
            </p>
            <div className='contact-form'>
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className='half'>
                      <input type="text" name="name" placeholder='Name'  required />
                  </li>
                  <li className='half'>
                      <input type="email" name="email" placeholder='Email'  required />
                  </li>
                  <li>
                    <input placeholder="Subject" type="text" name="subject" required />
                  </li>
                  <li>
                    <textarea placeholder='Message' name="message" required></textarea>
                  </li>
                  <li>
                    <input type="submit" className='flat-button btn btn--blue' value="SEND" /> 
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
