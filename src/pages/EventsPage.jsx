import React from "react";
import img from "../images/milletPoster.png";
import pa1 from "../images/publicAwareness1.jpeg";
import pa2 from "../images/publicAwareness2.jpeg";
import pa3 from "../images/m1.jpg";
import pa4 from "../images/m2.jpg";
import pa5 from "../images/m3.jpg";
import pa6 from "../images/m4.jpg";
import pa7 from "../images/m5.jpg";
import pa8 from "../images/m6.png";
import onlineMilletCompetition from "../images/online millet competition.png";
import utu1 from "../images/utu1.png";
import utu2 from "../images/utu2.png";
import g201 from "../images/g201.jpg";
import g202 from "../images/g202.jpg";
import gbpuat1 from "../images/gbpuat1.jpg";
import gbpuat2 from "../images/gbpuat2.jpg";
import gbpuat3 from "../images/gbpuat3.jpg";
import rural1 from "../images/rural1.jpg";
import rural2 from "../images/rural2.jpg";
import rural3 from "../images/rural3.jpg";
import rural4 from "../images/rural4.jpg";
import rural5 from "../images/new img.jpg";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import news1 from "../images/newsupdate1.png";
import news2 from "../images/newupdate2.png";
import news3 from "../images/newsupdate3.png";
import news4 from "../images/newsupdate4.png";

