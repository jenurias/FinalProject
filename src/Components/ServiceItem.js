import React from "react";

function ServiceItem({ image, name, price }) {
    return (
        <div className="serviceItem">
            <div style={{ backgroundImage: `url(${image})`}}> </div>
            <h3> {name} </h3>
            <p> {price} </p>
        </div>
    );
}

export default ServiceItem;