import React from 'react';
import mozart from '../styles/img/thestory/mozart.png';
import tissues from '../styles/img/thestory/tissues.png';
import battery from '../styles/img/thestory/battery.png';
import movies from '../styles/img/thestory/movies.png';
import fiveYears from '../styles/img/thestory/5years.png';
import song from '../styles/img/thestory/song.png';
import couple from '../styles/img/thestory/couple.png';
import knee from '../styles/img/thestory/knee.png';


const Story = () => {
    return (
        <div id="theStory">
            <div id="pageTitleContainer" class="clearfix" >
                <div class="leftFlower"></div>
                <div id="pageTitle">
                    <h2>THE</h2>
                    <h1>STORY</h1>
                </div>
                <div class="rightFlower" ></div>
            </div>

            <div class="clearfix topBuffer">&nbsp;</div>

            <div class="storySection">
                <div class="leftImage">
                    <img src={mozart} alt="Mozart" />
                </div>
                <div class="storyText">
                    It started with Mozart<br />
                    But ended in tears<br />
                    So separate they went<br />
                    For several years
                </div>
                <div class="rightImage">
                    <img src={tissues} alt="Tissues" />
                </div>
                <div class="clearfix">&nbsp;</div>
            </div>

            <div class="storySection">
                <div class="leftImage">
                    <img src={battery} alt="Battery" />
                </div>
                <div class="storyText">
                    One dying battery<br />
                    Ignited a spark<br />
                    Taken to the movies<br />
                    Taken from the start
                </div>
                <div class="rightImage">
                    <img src={movies} alt="Movies" />
                </div>
                <div class="clearfix">&nbsp;</div>
            </div>

            <div class="storySection">
                <div class="leftImage">
                    <img src={fiveYears} alt="5 Years" />
                </div>
                <div class="storyText">
                    At 5 years together<br />
                    He sang her a song<br />
                    The timing was right<br />
                    Though the notes were all wrong
                </div>
                <div class="rightImage">
                    <img src={song} alt="Sang her a song" />
                </div>
                <div class="clearfix">&nbsp;</div>
            </div>

            <div class="storySection">
                <div class="leftImage lastLeftImage">
                    <img src={knee} alt="Down on one knee" />
                </div>
                <div class="storyText lastStoryText">
                    Got down on one knee<br />
                    And spoke those four words<br />
                    With tears in her eyes<br />
                    She completed his world
                </div>
                <div class="clearfix">&nbsp;</div>
            </div>
            <div class="storySection finalStory">
                <img src={couple} alt="Complete" />
            </div>
        </div>
    );
};

export default Story;