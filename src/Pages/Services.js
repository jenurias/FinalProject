import React from "react";
import { renderMatches } from "react-router-dom";
import { ServicesList } from "../Addtl/ServicesList";
import ServiceItem from "../Components/ServiceItem";
import "../Styles/Services.css";

function Services() {
    return (
        <div className="services">
            <h1 className="servicesTitle">Our Services</h1>
            <div className="servicesList">
                {ServicesList.map((serviceItem, key) => {
                    return(
                        <ServiceItem 
                            key={key}
                            image={serviceItem.image}
                            name={serviceItem.name}
                            price={serviceItem.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Services; 