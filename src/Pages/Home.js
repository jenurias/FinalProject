import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Components/Carousel";
import "../Styles/Home.css";
import Button from "react-bootstrap/Button";


function Home() {
    return (
        <div>
            <Carousel />
            <section className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="main-heading1">Squeaky Clean Groomers</h1>
                            <h4>Treat your pet to the pampering they deserve!</h4>
                            <Link to="/contact">
                                <Button variant="outline-info">Schedule Appointment</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;