const EventsPage = () => {
	return (
		<>
			<Header />
			<div className="section-heading text-center my-4">
				<h2>Our Work</h2>
				<span className="heading-border"></span>
			</div>
			<div
				class="nav nav-tabs d-flex justify-content-center align-items-center mt-3"
				role="tablist"
			>
				<button
					class="nav-link active"
					data-bs-toggle="tab"
					data-bs-target="#innovation-section"
				>
					Innovation Section
				</button>
				<button
					class="nav-link"
					data-bs-toggle="tab"
					data-bs-target="#knowledge-section"
				>
					Knowledge Section
				</button>
			</div>
			<div class="tab-content" style={{ padding: "50px 0" }}>
				<section
					id="innovation-section"
					class="tab-pane fade show active"
					role="tabpanel"
				>
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
										small millets, Dr Sarita Srivastava, a known expert of food
										and nutrition delivered an enlightening lecture on "Value
										Addition of Small Millets." The lecture, organized by
										Agriculture Information.com, drew audience of farmers,
										researchers, and enthusiasts eager to explore the potential
										of these often-underestimated crops.
									</p>
									<p>
										Taken place on June 26, 2023, the event witnessed an
										atmosphere charged with anticipation as attendees eagerly
										awaited Dr Sarita Srivastava's insights. Dr Sarita is known
										for her extensive research and expertise in the field of
										food and nutriton particularly in the domain of small
										millets.
									</p>
									<div className="d-flex justify-content-center">
										<img src={img} alt="poster" />
									</div>
									<p>
										The presentation began with Dr Srivastava outlining the
										nutritional and ecological benefits of small millets, which
										include crops such as finger millet (ragi), foxtail millet,
										barnyard millet, proso millet and little millet. She
										stressed that these ancient grains are rich in essential
										nutrients like dietary fiber, antioxidants, vitamins, and
										minerals and also have low glycemic index thus making them a
										valuable addition to a healthy diet.
									</p>
									<p>
										Dr Srivastava highlighted the importance of value addition
										in unlocking the true potential of small millets. She shared
										innovative techniques and technologies that can be employed
										to process and transform these crops into a range of
										nutritious and marketable products. The presentation
										showcased a variety of value-added millet-based products,
										including millet flour, millet snacks, millet-based
										ready-to-cook mixes, and millet-based beverages.
									</p>
									<p>
										The audience was captivated as Dr Srivastava provided
										detailed insights into the economic opportunities associated
										with small millet value addition. She explained that by
										diversifying their crop portfolio to include small millets
										and adding value to these crops, farmers can not only
										enhance their income but also contribute to food security
										and sustainability. The increased demand for healthy and
										natural food products further bolsters the economic
										viability of small millet value addition.
									</p>
									<p>
										During the interactive session that followed the
										presentation, attendees had the opportunity to engage in a
										lively discussion with Dr Srivastava. They posed questions,
										seeking guidance on processing methods, and marketing
										strategies for small millet value-added products. Dr
										Srivastava, with her vast knowledge and practical
										experience, patiently addressed each query, providing
										valuable insights and recommendations
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
								<h4>News Update</h4>
								<div className="event-info">
									<p>
										<i class="bi bi-calendar-check"></i>Date: 19 August, 2023{" "}
									</p>
									<p>
										<i class="bi bi-person"></i>Authored by: Team Harmonious
										Nourishment Initiative{" "}
									</p>
								</div>
								<div className="text">
									<div className="d-flex justify-content-center">
										<img
											src={news1}
											alt="poster"
											style={{ maxHeight: "540px", margin: "0 auto 15px" }}
										/>
									</div>
									<div className="d-flex justify-content-center">
										<img
											src={news2}
											alt="poster"
											style={{ maxHeight: "540px", margin: "0 auto 15px" }}
										/>
									</div>
									<p>
										The Suvernada Foundation's initiative to promote millet
										consumption received a boost with the successful
										organization of a workshop by Amrapali University on 29th
										April, 2025.The event educated students about the
										nutritional benefits of millets and their potential to
										prevent and control non communicable diseases.
									</p>
									<div className="d-flex justify-content-center">
										<img
											src={news3}
											alt="poster"
											style={{ maxHeight: "540px", margin: "0 auto 15px" }}
										/>
									</div>
									<div className="d-flex justify-content-center">
										<img
											src={news4}
											alt="poster"
											style={{ maxHeight: "540px", margin: "0 auto 15px" }}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="event-details">
							<div className="event-title">
								<h4>Millet Recipe Competition</h4>
								<div className="event-info">
									<p>
										<i class="bi bi-calendar-check"></i>Date: 19 August, 2023{" "}
									</p>
									<p>
										<i class="bi bi-person"></i>Authored by: Team Harmonious
										Nourishment Initiative{" "}
									</p>
								</div>
								<div className="text">
									<div className="d-flex justify-content-center">
										<img
											src={pa8}
											alt="poster"
											style={{ maxHeight: "540px", margin: "0 auto 15px" }}
										/>
									</div>
									<p>
										On August 19, 2023, the "Millet Recipe Competition" was
										jointly organized by the Suvernada Foundation, Rudrapur and
										the Department of Food Science & Nutrition at the College of
										Home Science, GBPUA&T, Pantnagar, Uttarakhand. The event
										aimed to promote millets in people's diets and was driven by
										the efforts of Dr. Sarita Srivastava, Director of Suvernada
										Foundation, and Dr. Archana Kushwaha, Head of the Department
										of Food Science & Nutrition.
									</p>
									<div className="d-flex justify-content-center">
										<img
											src={pa3}
											alt="poster"
											style={{ maxHeight: "540px", margin: "0 auto 15px" }}
										/>
									</div>
									<p>
										Participation extended to students from France undergoing
										training at Pantvarsity, along with enthusiastic Pantvarsity
										students. The competition witnessed the creation of a
										variety of millet-based food products and beverages. The
										judging panel included Dr. Sarita Srivastava, Dr. Archana
										Kushwaha, and Dr. Sabbu Sangita. The event showcased an
										impressive array of millet-based culinary creations.
									</p>
									<div className="d-flex justify-content-center">
										<img
											src={pa4}
											alt="poster"
											style={{ maxHeight: "540px", margin: "0 auto 15px" }}
										/>
									</div>
									<p>
										The results of the competition were as follows: Mrs. Sadhana
										Sharma secured the first place, while Charu Bisht and Diksha
										Semwal secured the second place. Ayushi Joshi and Nicolas
										Flottes secured the third place, and a consolation prize was
										awarded to Mrs. Usha Joshi and Clementine Basquin.
										Participants were honored with trophies and prizes for their
										exceptional efforts.
									</p>
									<div className="d-flex justify-content-center">
										<img
											src={pa5}
											alt="poster"
											style={{ maxHeight: "540px", margin: "0 auto 15px" }}
										/>
									</div>

									<p>
										Dr. Alka Goel, the Dean of Home Science, extended
										encouragement and full support for the successful
										organization of the event. The event's coordination and
										participant encouragement were spearheaded by Mr. Rohit
										Goswami, Director of Suvernada Foundation, and Ms. Shefali
										Srivastava, a consultant with Suvernada Foundation. The
										organizing team received assistance from students of the
										Department of Food Science and Nutrition. The faculty
										members from the College of Home Science also graced the
										occasion with their presence.
									</p>
									<div className="d-flex justify-content-center">
										<img
											src={pa6}
											alt="poster"
											style={{ maxHeight: "540px", margin: "0 auto 15px" }}
										/>
									</div>

									<div className="d-flex justify-content-center">
										<img
											src={pa7}
											alt="poster"
											style={{ maxHeight: "540px", margin: "0 auto 15px" }}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="event-details">
							<div className="event-title">
								<h4>Public Awareness and Sensitization</h4>
								<div className="event-info">
									<p>
										<i class="bi bi-calendar-check"></i>Date: 20 July, 2023{" "}
									</p>
									<p>
										<i class="bi bi-person"></i>Authored by: Team Harmonious
										Nourishment Initiative{" "}
									</p>
								</div>
								<div className="text">
									<p>
										In the spirit to celebrate ‘International Year of Millets
										(2023)’, the following articles were published in newspaper
										of regional language (Hindi) to create public awareness and
										to sensitize them about the benefits of small millets.
									</p>
									<p>
										Taken place on June 26, 2023, the event witnessed an
										atmosphere charged with anticipation as attendees eagerly
										awaited Dr Sarita Srivastava's insights. Dr Sarita is known
										for her extensive research and expertise in the field of
										food and nutriton particularly in the domain of small
										millets.
									</p>
									<p>
										The presentation began with Dr Srivastava outlining the
										nutritional and ecological benefits of small millets, which
										include crops such as finger millet (ragi), foxtail millet,
										barnyard millet, proso millet and little millet. She
										stressed that these ancient grains are rich in essential
										nutrients like dietary fiber, antioxidants, vitamins, and
										minerals and also have low glycemic index thus making them a
										valuable addition to a healthy diet.
									</p>
									<div className="d-flex justify-content-center">
										<img
											src={pa1}
											alt="poster"
											style={{ maxHeight: "540px", margin: "0 auto 15px" }}
										/>
									</div>
									<p>
										Dr Srivastava highlighted the importance of value addition
										in unlocking the true potential of small millets. She shared
										innovative techniques and technologies that can be employed
										to process and transform these crops into a range of
										nutritious and marketable products. The presentation
										showcased a variety of value-added millet-based products,
										including millet flour, millet snacks, millet-based
										ready-to-cook mixes, and millet-based beverages.
									</p>
									<p>
										The audience was captivated as Dr Srivastava provided
										detailed insights into the economic opportunities associated
										with small millet value addition. She explained that by
										diversifying their crop portfolio to include small millets
										and adding value to these crops, farmers can not only
										enhance their income but also contribute to food security
										and sustainability. The increased demand for healthy and
										natural food products further bolsters the economic
										viability of small millet value addition.
									</p>
									<div className="d-flex justify-content-center">
										<img
											src={pa2}
											alt="poster"
											style={{ maxHeight: "540px", margin: "0 auto 15px" }}
										/>
									</div>
									<p>
										During the interactive session that followed the
										presentation, attendees had the opportunity to engage in a
										lively discussion with Dr Srivastava. They posed questions,
										seeking guidance on processing methods, and marketing
										strategies for small millet value-added products. Dr
										Srivastava, with her vast knowledge and practical
										experience, patiently addressed each query, providing
										valuable insights and recommendations
									</p>
								</div>
							</div>
						</div>
						<div className="event-details" style={{ paddingTop: "50px" }}>
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
										<i class="bi bi-person"></i>Authored by: Team Harmonious
										Nourishment Initiative
									</p>
								</div>
								<p className="text">
									In an effort to promote the cultivation and utilization of
									small millets, Dr Sarita Srivastava, a known expert of food
									and nutrition delivered an enlightening lecture on "Value
									Addition of Small Millets." The lecture, organized by
									Agriculture Information.com, drew audience of farmers,
									researchers, and enthusiasts eager to explore the potential of
									these often-underestimated crops.
								</p>
								<p>
									Taken place on June 26, 2023, the event witnessed an
									atmosphere charged with anticipation as attendees eagerly
									awaited Dr. Sarita Srivastava's insights. Dr. Sarita is known
									for her extensive research and expertise in the field of food
									and nutriton particularly in the domain of small millets.{" "}
								</p>
								<p>
									The presentation began with Dr. Srivastava outlining the
									nutritional and ecological benefits of small millets, which
									include crops such as finger millet (ragi), foxtail millet,
									barnyard millet, proso millet and little millet. She stressed
									that these ancient grains are rich in essential nutrients like
									dietary fiber, antioxidants, vitamins, and minerals and also
									have low glycemic index thus making them a valuable addition
									to a healthy diet.{" "}
								</p>
								<p>
									Dr Srivastava highlighted the importance of value addition in
									unlocking the true potential of small millets. She shared
									innovative techniques and technologies that can be employed to
									process and transform these crops into a range of nutritious
									and marketable products. The presentation showcased a variety
									of value-added millet-based products, including millet flour,
									millet snacks, millet-based ready-to-cook mixes, and
									millet-based beverages.{" "}
								</p>
								<p>
									The audience was captivated as Dr. Srivastava provided
									detailed insights into the economic opportunities associated
									with small millet value addition. She explained that by
									diversifying their crop portfolio to include small millets and
									adding value to these crops, farmers can not only enhance
									their income but also contribute to food security and
									sustainability. The increased demand for healthy and natural
									food products further bolsters the economic viability of small
									millet value addition.{" "}
								</p>
								<p>
									During the interactive session that followed the presentation,
									attendees had the opportunity to engage in a lively discussion
									with Dr. Srivastava. They posed questions, seeking guidance on
									processing methods, and marketing strategies for small millet
									value-added products. Dr. Srivastava, with her vast knowledge
									and practical experience, patiently addressed each query,
									providing valuable insights and recommendations.{" "}
								</p>
							</div>
						</div>
						<div className="event-details" style={{ paddingTop: "50px" }}>
							<div className="event-title">
								<h4>
									Suvernada Foundation Motivated School Children and Parents to
									Consume Healthy Diet
								</h4>
								<div className="event-info">
									<p>
										<i class="bi bi-calendar-check"></i>Date: 2 November, 2023{" "}
									</p>
									<p>
										<i class="bi bi-person"></i>Authored by: Team, Suvernada
										Foundation
									</p>
								</div>
								<p className="text">
									Dr. Sarita Srivastava, Director Suvarnada Foundation through
									online interactive session explained importance of healthy
									diet and substitutes of junk foods in daily diet to children
									of the Oak Buds School at Ramnagar Uttarakhand. Parents of
									children of the school also attended session and were
									benefitted. Dr Alpana Joshi from Suvernada Foundation
									coordinated with Principal of the school Mrs Sukhda Mishra.
									The leadership role of Principal in this regard is
									appreciable.
								</p>
							</div>
						</div>
						<div className="event-details" style={{ paddingTop: "50px" }}>
							<div className="event-title">
								<h4>
									Suvernada Foundation Declares Results of Online Small Millet
									Recipe Competition
								</h4>
								<div className="event-info">
									<p>
										<i class="bi bi-calendar-check"></i>Date: 18 October, 2023{" "}
									</p>
									<p>
										<i class="bi bi-person"></i>Authored by: Team, Suvernada
										Foundation
									</p>
								</div>
								<p className="text">
									Dr. Sarita Srivastava, Director Suvarnada Foundation told that
									children from schools of Uttarakhand, Rajasthan and Delhi
									participated in the online competition of coarse grains. Among
									the children of class 6 to 8, Anushka Tiwari of Beershiba
									School, Almora got the first position for making smoothie from
									foxtail millet. Naman Sati of Stepping Stones, Ramnagar got
									second position by making Mandua Idli while Divyanshi Joshi,
									DAV Public School Delhi got third position by making Mandua
									Muffin. Ayushman Bisht of Little Scholar, Ramnagar stood first
									among the children of class 9 to 12 by making Mandua Dhokla.
									Vartika Dangwal of St. Joseph's Convent School, Ramnagar
									prepared Mandua Dosa and got second position. Manaswani Manral
									of Little Scholar School, Ramnagar got third position by
									making Jhangora Kheer. Apart from this, the efforts of
									Pradarsh Pandey, Divansh Aggarwal and Mishika Pathak were also
									commendable. Dr. Alpana Joshi, Public Health Nutritionist and
									Shefali Srivastava Consultant of Suvarnada Foundation made
									special contribution in organizing this competition.
								</p>
								<div className="d-flex justify-content-center">
									<img
										src={onlineMilletCompetition}
										alt="poster"
										style={{ maxHeight: "540px", margin: "0 auto 15px" }}
									/>
								</div>
							</div>
						</div>
						<div className="event-details" style={{ paddingTop: "50px" }}>
							<div className="event-title">
								<h4>
									Recent Advances and Innovations in Small Millets Discussed on
									World Food Day
								</h4>
								<div className="event-info">
									<p>
										<i class="bi bi-calendar-check"></i>Date: 18 October, 2023{" "}
									</p>
									<p>
										<i class="bi bi-person"></i>Authored by: Suvernada
										Foundation
									</p>
								</div>
								<p className="text">
									An international conference was organized in Uttaranchal
									University, Dehradun on the occasion of 'World Food Day' from
									16-17 October. On this occasion, Dr. Sarita Srivastava,
									Director, Suvernada Foundation, was invited as Keynote
									Speaker. She discussed recent advances and innovations in
									small millets.
								</p>
								<div className="d-flex justify-content-center">
									<img
										src={utu1}
										alt="poster"
										style={{ maxHeight: "540px", margin: "0 auto 15px" }}
									/>
								</div>
								<div className="d-flex justify-content-center">
									<img
										src={utu2}
										alt="poster"
										style={{ maxHeight: "540px", margin: "0 auto 15px" }}
									/>
								</div>
							</div>
						</div>
						<div className="event-details" style={{ paddingTop: "50px" }}>
							<div className="event-title">
								<h4>
									Suvernada Foundation Continues To Raise Awareness about
									Millets
								</h4>
								<div className="event-info">
									<p>
										<i class="bi bi-calendar-check"></i>Date: 7th October, 2023{" "}
									</p>
									<p>
										<i class="bi bi-person"></i>Authored by: Team, Harmonious
										Nourishment Initiative
									</p>
								</div>
								<p className="text">
									Suvernada Foundation is actively engaged in raising awareness
									among the public regarding millets. Over the past month, Dr.
									Sarita Srivastava, the Director of Suvernada Foundation, has
									conducted four informative lectures focusing on various facets
									of small millets. These lectures covered topics such as value
									addition, processing and development of health foods and
									healthy diets. These lectures were hosted by Uttarakhand Open
									University, General Bipin Rawat Parvatiya Shodh Shikshanalay
									in Pantnagar, Institute of Social Development in Kichha and
									College of Technology, G. B. Pant University of Agriculture
									and Technology, Pantnagar.
								</p>
								<div className="d-flex justify-content-center">
									<img
										src={g201}
										alt="poster"
										style={{ maxHeight: "540px", margin: "0 auto 15px" }}
									/>
								</div>
								<div className="d-flex justify-content-center">
									<img
										src={g202}
										alt="poster"
										style={{ maxHeight: "540px", margin: "0 auto 15px" }}
									/>
								</div>
							</div>
						</div>
						<div className="event-details" style={{ paddingTop: "50px" }}>
							<div className="event-title">
								<h4>
									Suvernada Foundation Participated in National Workshop at
									GBPUA&T, Pantnagar
								</h4>
								<div className="event-info">
									<p>
										<i class="bi bi-calendar-check"></i>Date: 13 September 2023{" "}
									</p>
									<p>
										<i class="bi bi-person"></i>Authored by: Team, Harmonious
										Nourishment Initiative
									</p>
								</div>
								<p className="text">
									The Department of Food Science and Nutrition at G. B. Pant
									University of Agriculture and Technology, Pantnagar, organized
									a National workshop on "Nutrition and Health Potential,
									Diversity, Processing and Value Addition of Millets" on
									September 11-12, 2023. During the workshop, Dr. Sarita
									Srivastava, Director of Suvernada Foundation, delivered a
									keynote lecture on the topic, "Processing and value addition
									of small millets for development of health foods" to an
									audience that included KVK scientists, NGOs, progressive
									farmers, and students and faculty of community science.
								</p>
								<p className="text">
									Suvernada Foundation actively participated in the exhibition
									held during the workshop, showcasing small millet products
									such as donuts, halwa, pahari roti, and choco drops. The
									success of this exhibition stall can be attributed to the
									efforts of Rohit Goswami, Dr. Alpana Joshi and Shefali
									Srivastava.
								</p>
								<p className="text">
									We extend our gratitude to the Vice Chancellor of GBPUA&T for
									taking the initiative to organize this insightful workshop.
									Special thanks also go to Dr. Alka Goel, Dean, College of Home
									Science, and Dr. Archana Kushwaha, Head, Department of Food
									Science and Nutrition, for their invaluable contributions to
									this event.
								</p>
								<div className="d-flex justify-content-center">
									<img
										src={gbpuat1}
										alt="poster"
										style={{ maxHeight: "540px", margin: "0 auto 15px" }}
									/>
								</div>
								<div className="d-flex justify-content-center">
									<img
										src={gbpuat2}
										alt="poster"
										style={{ maxHeight: "540px", margin: "0 auto 15px" }}
									/>
								</div>
								<div className="d-flex justify-content-center">
									<img
										src={gbpuat2}
										alt="poster"
										style={{ maxHeight: "540px", margin: "0 auto 15px" }}
									/>
								</div>
							</div>
						</div>
						<div className="event-details" style={{ paddingTop: "50px" }}>
							<div className="event-title">
								<h4>
									Rural Trainees Recognize the Importance of Adding Small
									Millets in Their Diets
								</h4>
								<div className="event-info">
									<p>
										<i class="bi bi-calendar-check"></i>Date: 8th September 2023{" "}
									</p>
									<p>
										<i class="bi bi-person"></i>Authored by: Team, Harmonious
										Nourishment Initiative
									</p>
								</div>
								<p className="text">
									In commemoration of the International Year of Millets, a
									training entitled 'Importance of Small Millets and Value
									Addition' was organized on 5th September 2023. Dr. Sarita
									Srivastava, a millet research veteran with 40 years of
									expertise, led the training.
								</p>
								<p className="text">
									During this session, the majority of participants, hailing
									from rural backgrounds, were educated on the nutritional value
									of small millets, their processing methods, and strategies for
									incorporating them into their diets. The session was highly
									interactive, with participants reminiscing about their
									childhoods when they consumed pearl millet and corn alongside
									wheat in the form of chapati. Some even used to enjoy finger
									millet chapati and foxtail millet as a rice substitute.
									Nowadays, some of them opt for mixed grain flour for making
									chapatis. However, they recognized the necessity of
									reintroducing finger millet and other available millets into
									their diets after learning about their health benefits.
									Notably, finger millet was revealed to contain the highest
									amount of calcium (344 mg/100 g), crucial for strong bones and
									preventing osteoporosis and joint pains, which is nearly ten
									times more than wheat (Triticum aestivum) (41 mg/100 g), maize
									(Zea mays) (26 mg/100 g), and rice (Oryza sativa) (33 mg/100
									g).
								</p>
								<p className="text">
									Various techniques for preparing millets, such as malting,
									popping, and boiling, were shared with the trainees. Finger
									millet was suggested as an option for making chapatis. To
									enhance the taste and appeal, especially for children, the
									trainees were instructed in two finger millet recipes: finger
									millet donuts and finger millet choco drops. The training
									session witnessed enthusiastic participation from the
									trainees.
								</p>
								<div className="d-flex justify-content-center">
									<img
										src={rural1}
										alt="poster"
										style={{ maxHeight: "540px", margin: "0 auto 15px" }}
									/>
								</div>
								<div className="d-flex justify-content-center">
									<img
										src={rural2}
										alt="poster"
										style={{ maxHeight: "540px", margin: "0 auto 15px" }}
									/>
								</div>
								<div className="d-flex justify-content-center">
									<img
										src={rural2}
										alt="poster"
										style={{ maxHeight: "540px", margin: "0 auto 15px" }}
									/>
								</div>
								<div className="d-flex justify-content-center">
									<img
										src={rural4}
										alt="poster"
										style={{ maxHeight: "540px", margin: "0 auto 15px" }}
									/>
								</div>
							</div>
						</div>
						<div className="event-details" style={{ paddingTop: "50px" }}>
							<div className="event-title">
								<h4>
									Suvernada Foundation Raises awareness on the Role of Women in
									Biodiversity Conservation.
								</h4>
								<div className="event-info">
									<p>
										<i class="bi bi-calendar-check"></i>Date: 9 January,2024{" "}
									</p>
									<p>
										<i class="bi bi-person"></i>AUTHORED BY :SUVERNADA
										FOUNDATION
									</p>
								</div>
								<p className="text">
									Dr.Sarita Srivastava, Director,Suvernada Foundation discussed
									the role of women in biodiversity conservation in an
									International Conference on Gender Roles and Green Concepts
									organized by MBPG College,Haldwani, Uttarakhand.
								</p>
								<p className="text">
									She chaired the Valedictory Function of the conference and
									emphasized that women well versed with diverse nature of
									plants/field conditions be invited for making policy
									decisions.
								</p>

								<div className="d-flex justify-content-center">
									<img
										src={rural5}
										alt="poster"
										style={{ maxHeight: "540px", margin: "0 auto 15px" }}
									/>
								</div>
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
