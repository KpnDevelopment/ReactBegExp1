import React from 'react';
import './Service.css'
import ServiceCard from './ServicesCard'

function Service(){
    return(
        <div id="service" className="service-section">
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
        </div>
    )
}
export default Service; 