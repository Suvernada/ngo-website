import React from "react";
import img from "../images/milletPoster.png";
import pa1 from "../images/publicAwareness1.jpeg";
import pa2 from "../images/publicAwareness2.jpeg";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const EventsPage = () => {
  return (
    <>
      <Header />
      <div className="section-heading text-center my-4">
        <h2>Our Work</h2>
        <span className="heading-border"></span>
      </div>
        <div class="nav nav-tabs d-flex justify-content-center align-items-center mt-3" role="tablist">
            <button
              class="nav-link active"
              data-bs-toggle="tab" data-bs-target="#innovation-section"
            >
              Innovation Section
            </button>
            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#knowledge-section">
              Knowledge Section
            </button>
        </div>
      <div class="tab-content" style={{ padding: "50px 0" }}>
        <section id="innovation-section" class="tab-pane fade show active" role="tabpanel" >
          <div className="container">
              {/* <div className="event-details">
                <div className="event-title">
                  <h4>
                  Mission MarketMirchi: Empowering Farmers Through Direct Marketing 
                  </h4>
                  <div className="event-info">
                        <p>
                          <i class="bi bi-calendar-check"></i>Date: 23 July, 2023{" "}
                        </p>
                        <p>
                          <i class="bi bi-person"></i>Authored by: Shefali
                          Srivastava{" "}
                        </p>
                      </div>
                  <div className="text">
                    <p>
                    Mission MarketMirchi is a completely free online marketplace designed to support farmers, rural entrepreneurs, Farmer Producer Organizations (FPOs), and Self Help Groups (SHGs). The initiative is backed by the Principal Scientific Advisor to the Government of India and has been recognized by Niti Ayog in their ‘Best Agri Innovations List’.  
                    </p>
                    <p>
                    Pragati Gokhale, a retired Principal Scientist from the Ministry of MSME, Govt. of India, established MarketMirchi.com in 2014 with the goal of providing a digital platform for farmers, rural entrepreneurs, SHGs, and FPOs to market their goods without any charges. The movement with the slogan, "Mera Mobile, Mera Marketing," garnered support from IIT's Rural Technology Action Group, which operates under the Principal Scientific Advisor to the Govt. of India. 
                    </p>
                    <p>
                    MarketMirchi.com offers a wide range of advertising categories, including agricultural products, rural services, and various commodities. It facilitates direct marketing, enabling sellers to post free advertisements with details about their products, while buyers can also list their requirements for free. Farmers, SHGs, FPOs and other rural stakeholders are mostly dependent on traditional and local markets due to remote area constraints causing less showcasing of their product.
                    </p>
                    <p>
                    This is exploited through local organized traders and other intermediaries. The direct connection between buyers and sellers provided by MarketMirchi.com, eliminates the need for intermediaries, empowering rural producers to get fair prices for their goods and expand their market reach, even beyond state borders.
                    </p>
                    <p>
                    The indigenous portal and app, available in all Indian languages, has seen significant participation from more than 25,000 rural entrepreneurs, farmers, FPOs, and SHGs from all over the country. They have successfully sold their products, and MarketMirchi's impact in promoting the rural economy has been acknowledged with awards, including the Global Woman of Worth Award for its founder, Pragati Gokhale. 
                    </p>
                    <p>
                    The advertising facility on MarketMirchi.com covers a wide array of categories, ranging from Grains & Pulses to Agricultural Machinery and Bio-Fuel. MarketMirchi.com has benefitted its users providing ample opportunities for sellers and buyers to engage in fruitful transactions. For instance, during the orange season in Nagpur, where prices are typically low, MarketMirchi.com enables producers to directly reach buyers in regions where oranges are scarce, ensuring better prices for their goods and breaking the monopoly of local traders and brokers in traditional markets.  
                    </p>
                    <p>
                    “I have a nursery of fig trees. Our trees were not selling well. We understood about Marketmirchi.com and advertised on it. After this, demand for trees started coming not only from the state but also from other states like Rajasthan, Andhra Pradesh. So we were able to make a profit of Rs. 40,000 to Rs. 50,000 during the difficult times like Covid pandemic.” says Santosh Sharma of Nagpur's Farmers Producers Association. Not only the sellers but also the B2B buyers MarketMirchi.like Bigbasket are connected through MarketMirchi. 
                    </p><p>
Overall, MarketMirchi.com has proven to be a valuable resource, benefiting both sellers and buyers, and making a positive impact on the rural economy. 
</p><p>
To learn more about Marketmirchi.com, interested parties can contact Pragati Gokhale at +91 9822719618. 
</p> </div>
                </div>
              </div> */}
              <div className="event-details">
                <div className="event-title">
                  <h4>
                    Revolutionizing nutrition: Small millet research yields
                    culinary delight{" "}
                  </h4>
                  <div className="event-info">
                        <p>
                          <i class="bi bi-calendar-check"></i>Date: 18 July, 2023{" "}
                        </p>
                        <p>
                          <i class="bi bi-person"></i>Authored by: Dr. Sarita
                          Srivastava{" "}
                        </p>
                      </div>
                  <div className="text">
                    <p>
                      In an effort to promote the cultivation and utilization of
                      small millets, Dr Sarita Srivastava, a known expert of
                      food and nutrition delivered an enlightening lecture on
                      "Value Addition of Small Millets." The lecture, organized
                      by Agriculture Information.com, drew audience of farmers,
                      researchers, and enthusiasts eager to explore the
                      potential of these often-underestimated crops.
                    </p>
                    <p>
                      Taken place on June 26, 2023, the event witnessed an
                      atmosphere charged with anticipation as attendees eagerly
                      awaited Dr Sarita Srivastava's insights. Dr Sarita is
                      known for her extensive research and expertise in the
                      field of food and nutriton particularly in the domain of
                      small millets.
                    </p>
                    <div className="d-flex justify-content-center">
                  <img src={img} alt="poster"/>
                  </div>
                    <p>
                      The presentation began with Dr Srivastava outlining the
                      nutritional and ecological benefits of small millets,
                      which include crops such as finger millet (ragi), foxtail
                      millet, barnyard millet, proso millet and little millet.
                      She stressed that these ancient grains are rich in
                      essential nutrients like dietary fiber, antioxidants,
                      vitamins, and minerals and also have low glycemic index
                      thus making them a valuable addition to a healthy diet.
                    </p>
                    <p>
                      Dr Srivastava highlighted the importance of value addition
                      in unlocking the true potential of small millets. She
                      shared innovative techniques and technologies that can be
                      employed to process and transform these crops into a range
                      of nutritious and marketable products. The presentation
                      showcased a variety of value-added millet-based products,
                      including millet flour, millet snacks, millet-based
                      ready-to-cook mixes, and millet-based beverages.
                    </p>
                    <p>
                      The audience was captivated as Dr Srivastava provided
                      detailed insights into the economic opportunities
                      associated with small millet value addition. She explained
                      that by diversifying their crop portfolio to include small
                      millets and adding value to these crops, farmers can not
                      only enhance their income but also contribute to food
                      security and sustainability. The increased demand for
                      healthy and natural food products further bolsters the
                      economic viability of small millet value addition.
                    </p>
                    <p>
                      During the interactive session that followed the
                      presentation, attendees had the opportunity to engage in a
                      lively discussion with Dr Srivastava. They posed
                      questions, seeking guidance on processing methods, and
                      marketing strategies for small millet value-added
                      products. Dr Srivastava, with her vast knowledge and
                      practical experience, patiently addressed each query,
                      providing valuable insights and recommendations
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section id="knowledge-section" class="tab-pane fade" role="tabpanel">
          <div className="container">
              <div className="event-details">
                <div className="event-title">
                  <h4>
                  Public Awareness and Sensitization 
                  </h4>
                  <div className="event-info">
                        <p>
                          <i class="bi bi-calendar-check"></i>Date: 20 July, 2023{" "}
                        </p>
                        <p>
                          <i class="bi bi-person"></i>Authored by: Team
                          Harmonious Nourishment Initiative{" "}
                        </p>
                      </div>
                  <div className="text">
                    <p>
                    In the spirit to celebrate ‘International Year of Millets (2023)’, the following articles were published in newspaper of regional language (Hindi) to create public awareness and to sensitize them about the benefits of small millets. 
                    </p>
                    <p>
                      Taken place on June 26, 2023, the event witnessed an
                      atmosphere charged with anticipation as attendees eagerly
                      awaited Dr Sarita Srivastava's insights. Dr Sarita is
                      known for her extensive research and expertise in the
                      field of food and nutriton particularly in the domain of
                      small millets.
                    </p>
                    <p>
                      The presentation began with Dr Srivastava outlining the
                      nutritional and ecological benefits of small millets,
                      which include crops such as finger millet (ragi), foxtail
                      millet, barnyard millet, proso millet and little millet.
                      She stressed that these ancient grains are rich in
                      essential nutrients like dietary fiber, antioxidants,
                      vitamins, and minerals and also have low glycemic index
                      thus making them a valuable addition to a healthy diet.
                    </p>
                    <div className="d-flex justify-content-center"><img src={pa1} alt="poster" style={{maxHeight:"540px",margin:"0 auto 15px"}}/></div>
                    <p>
                      Dr Srivastava highlighted the importance of value addition
                      in unlocking the true potential of small millets. She
                      shared innovative techniques and technologies that can be
                      employed to process and transform these crops into a range
                      of nutritious and marketable products. The presentation
                      showcased a variety of value-added millet-based products,
                      including millet flour, millet snacks, millet-based
                      ready-to-cook mixes, and millet-based beverages.
                    </p>
                    <p>
                      The audience was captivated as Dr Srivastava provided
                      detailed insights into the economic opportunities
                      associated with small millet value addition. She explained
                      that by diversifying their crop portfolio to include small
                      millets and adding value to these crops, farmers can not
                      only enhance their income but also contribute to food
                      security and sustainability. The increased demand for
                      healthy and natural food products further bolsters the
                      economic viability of small millet value addition.
                    </p>
                    <div className="d-flex justify-content-center"><img src={pa2} alt="poster" style={{maxHeight:"540px",margin:"0 auto 15px"}}/></div>
                    <p>
                      During the interactive session that followed the
                      presentation, attendees had the opportunity to engage in a
                      lively discussion with Dr Srivastava. They posed
                      questions, seeking guidance on processing methods, and
                      marketing strategies for small millet value-added
                      products. Dr Srivastava, with her vast knowledge and
                      practical experience, patiently addressed each query,
                      providing valuable insights and recommendations
                    </p>
                  </div>
              </div>
              </div>
              <div className="event-details" style={{paddingTop:"50px"}}>
                    <div className="event-title">
                      <h4>
                        Dr Sarita Srivastava Emphasized Value Addition of Small
                        Millets at Agriculture Information.com
                      </h4>
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
                      <p>Taken place on June 26, 2023, the event witnessed an atmosphere charged with anticipation as attendees eagerly awaited Dr. Sarita Srivastava's insights. Dr. Sarita is known for her extensive research and expertise in the field of food and nutriton particularly in the domain of small millets. </p>
                      <p>The presentation began with Dr. Srivastava outlining the nutritional and ecological benefits of small millets, which include crops such as finger millet (ragi), foxtail millet, barnyard millet, proso millet and little millet. She stressed that these ancient grains are rich in essential nutrients like dietary fiber, antioxidants, vitamins, and minerals and also have low glycemic index thus making them a valuable addition to a healthy diet. </p>
                      <p>Dr Srivastava highlighted the importance of value addition in unlocking the true potential of small millets. She shared innovative techniques and technologies that can be employed to process and transform these crops into a range of nutritious and marketable products. The presentation showcased a variety of value-added millet-based products, including millet flour, millet snacks, millet-based ready-to-cook mixes, and millet-based beverages. </p>
                      <p>The audience was captivated as Dr. Srivastava provided detailed insights into the economic opportunities associated with small millet value addition. She explained that by diversifying their crop portfolio to include small millets and adding value to these crops, farmers can not only enhance their income but also contribute to food security and sustainability. The increased demand for healthy and natural food products further bolsters the economic viability of small millet value addition. </p>
                      <p>During the interactive session that followed the presentation, attendees had the opportunity to engage in a lively discussion with Dr. Srivastava. They posed questions, seeking guidance on processing methods, and marketing strategies for small millet value-added products. Dr. Srivastava, with her vast knowledge and practical experience, patiently addressed each query, providing valuable insights and recommendations. </p>
                    </div>
                  </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
