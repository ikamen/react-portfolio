import {useState} from 'react';
import Pdf from '../assets/cv.pdf';

function Contact() {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log (formData);
  }

    return (
      <div>
        <section className = "contact">
          <h2 className ="label" id="contact-label">Contact Me</h2>
          <a href="tel:+44 UK mobile number" id="contact-tel">+44 UK mobile number</a>
          <a href="mailto:kamen.web.dev@gmail.com" id="contact-email">kamen.web.dev@gmail.com</a>
          <a href="https://github.com/ikamen" id="contact-gh"  target="_blank" rel="noreferrer">GitHub profile page</a>
          <a href = {Pdf} target = "_blank" rel="noreferrer"  id="contact-cv">Download my CV</a>
        </section>
        
        <form onSubmit={handleSubmit}>
          <label>
            First Name
            <input name="firstname" onChange={handleChange} type="text" id="fname" placeholder="Your name.."/>
          </label>
          
          <label>
            Last Name
            <input name="lastname" onChange={handleChange} type="text" id="lname" placeholder="Your last name.."/>
          </label>

          <label>
            Email address
            <input name="email" onChange={handleChange} type="text" id="lname" placeholder="Your email address.."/>
          </label>
          
          <label>
            Subject
            <textarea name="message" onChange={handleChange} id="subject" placeholder="Write something.." cols="30" rows="10"></textarea>
          </label>
          
          <input type="submit" value="Submit"></input>

        </form>
      </div>
    )
  }
  
  export default Contact;