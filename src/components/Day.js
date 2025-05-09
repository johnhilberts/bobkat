import React from 'react';
import margan from '../styles/img/theday/margan.png';

const Day = () => {
    return (
        <div id="theday">
            <div id="pageTitleContainer" class="clearfix" >
                <div class="leftFlower"></div>
                <div id="pageTitle">
                    <h2>THE</h2>
                    <h1>DAY</h1>
                </div>
                <div class="rightFlower" ></div>
            </div>

            <div class="clearfix topBuffer">&nbsp;</div>

            <div id="thePlan">
                <div class="hr"></div>
                <div>The Plan</div>
                <div class="hr"></div>
            </div>

            <div id="theDayContainer">
                <div id="marganImage">
                    <img src={margan} alt="Margan Family Wines" />
                </div>
                <div id="order">
                    <div class="time">- 4:00<span class="timeframe">PM</span> -</div>
                    <div class="activity">Free Coach Pickup <br /> from Crowne Plaza</div>

                    <div class="time">- 5:00<span class="timeframe">PM</span> -</div>
                    <div class="activity">Ceremony</div>

                    <div class="time">- 6:30<span class="timeframe">PM</span> -</div>
                    <div class="activity">Games & Canap&eacute;s</div>

                    <div class="time">- 7:30<span class="timeframe">PM</span> -</div>
                    <div class="activity">Food</div>

                    <div class="time">- 8<span class="timeframe">PM</span> -</div>
                    <div class="activity">More Food</div>

                    <div class="time">- 9<span class="timeframe">PM</span> -</div>
                    <div class="activity">Speeches</div>

                    <div class="time">- 9:05<span class="timeframe">PM</span> -</div>
                    <div class="activity">Dessert</div>

                    <div class="time">- 9:30<span class="timeframe">PM</span>-12:30<span class="timeframe">AM</span> -</div>
                    <div class="activity">Celebrations</div>
                </div>
            </div>
        </div>
    );
};

export default Day;