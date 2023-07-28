import React from 'react'
import "./contact.css";

const ContactUs = () => {
  return (
    <section id='contact-section'>
        <div className="container">
            <div className="row">
<div className="col-md-6">
    <div className="contact-info">
        <h3>Get in touch</h3>
        <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
        <ul>
<li><i class="bi bi-geo-alt-fill"></i> A53-54 Pentagon Colony, Jainagar-4, Dineshpur road, Rudrapur, Kichha, Udham Singh Nagar, 
Uttarakhand, India, PIN 263153
</li>
<li><i class="bi bi-phone-fill"></i> +91 9411320378</li>
<li><i class="bi bi-envelope"></i> suvernada.foundation@gmail.com</li>
</ul>
    </div>
</div>
<div className="col-md-6">
    <div className="contact-form">
        <h3>Drop us a message</h3>
        <h1>Lets create something great together</h1>
        <form>
            <div className="form-group row">
                <div className="col-sm-6">
                <input type="text" id="name" name="name" class="form-control" placeholder="Name" required/>
                </div>
                <div className="col-sm-6">
                <input type="email" id="email" name="email" class="form-control" placeholder="Email" required/>
                </div>
            </div>
            <div className="form-group">
            <textarea id="message" name="message" cols="30" rows="5" class="form-control message" placeholder="Message" required=""></textarea>
            </div>
            <button id="submit" class="btn btn-primary" type="submit">Send Message</button>
        </form>
    </div>
</div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs