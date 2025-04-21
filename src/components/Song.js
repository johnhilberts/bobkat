import React from 'react';
import double from '../styles/img/thesong/double.png';
import tissues from '../styles/img/thestory/tissues.png';
import battery from '../styles/img/thestory/battery.png';
import movies from '../styles/img/thestory/movies.png';
import fiveYears from '../styles/img/thestory/5years.png';
import song from '../styles/img/thestory/song.png';
import couple from '../styles/img/thestory/couple.png';


const Song = () => {
    return (
        <div id="thSong">
            <div id="pageTitleContainer" class="clearfix" >
                <div class="leftFlower"></div>
                <div id="pageTitle">
                    <h2>THE</h2>
                    <h1>SONG</h1>
                </div>
                <div class="rightFlower" ></div>
            </div>

            <div class="clearfix topBuffer">&nbsp;</div>

            <div class="storySection">
                <div class="leftImage">
                    <img src={double} alt="Music" />
                </div>
                <div class="storyText">
                    This one's for you my bride<br />
                    You look so lovely,<br />
                    As we're starting our life,<br />
                    Together we'll be,<br />
                    'Til death do us part,<br />
                    My lovely, I give you my heart,<br />
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
                    This one's for you my love,<br />
                    I promise to love you,<br />
                    Like the man from above,<br />
                    I lay down my life,<br />
                    For you my queen,<br />
                    I'll try to be all that you need,<br />
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
                    I won't leave nor forsake,<br />
                    Or abandon you,<br />
                    Instead I will love you,<br />
                    And always be true,<br />
                    I promise you this,<br />
                    Til the day that I die,<br />
                    <br />
                    Just give me your hand,<br />
                    And I'll give you my life<br />
                    <br />
                </div>
                <div class="rightImage">
                    <img src={song} alt="" />
                </div>
                <div class="clearfix">&nbsp;</div>
            </div>

            <div class="storySection">
                <div class="leftImage"> &nbsp;</div>
                <div class="storyText">
                    I know that you're scared,<br />
                    Just know I am too,<br />
                    But know that together,<br />
                    I know we'll get through,<br />
                    Through love and loss,<br />
                    My heart will remain,<br />
                    <br />
                </div>
                <div class="clearfix">&nbsp;</div>
            </div>

            <div class="storySection">
                <div class="leftImage">
                    <img src={tissues} alt="So many tears at Margan" />
                </div>
                <div class="storyText">
                    I won't leave nor forsake,<br />
                    Or abandon you,<br />
                    Instead I will love you,<br />
                    And always be true,<br />
                    I promise you this,<br />
                    Til the day that I die,<br />
                    <br />
                    Just give me your hand,<br />
                    And I'll give you my life,<br />
                </div>
                <div class="rightImage">
                    &nbsp;
                </div>
                <div class="clearfix">&nbsp;</div>
            </div>

            <div class="storySection finalStory">
                <img src={couple} alt="Complete" />
            </div>
        </div>
    );
};

export default Song;