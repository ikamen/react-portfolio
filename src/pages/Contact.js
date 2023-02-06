function Contact() {
    return (
      <div>
        <section className = "contact">
          <h2 className ="label" id="contact-label">Contact Me</h2>
          <a href="tel:+44 UK mobile number" id="contact-tel">+44 UK mobile number</a>
          <a href="mailto:kamen.web.dev@gmail.com" id="contact-email">kamen.web.dev@gmail.com</a>
        </section>
        
        {/* <form>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
    
        <input type="submit" value="Submit"></input>

    
        </form> */}
      </div>
    )
  }
  
  export default Contact;