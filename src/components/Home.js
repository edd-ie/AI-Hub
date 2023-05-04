import './Home.css'
import React from 'react';
import { Link } from "react-router-dom";

export default function Login(){



    return(
        <main>
            <div className="container">
                <div className="wave">
                    <img src={require("../images/bg.png")} alt=""/>
                </div>

                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/chat">Chat</Link></li>
                        <li><Link to="/book">Summmary</Link></li>
                    </ul>
                    <img id="logo" src="https://img.icons8.com/ios-filled/100/null/artificial-intelligence.png" alt=""/>
                </nav>

                <div className="main-content">

                    <div className="image-pista">
                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide"><img src={require("../images/bmo.png")} alt=""/></div>
                                <div className="swiper-slide"><img src={require("../images/paint.png")} alt=""/></div>
                                <div className="swiper-slide"><img src={require("../images/book.png")} alt=""/></div>
                            </div> 
                        </div>
                    </div>
                    <div className="main-text">
                        <h1>AI HUB</h1>
                        <p>The convergence of various artificial intelligence models & capabilities.</p>
                        <button>Know More</button>
                    </div>
                </div>

                <div className="right">
                    <div className="box">
                        <Link to="/chat">
                            <div className="image">
                                <img src={require("../images/bmo.png")} alt=""/>
                            </div>
                        </Link>
                        <div className="inner-box">
                            <h3>Chat</h3>
                            <p>Have a conversation.</p>
                        </div>
                    </div>
                    <div className="box">
                        
                            <div className="image">
                                <img src={require("../images/paint.png")} alt=""/>
                            </div>
                        <div className="inner-box">
                            <h3>Art</h3>
                            <p>Generate art.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={require("../images/book.png")} alt=""/>
                        </div>
                        <div className="inner-box">
                            <h3>Summmary</h3>
                            <p>Scale down large information</p>
                        </div>
                    </div>
                </div>

                <div className="social-links">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="far fa-envelope"></i>
                </div>
            </div>
        </main>
    )
}