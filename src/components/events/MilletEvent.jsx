import React from "react";
import img from "../../images/milletPoster.png";
import "./events.css";
import { useNavigate } from "react-router-dom";

const MilletEvent = () => {
  const navigate = useNavigate();

  return (
    <section id="event-section">
      <div className="container">
        <div className="section-heading text-center mb-4">
          <h2>Our Work</h2>
          <span className="heading-border"></span>
        </div>
        <div style={{ padding: "30px 0" }}>
          <div className="section-heading text-center mb-4">
            <h2>Innovation Section</h2>
            <span className="heading-border"></span>
          </div>
          <div id="carouselInnovation" className="carousel slide carousel-dark">
            <div className="carousel-inner">
              {/* <div className="carousel-item active">
                <div className="row event-first-row event-card">
                  <div className="col-lg-5 image-block-one">
                    <img src={img} alt="millet-project" style={{height:"300px"}}/>
                  </div>
                  <div className="col-lg-7 event-details">
                    <div className="event-title">
                      <h3>
                        Mission MarketMirchi: Empowering Farmers Through Direct
                        Marketing{" "}
                      </h3>
                      <div className="event-info">
                        <p>
                          <i class="bi bi-calendar-check"></i>Date: 23 July, 2023{" "}
                        </p>
                        <p>
                          <i class="bi bi-person"></i>Authored by: Shefali
                          Srivastava{" "}
                        </p>
                      </div>
                      <p className="text">
                        Mission MarketMirchi is a completely free online
                        marketplace designed to support farmers, rural
                        entrepreneurs, Farmer Producer Organizations (FPOs), and
                        Self Help Groups (SHGs). The initiative is backed by the
                        Principal Scientific Advisor to the Government of India
                        and has been recognized by Niti Ayog in their ‘Best Agri
                        Innovations List’.
                      </p>
                      <a
                        onClick={() => {
                          navigate("/events");
                        }}
                        className="btn-primary text-white"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="carousel-item active">
                <div className="row event-first-row event-card">
                  <div
                    className="col-lg-5 image-block-one"
                    style={{ height: "300px" }}
                  >
                    <img src={img} alt="millet-project" />
                  </div>
                  <div className="col-lg-7 event-details">
                    <div className="event-title">
                      <h3>A Guide to Innovative Millet Products </h3>
                      <div className="event-info">
                        <p>
                          <i class="bi bi-calendar-check"></i>Date: 18 July, 2023{" "}
                        </p>
                        <p>
                          <i class="bi bi-person"></i>Authored by: Dr. Sarita
                          Srivastava{" "}
                        </p>
                      </div>
                      <p className="text">
                        By introducing small millets into the recipe, junk foods
                        can be transformed into functional foods. These
                        functional foods, enriched with small millets, offer not
                        only essential nutrition but also additional therapeutic
                        advantages. These innovative and nutritious food options
                        aid in disease prevention, boost immunity, and
                        contribute to overall well-being.
                      </p>
                      <a
                        onClick={() => {
                          navigate("/events");
                        }}
                        className="btn-primary text-white"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselInnovation"
              data-bs-slide="prev"
            >
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselInnovation"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div style={{ padding: "50px 0" }}>
          <div className="section-heading text-center mb-4">
            <h2>Knowledge Section</h2>
            <span className="heading-border"></span>
          </div>
          <div id="carouselKnowledge" className="carousel slide carousel-dark">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row event-first-row event-card">
                  <div
                    className="col-lg-5 image-block-one"
                    style={{ height: "300px" }}
                  >
                    <img src={img} alt="millet-project" />
                  </div>
                  <div className="col-lg-7 event-details">
                    <div className="event-title">
                      <h3>Public Awareness and Sensitization </h3>
                      <div className="event-info">
                        <p>
                          <i class="bi bi-calendar-check"></i>Date: 20 July, 2023{" "}
                        </p>
                        <p>
                          <i class="bi bi-person"></i>Authored by: Team
                          Harmonious Nourishment Initiative{" "}
                        </p>
                      </div>
                      <p className="text">
                        In the spirit to celebrate ‘International Year of
                        Millets (2023)’, the following articles were published
                        in newspaper of regional language (Hindi) to create
                        public awareness and to sensitize them about the
                        benefits of small millets.
                      </p>
                      <a
                        onClick={() => {
                          navigate("/events");
                        }}
                        className="btn-primary text-white"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row event-first-row">
                  <div
                    className="col-lg-5 image-block-one"
                    style={{ height: "300px" }}
                  >
                    <img src={img} alt="millet-project" />
                  </div>
                  <div className="col-lg-7 event-details">
                    <div className="event-title">
                      <h3>
                        Dr Sarita Srivastava Emphasized Value Addition of Small
                        Millets at Agriculture Information.com
                      </h3>
                      <div className="event-info">
                        <p>
                          <i class="bi bi-calendar-check"></i>Date: 27 June, 2023{" "}
                        </p>
                        <p>
                          <i class="bi bi-person"></i>Authored by: Team
                          Harmonious Nourishment Initiative
                        </p>
                      </div>
                      <p className="text">
                        In an effort to promote the cultivation and utilization
                        of small millets, Dr Sarita Srivastava, a known expert
                        of food and nutrition delivered an enlightening lecture
                        on "Value Addition of Small Millets." The lecture,
                        organized by Agriculture Information.com, drew audience
                        of farmers, researchers, and enthusiasts eager to
                        explore the potential of these often-underestimated
                        crops.
                      </p>
                      <a
                        onClick={() => {
                          navigate("/events");
                        }}
                        className="btn-primary text-white"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselKnowledge"
              data-bs-slide="prev"
            >
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselKnowledge"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilletEvent;
