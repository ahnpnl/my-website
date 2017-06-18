import React, { Component } from 'react';
import Header from "./Header";
import Features from "./Features";
import Meals from "./Meals";
import Steps from "./Steps";
import Cities from "./Cities";
import Testimonials from "./Testimonials";
import Plans from "./Plans";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Features />
                <Meals />
                <Steps />
                <Cities />
                <Testimonials />
                <Plans />
                <ContactForm />
                <Footer />
            </div>
        )
    }
}
