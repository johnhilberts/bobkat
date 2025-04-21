import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <Outlet />
        <footer>
            <div class="clearfix">
                <div class="hr"></div>
                <a href="/" id="footerLink">www.bobkat.com.au</a>
                <div class="hr"></div>
            </div>
        </footer>
        <nav>
            <ul class="clearfix">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/story">THE STORY</Link>
                </li>
                <li>
                    <Link to="/day">THE DAY</Link>
                </li>
                <li>
                    <Link to="/venue">THE VENUE</Link>
                </li>
                <li>
                    <Link to="/photos">THE PHOTOS</Link>
                </li>
            </ul>
            <img id="footerFlowers" src="../img/flowers.png" alt="" />
        </nav>


    </>
  )
};
export default Layout;