import React from 'react';
import map from '../styles/img/thevenue/map.png';

const Venue = () => {
    return (
        <div id="theVenue">
            <div id="pageTitleContainer" class="clearfix" >
                <div class="leftFlower"></div>
                <div id="pageTitle">
                    <h2>THE</h2>
                    <h1>VENUE</h1>
                </div>
                <div class="rightFlower" ></div>
            </div>

            <div class="clearfix topBuffer">&nbsp;</div>

            <img src={map} id="map" />

            <div id="heldAt">
                The Best Day Ever is taking place at:
            </div>
            <div id="venueAddress">
                MARGAN FAMILY WINES<br />
                1238 Milbrodale Road,<br />
                Broke 2330<br />
                <a href="https://plus.google.com/108107205836775434879/about?gl=au&hl=en" target="_blank">
                    Click here for more information on getting there.
                </a>
            </div>
        </div>
    );
};

export default Venue;