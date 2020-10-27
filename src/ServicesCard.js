import React from 'react';
import './ServiceCard.css'



function ServicesCard(props){
    let serstyle = {}
    return(
        <div className="service-section">
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <h3>loo</h3>
                        <h3>Mobile Application</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>
                            In a crowded market,<br/>
                             how does an app attract <br/>
                              new customers, gain loyalty, <br/>
                               and deliver value? <br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServicesCard;