import React from "react";
import "./footer.css";
import paymentMethod from "../../images/payment-method.png";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="footer-nav">
              <h3>Our Ngo</h3>
              <div style={{paddingBottom:"25px"}}>
                <img src={paymentMethod} alt="payment method" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 col-6">
            <div className="footer-nav">
              <h3>Campaign</h3>
              <ul class="footer-link">
                <li>
                  <a href="#">
                    <i class="fas fa-long-arrow-alt-right"></i> Campaign
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i class="fas fa-long-arrow-alt-right"></i> Pricing{" "}
                  </a>
                </li> */}
                <li>
                  <a href="#">
                    <i class="fas fa-long-arrow-alt-right"></i> Support
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-long-arrow-alt-right"></i> Discover
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i class="fas fa-long-arrow-alt-right"></i> Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-long-arrow-alt-right"></i> Checkout
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 col-6">
            <div className="footer-nav">
              <h3>Explore</h3>
              <ul class="footer-link">
                <li>
                  <a href="#">
                    <i class="fas fa-long-arrow-alt-right"></i> Environment
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i class="fas fa-long-arrow-alt-right"></i> Fashion
                  </a>
                </li> */}
                <li>
                  <a href="#">
                    <i class="fas fa-long-arrow-alt-right"></i> Health
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-long-arrow-alt-right"></i> Innovation
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-long-arrow-alt-right"></i> Nonprofit
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i class="fas fa-long-arrow-alt-right"></i> Travels
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="footer-nav">
              {/* <h3>Newsletter</h3>
              <form className="newsletterForm">
                <input type="text" placeholder="Enter your email..." />
                <button type="submit">
                  <span class="fa fa-paper-plane"></span>
                </button>
              </form> */}
              <div class="follow">
                <h3>Follow us</h3>
                <ul>
                  {/* <li>
                    <a target="_Blank" href="https://www.facebook.com">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_Blank" href="https://www.twitter.com">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_Blank" href="https://www.google.com">
                    <i class="fa fa-google-plus" aria-hidden="true"></i>
                    </a>
                  </li> */}
                  <li>
                    <a target="_Blank" href="https://www.linkedin.com/company/suvernada-foundation/">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_Blank" href="https://www.instagram.com">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
