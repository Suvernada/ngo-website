import React from "react";
import Header from "../components/header/Header";
import aboutImg from "../images/children2.webp";
import director1 from "../images/Sarita.jpeg";
import director2 from "../images/rp_srivastava.jpg";
import teamMember1 from "../images/Shefali.png";
import Footer from "../components/footer/Footer";
import boardOfAdvisor1 from "../images/boa1.png";
import boardOfAdvisor2 from "../images/boa2.png";
import boardOfAdvisor3 from "../images/boa3.png";
import boardOfAdvisor4 from "../images/boa4.png";
import boardOfAdvisor5 from "../images/boa5.png";
import boardOfAdvisor6 from "../images/boa6.png";
import "./AboutPage.css";
const AboutPage = () => {
	return (
		<>
			<Header />
			<section id="about-us">
				<div className="container">
					<div className="row" style={{ padding: "50px 0 100px" }}>
						<div className="col-lg-6 col-md-12 text-center">
							<img src={aboutImg} className="img-fluid" alt="about-banner" />
						</div>
						<div className="col-lg-6 col-md-12">
							<h1>
								<span class="d-block small">About Us</span> Welcome to{" "}
								<span>Suvernada Foundation</span>
							</h1>
							<p>
								Suvernada Foundation is a nonprofit organization founded in May,
								2023 which is dedicated to improving the well-being and
								livelihoods of individuals across various sections of society.
								We firmly believe in the transformative power of quality
								research and innovations, providing access to healthy food,
								basic necessities, education, and opportunities for skill
								development. Our mission is to create a positive impact on the
								lives of especially those who lack access to proper nutrition,
								basic amenities, and equal opportunities for growth and
								empowerment.
							</p>
						</div>
					</div>
					<div className="row" style={{ padding: "50px 0" }}>
						<div className="col-lg-6 col-md-12">
							<p>
								Dr. Sarita Srivastava is a veteran of Foods and Nutrition. With
								39 years of teaching experience, she has made significant
								contributions to her field. Dr. Sarita obtained her M.Sc. in
								Foods and Nutrition and Ph.D. in Biochemistry from G.B. Pant
								University of Agriculture & Technology in Pantnagar,
								Uttarakhand, India. She also pursued a post-doctorate in
								Braunschweig, Germany from 1988 to 1989. In 1993, she was
								awarded a fellowship by the Food and Agriculture Organization
								(FAO) and worked under the United Nations Development Programme
								(UNDP) project at Michigan State University, USA for a period of
								three months.
							</p>
							<p>
								Throughout her career, Dr. Sarita has played important editorial
								roles. She served as the editor-in-chief of the International
								Journal of AgroNutrifood Practices and as a subject editor of
								the Pantnagar Journal of Research. Her research interests have
								primarily focused on the nutritional quality of millets and the
								development of diversified products, including those suitable
								for diabetics and individuals with celiac disease. She has
								guided the research of 30 M.Sc. and 16 Ph.D. students. Dr.
								Sarita has also edited the book titled "Small Millet Grains: The
								Superfoods in Human Diet," which was published by Springer
								Nature. In addition, she has authored the book, ‘Global Health
								Challenges: Nutrition and Management’, published by Taylor and
								Francis, USA. Her academic contributions include 90 research
								papers, 42 popular articles, and the filing of six patents.
							</p>
							<p>
								Dr. Sarita Srivastava's expertise and dedication have been
								recognized through various awards for excellence and
								appreciation of her professional work. In 2002, she received the
								Best Teacher Award from G.B. Pant University of Agriculture and
								Technology, Pantnagar. Furthermore, she has served as an expert
								in various national forums and international conferences,
								contributing to the advancement of her field.
							</p>
						</div>
						<div className="col-lg-6 col-md-12 text-center">
							<img src={director1} className="img-fluid" alt="director-1" />
							<h6>
								Dr. Sarita Srivastava
								<br />
								Director, Suvernada Foundation
								<br />
								Prof. and Head (Retd.), Department of Entomology,
								<br />
								College of Agriculture, G. B. Pant University of Agriculture &
								Technology, Pantnagar
							</h6>
						</div>
					</div>
					<div className="row" style={{ padding: "50px 0" }}>
						<div className="col-lg-6 col-md-12 text-center">
							<img src={director2} className="img-fluid" alt="director-2" />
							<h6>
								Dr. R. P. Srivastava,
								<br />
								Director, Suvernada Foundation
								<br />
								Prof. and Head (Retd.), Department of Entomology,
								<br />
								College of Agriculture, G. B. Pant University of Agriculture &
								Technology, Pantnagar
							</h6>
						</div>
						<div className="col-lg-6 col-md-12">
							<p>
								Dr. R. P. Srivastava has an impressive academic background and a
								wealth of experience in teaching and research, spanning over 38
								years. Currently, Dr. Srivastava holds the positions of Director
								of both, Suvernada Foundation and Beevibes Business Services
								Pvt. Ltd.
							</p>
							<p>
								During his academic journey, Dr. Srivastava had the privilege of
								being a Post Doctoral Fellow with the DAAD (German Academic
								Exchange Service) in Germany from 1988 to 1990. During this
								period, he worked at the Institute for Pharmaceutical Biology at
								T. U. Braunschweig, focusing on Bioactive Plant Natural Products
								(Botanical Insecticides). Additionally, in 1996, he also worked
								at the Institute for Pharmaceutical Biology in conjunction with
								the Botanical Garden at the University of Wuerzburg.
							</p>
							<p>
								His educational qualifications are highly distinguished, having
								earned a Ph.D. in Entomology with minor in Biochemistry; and an
								MSc. in Ag. Entomology, both from G. B. Pant University of
								Agriculture & Technology, Pantnagar. He completed his
								undergraduate degree, B.Sc. (Biol.), at St. Andrews College
								under Gorakhpur University (U.P.).
							</p>
							<p>
								Dr. Srivastava has accumulated an impressive experience in
								teaching and research. His primary areas of expertise lie in
								Insecticide Toxicology and Sericulture. Among his noteworthy
								contributions is the development of the Mulberry Sericulture Lab
								and Museum, Mulberry Garden, and the Bioactive Plant Natural
								Products Laboratory. His research and extension work on Mulberry
								Sericulture have been extensive, leaving a lasting impact on the
								field.
							</p>
							<p>
								Throughout his career, Dr. Srivastava has been actively involved
								in shaping agricultural education and extension. He
								significantly contributed to the formulation of the Agriculture
								Portal Template on Sericulture with the Directorate of Extension
								Education at GBPUA&T, Pantnagar. As an accomplished advisor, he
								has guided seventeen M.Sc. and seven Ph.D. students in their
								academic pursuits, providing valuable support to the next
								generation of researchers. His commitment to research is evident
								in the publication of fifty-two research papers in the journals
								of national and international repute, and he has also been
								involved in ten research projects. Recognizing his outstanding
								contributions, Dr. Srivastava has received numerous awards and
								honors at both national and international levels.
							</p>
						</div>
					</div>
					<div
						className="section-heading text-center mb-4"
						style={{ padding: "50px 0 20px" }}
					>
						<h2>Consultant</h2>
						<span className="heading-border"></span>
					</div>
					<div className="row" style={{ padding: "0px 0 50px" }}>
						<div className="col-lg-6 col-md-12">
							<p>
								Dr. Shefali Srivastava has done her PhD from G. B. Pant
								University of Agriculture & Technology (GBPUA&T), Pantnagar. Her
								educational background includes a Master's degree in
								Agribusiness Economics from Gokhale Institute of Politics and
								Economics, Pune and a Bachelor’s degree in Agriculture from
								GBPUA&T, Pantnagar. Dr. Shefali has the experience of working
								with various national and international organizations. She is an
								education enthusiast and holds a teaching certificate in
								'Education for Life'. She is actively engaged in creative
								writing pursuits and manages Dawn Blossom Club
								(www.dawnblossomclub.com), an online club by The Empowered Minds
								Studio, Suvernada Foundation. She is also the Editor of Dawn
								Blossom Blog where she invites entries for short
								story/poems/articles conveying optimism and hope. She can be
								contacted at shefali.suvernada.foundation@gmail.com
							</p>
						</div>
						<div className="col-lg-6 col-md-12 text-center">
							<img src={teamMember1} className="img-fluid" alt="director-2" />
							<h6>
								Dr. Shefali Srivastava,
								<br />
								Consultant - Research Author and Mentor
								<br />
								<a href="mailto:shefali.suvernada.foundation@gmail.com">
									shefali.suvernada.foundation@gmail.com
								</a>
							</h6>
						</div>
					</div>
					<div
						className="section-heading text-center mb-4"
						style={{ padding: "50px 0 20px" }}
					>
						<h2>Board of Advisors</h2>
						<span className="heading-border"></span>
					</div>

					{/* code for add board of advisors */}
					<div className="d-flex flex-wrap justify-content-center gap-4">
						<div className="card" style={{ width: "18rem" }}>
							<img
								src={boardOfAdvisor1}
								className="card-img-top"
								alt="Card 4"
							/>
							<div className="card-body">
								<h5 className="card-title">Dr PritishriParhi</h5>
								<p className="card-text">
									{" "}
									Dean, College of Community Science, OUAT, Bhubaneswar,Odisha
								</p>
							</div>
						</div>

						<div className="card" style={{ width: "18rem" }}>
							<img
								src={boardOfAdvisor2}
								className="card-img-top"
								alt="Card 5"
							/>
							<div className="card-body">
								<h5 className="card-title">Dr. Asha Arya</h5>
								<p className="card-text">
									Former Professor and Head Dept. of Food Science and Nutrition
									College of Community Science VNMKV, Parbhani (MS)
								</p>
							</div>
						</div>

						<div className="card" style={{ width: "18rem" }}>
							<img
								src={boardOfAdvisor3}
								className="card-img-top"
								alt="Card 6"
							/>
							<div className="card-body">
								<h5 className="card-title">Dr Lata Pande</h5>
								<p className="card-text">
									Prof. and Head Home Science Dept., DSB Campus, Kumaon
									University, Uttarakhand
								</p>
							</div>
						</div>
						<div className="card" style={{ width: "18rem" }}>
							<img
								src={boardOfAdvisor4}
								className="card-img-top"
								alt="Card 1"
							/>
							<div className="card-body">
								<h5 className="card-title">Dr. Anju Bisht</h5>
								<p className="card-text">
									Regional Director, Uttarakhand Open University, Professor and
									Head, Home Science Dept., MBPG College, Haldwani, Uttarakhand
								</p>
							</div>
						</div>

						<div className="card" style={{ width: "18rem" }}>
							<img
								src={boardOfAdvisor5}
								className="card-img-top"
								alt="Card 2"
							/>
							<div className="card-body">
								<h5 className="card-title">Dr Sheetal Chhaya</h5>
								<p className="card-text">
									Chief Clinical Nutritionist Parul Sevashram Hospital
									(Professor and Head) Dept. of Nutrition and Dietetics Parul
									Institute of Applied Sciences Parul University, Vadodara,
									Gujarat
								</p>
							</div>
						</div>

						<div className="card" style={{ width: "18rem" }}>
							<img
								src={boardOfAdvisor6}
								className="card-img-top"
								alt="Card 3"
							/>
							<div className="card-body">
								<h5 className="card-title">Ms Shivli Srivastava</h5>
								<p className="card-text">
									Food Scientist, M.Sc. Food Technology, CFTRI B.Sc. Food
									Technology (Gold Medalist), GBPUA&T
								</p>
							</div>
						</div>
					</div>

					<div
						className="row align-items-center"
						style={{ padding: "100px 0", background: "#eef7f8" }}
					>
						<div class="col-md-6 col-sm-12">
							<h1>
								<span>Support</span> for <span>Needed</span> People
								<br />
							</h1>
							<h2>
								<em>
									"Be Our Force for Good: Fuel Our Journey with a Generous
									Donation or a Coffee Boost!"
								</em>
							</h2>
							<p style={{ marginBottom: "20px" }}>
								If our work has inspired you and you wish to be the driving
								force behind our ongoing success, there are two fantastic ways
								to show your support! You can make a generous donation, directly
								fueling our mission to create positive change and transform
								lives. Alternatively, you can simply buy us a coffee – a small
								gesture that goes a long way in keeping our team energized and
								motivated to make a difference. Your choice, big or small, makes
								an immense impact on the lives we touch. Join hands with us
								today and be a part of our journey toward a better world!
							</p>
							<a href="#" className="default-link">
								discover more
							</a>
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
			</section>
			<Footer />
		</>
	);
};

export default AboutPage;
