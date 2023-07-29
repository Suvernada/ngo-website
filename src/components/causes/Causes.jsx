import React from "react";
import "./causes.css";
import img1 from "../../images/children.jpeg"
import img2 from "../../images/education.jpg"
import img3 from "../../images/women-empowerment.jpeg"
import { useNavigate } from "react-router-dom";

const Causes = () => {
  const navigate=useNavigate();
  return (
    <section className="causes-section">
      <div className="container">
        <div className="section-heading text-center mb-4">
          <h2>Platforms</h2>
          <span className="heading-border"></span>
          <p>
            Help today because tomorrow you may be the one who <br /> needs more
            helping!
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="bg-white position-relative card">
              <div className="card-top">
              <div className="causes-img-container">
                <img className="img-fluid" src={img1} alt="children" />
                
              </div>
              <button className="cause-type btn"
                >Development</button>
              </div>
              <div className="card-content">
                <h3>Collaboratory for Sustainable Development</h3>
                <p>
                  The primary aim of the 'Collaboratory for Sustainable
                  Development' is to initiate and conduct cutting-edge research
                  that addresses knowledge gaps and produces actionable plans
                  for sustainable development. 
                </p>
                <a style={{color:"#0d6efd"}} onClick={()=>{navigate("/causes")}}>Read more</a>
                {/* <div className="progress-level">
                  <div className="inner">
                    <div className="bar">
                      <div className="bar-inner">
                        <div
                          className="bar-fill"
                          data-percent="65"
                          style={{ width: "65%" }}
                        ><div className="percent"></div><div className="number">65%</div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <span className="fw-bold text-grey">Raised:</span>
                    <span className="fw-bold">Rs 4500</span>
                  </div>
                  <div>
                    <span className="fw-bold text-grey">Goal:</span>
                    <span className="fw-bold">Rs 10000</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="bg-white position-relative card">
              <div className="card-top">
              <div className="causes-img-container">
                <img className="img-fluid" src={img2} alt="education" />
              </div>
              <button className="cause-type btn">Nutrition</button>
              </div>
              <div className="card-content">
                <h3>Harmonious Nourishment Initiative</h3>
                <p>
                 we actively advocate for the consumption of millet food 
products while providing services in nutrition counseling.It is centered 
around fostering a relationship with nourishment
                </p>
                <a style={{color:"#0d6efd"}} onClick={()=>{navigate("/causes")}}>Read more</a>
                {/* <div className="progress-level">
                  <div className="inner">
                    <div className="bar">
                      <div className="bar-inner">
                        <div
                          className="bar-fill"
                          data-percent="65"
                          style={{ width: "65%" }}
                        ><div className="percent">
                            </div>
                            <div className="number">65%</div>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <span className="fw-bold text-grey">Raised:</span>
                    <span className="fw-bold">Rs 4500</span>
                  </div>
                  <div>
                    <span className="fw-bold text-grey">Goal:</span>
                    <span className="fw-bold">Rs 10000</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="bg-white position-relative card">
              <div className="card-top">
              <div className="causes-img-container">
                <img className="img-fluid" src={img3} alt="women-empowerment" />
              
              </div>
              <button className="cause-type btn">Empowerment</button>
              </div>
              <div className="card-content">
                <h3>The Empowered Minds Studio</h3>
                <p> we specialize in various activities aimed at personal growth and creativity,including crafting insightful self-help blogs and providing mentorship to children and young adults, nurturing their 
potential as budding authors
                </p>
                <a style={{color:"#0d6efd"}} onClick={()=>{navigate("/causes")}}>Read more</a>
                {/* <div className="progress-level">
                  <div className="inner">
                    <div className="bar">
                      <div className="bar-inner">
                        <div
                          className="bar-fill"
                          data-percent="65"
                          style={{ width: "65%" }}
                        ><div className="percent"></div><div className="number">65%</div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <span className="fw-bold text-grey">Raised:</span>
                    <span className="fw-bold">Rs 4500</span>
                  </div>
                  <div>
                    <span className="fw-bold text-grey">Goal:</span>
                    <span className="fw-bold">Rs 10000</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Causes;
