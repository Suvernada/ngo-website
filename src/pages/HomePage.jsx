import React from "react";
import Counter from "../components/counter/Counter";
import DonationModal from "../components/donation/DonationModal";
import Causes from "../components/causes/Causes";
import ContactUs from "../components/contact/ContactUs";
import MilletEvent from "../components/events/MilletEvent";
import PartnerCarousel from "../components/partners/PartnerCarousel";
import Header from "../components/header/Header";
import Carousel from "../components/carousel/Carousel";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

const HomePage = () => {
    return (
        <>
            <Header />
            <Carousel />
            <About />
            <Causes />
            <MilletEvent />
            {/* <PartnerCarousel/> */}
            <ContactUs />
            <Footer />
        </>
    );
};

export default HomePage;
