import React from "react";

const Header = () => (
    <header>
        <nav>
            <div className="row">
                <img src={require(`../assets/img/logo-white.png`)} alt="Omnifood logo" className="logo" />
                <img src={require(`../assets/img/logo.png`)} alt="Omnifood logo" className="logo-black" />
                <ul className="main-nav">
                    <li><a href="#features">Food delivery</a></li>
                    <li><a href="#works">How it works</a></li>
                    <li><a href="#cities">Our cities</a></li>
                    <li><a href="#plans">Sign up</a></li>
                </ul>
                <a className="mobile-nav-icon"><i className="ion-navicon-round"></i></a>
            </div>
        </nav>
        <div className="hero-text-box">
            <h1>Goodbye junk food.<br />Hello super healthy meals.</h1>
            <a className="btn btn-full" href="">I'm hungry</a>
            <a className="btn btn-ghost" href="">Show me more</a>
        </div>
    </header>
)

export default Header