import React from "react";
import Navbar from "./Navbar/Navbar";
import './App.css'

import Articles from "./Articles/Article";
import Header from "./Header/Header";
import Section from "./Section/Section";
import Footer from "./Footer/Footer";

const EasyBanking = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Section />
            <Articles />
            <Footer />
        </div>
    )
}

export default EasyBanking;