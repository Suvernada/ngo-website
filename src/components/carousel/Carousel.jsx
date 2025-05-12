import React from "react";
import banner1 from "../../images/children.jpeg";
import banner2 from "../../images/education.jpg";
import "./carousel.css";
import formpic2 from "../../images/may3.jpg";
import formpic3 from "../../images/may4.jpg";
import formpic4 from "../../images/1Aug4.jpg";
import formpic5 from "../../images/1Aug5.jpg";
import formpic6 from "../../images/1Aug6.jpg";
import formpic7 from "../../images/1Aug7.jpg";
import formpic8 from "../../images/1Aug8.jpg";
import timetable1 from "../../images/may1.jpg";
import timetable2 from "../../images/may2.jpg";
const Carousel = () => {
	return (
		<>
			<div
				id="topHomepageCarousel"
				className="carousel slide carousel-fade"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={banner1} className="d-block w-100" alt="banner-1" />
						<div className="carousel-caption d-none d-md-block text-start">
							<h1 className="carousel-heading">Suvernada Foundation</h1>
							<h1 className="carousel-heading">Feel the difference</h1>
							<p>Lets make the world a better place.</p>
							<button
								className="btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#donationModal"
							>
								Donate now
							</button>
						</div>
					</div>
					<div className="carousel-item">
						<img src={banner2} className="d-block w-100" alt="banner-1" />
						<div className="carousel-caption d-none d-md-block text-start">
							<h1 className="carousel-heading">Welcome to</h1>
							<h1 className="carousel-heading">Suvernada Foundation</h1>
							<p>Lets make the world a better place.</p>
							<button
								className="btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#donationModal"
							>
								Donate now
							</button>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#topHomepageCarousel"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#topHomepageCarousel"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<p style={{ width: "80vw", margin: "5% auto" }}>
				Stay fit! Join Suvernada Foundation's online certificate course,
				starting from June 2, 2025. Learn how to maintain health
			</p>
			<div className="d-flex justify-content-evenly mt-3 flex-wrap notice">
				<a href="https://forms.gle/gYCdpfoiUJxpWjjB7" className="feedback1">
					<img
						src={formpic2}
						alt="poster"
						className="feedbackImage"
						style={{ padding: "0 !important", margin: "0 auto 15px" }}
					/>
				</a>
                <a href="https://forms.gle/gYCdpfoiUJxpWjjB7" className="feedback1">
					<img
						src={formpic3}
						alt="poster"
						className="feedbackImage"
						style={{ padding: "0 !important", margin: "0 auto 15px" }}
					/>
				</a>
			</div>
			<div className="d-flex justify-content-evenly mt-3 flex-wrap notice">
				<a href="https://forms.gle/gYCdpfoiUJxpWjjB7" className="feedback1">
					<img
						src={timetable1}
						alt="poster"
						className="feedbackImage"
						style={{
							padding: "0 !important",
							margin: "0 auto 15px",
							height: "70vh",
						}}
					/>
				</a>
				<a href="https://forms.gle/gYCdpfoiUJxpWjjB7" className="feedback1">
					<img
						src={timetable2}
						alt="poster"
						className="feedbackImage"
						style={{ margin: "0 auto 15px", height: "70vh" }}
					/>
				</a>
			</div>
			{/* <div className="d-flex justify-content-center mt-3">
                <a href="https://forms.gle/kRZq13RGvZthwFfK8" style={{ display: "flex", flexDirection: "column" }}>
                    <iframe
                        className="pdfwidth"
                        src={pdf1 + "#toolbar=0&navpanes=0&scrollbar=0"} // Use parameters to hide sidebar and toolbar
                        width="800px"
                        height="1200px"
                        style={{ border: "none" }}
                    />
                </a>
            </div> */}
			{/* <div className="d-flex justify-content-evenly flex-wrap mt-3">
				<a
					href="https://forms.gle/kRZq13RGvZthwFfK8"
					className="feedback"
					style={{ display: "flex" }}
				>
					<img
						src={formpic3}
						alt="poster"
						className="feedbackImage"
						style={{ margin: "0 auto 15px" }}
					/>
				</a>
				<a
					href="https://forms.gle/kRZq13RGvZthwFfK8"
					className="feedback"
					style={{ display: "flex" }}
				>
					<img
						src={formpic4}
						alt="poster"
						className="feedbackImage"
						style={{ margin: "0 auto 15px" }}
					/>
				</a>
				<a
					href="https://forms.gle/kRZq13RGvZthwFfK8"
					className="feedback"
					style={{ display: "flex" }}
				>
					<img
						src={formpic5}
						alt="poster"
						className="feedbackImage"
						style={{ margin: "0 auto 15px" }}
					/>
				</a>
				<a
					href="https://forms.gle/kRZq13RGvZthwFfK8"
					className="feedback"
					style={{ display: "flex" }}
				>
					<img
						src={formpic6}
						alt="poster"
						className="feedbackImage"
						style={{ margin: "0 auto 15px" }}
					/>
				</a>
				<a
					href="https://forms.gle/kRZq13RGvZthwFfK8"
					className="feedback"
					style={{ display: "flex" }}
				>
					<img
						src={formpic7}
						alt="poster"
						className="feedbackImage"
						style={{ maxWidth: "100%", margin: "0 auto 15px" }}
					/>
				</a>
				<a
					href="https://forms.gle/kRZq13RGvZthwFfK8"
					className="feedback"
					style={{ display: "flex" }}
				>
					<img
						src={formpic8}
						alt="poster"
						className="feedbackImage"
						style={{ maxWidth: "100%", margin: "0 auto 15px" }}
					/>
				</a>
			</div> */}
		</>
	);
};

export default Carousel;
