import React from "react";
import aboutImg from "../../images/children2.webp";
import "./about.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate=useNavigate();
  return (
    <section id="about-us">
      <div className="container">
          <div className="row about-first-row" style={{padding:"100px 0"}}>
            <div className="col-lg-6 col-md-6 text-center">
              <img src={aboutImg} className="img-fluid" alt="about-banner" />
            </div>
            <div className="col-lg-6 col-md-6">
              <h1>
                <span class="d-block small">About Us</span> Welcome to{" "}
                <span>Suvernada Foundation</span>
              </h1>
              <p>
              Suvernada Foundation is a nonprofit organization founded in May, 2023 which is dedicated to improving the 
well-being and livelihoods of individuals across various sections of society. We firmly believe in the 
transformative power of quality research and innovations, providing access to healthy food, basic necessities, 
education, and opportunities for skill development. Our mission is to create a positive impact on the lives of 
especially those who lack access to proper nutrition, basic amenities, and equal opportunities for growth and 
empowerment.
              </p>
              <a onClick={()=>{navigate("/about")}} style={{color:"#0d6efd"}}>Read more</a>
            </div>
          </div>
      </div>
          <div style={{padding:"100px 0",background:"#eef7f8"}}>
            <div className="container">
            <div className="row">
            <div class="col-md-6 col-sm-12">
            <h1><span>Support</span> for <span>Needed</span> People<br/>
              </h1>
              <h2><em>"Be Our Force for Good: Fuel Our Journey with a Generous Donation or a Coffee Boost!"</em></h2>
              <p style={{ marginBottom: "20px" }}>
              If our work has inspired you and you wish to be the driving force behind our ongoing success, there 
are two fantastic ways to show your support! You can make a generous donation, directly fueling our 
mission to create positive change and transform lives. Alternatively, you can simply buy us a coffee –
a small gesture that goes a long way in keeping our team energized and motivated to make a difference. 
Your choice, big or small, makes an immense impact on the lives we touch. Join hands with us today 
and be a part of our journey toward a better world!
              </p>
                {/* <a href="#" className="default-link">
                  discover more
                </a> */}
            </div>
            <div class="col-md-6 col-sm-12">
              <div className="about-feature-box">
                <div className="about-feature col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="inner">
                      <h3>Truly Get Inspired From Us</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-feature col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="content-box">
                      <div className="inner">
                      <h3>Become a genuine volunteer</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-feature col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="content-box">
                      <div className="inner">
                      <h3>Make a donation to achieve</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-feature col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="content-box">
                      <div className="inner">
                      <h3>Adoption for betterment</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
    </section>
  );
};

export default About;
