import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Home.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import {useAuth0} from "@auth0/auth0-react";
import Profile from "./Profile";
function Homepage(props) {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <section className="header">
        <nav>
          <a href="web.html">
            <img src="https://iith.ac.in/assets/images/logo.png" />
          </a>
          <div className="nav-links">
         
            <ul>
              <li>
                {isAuthenticated && <Link to="/header">Dashboard</Link>}
              </li>

              <li>
              <Link to="/login">LOGIN</Link>
              </li>

              <li>
                <a href="file:///C:/Users/USMM%20TEJA/Desktop/html/code.html">CONTACT</a>
              </li>

              <li>
                 { isAuthenticated ? <LogoutButton /> : <LoginButton />}
                </li>
                <li>
                 {isAuthenticated&& <Profile></Profile>}
                </li>
            </ul>
          </div>
         
        </nav>
        <div className="text-box">
          <h1>IITH SURVEY SYSTEM</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quam
            officiis, beatae, temporibus esse <br /> nobis voluptatibus quidem
            provident nesciunt recusandae odit ad obcaecati! Incidunt,
            blanditiis.
          </p>
          <a href="https://iith.ac.in/" className="hero-btn">
            visit us to know more
          </a>
        </div>
      </section>

      <section className="course">
        <h1> Courses we offer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          voluptatum.
        </p>

        <div className="row">
          <div className="course-col">
            <h3>Intermediate</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              ullam consequatur perspiciatis delectus odio consectetur est
              architecto ea veniam dolorum.
            </p>
          </div>
          <div className="course-col">
            <h3>Degree</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              ullam consequatur perspiciatis delectus odio consectetur est
              architecto ea veniam dolorum.
            </p>
          </div>
          <div className="course-col">
            <h3>PostGraduation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              ullam consequatur perspiciatis delectus odio consectetur est
              architecto ea veniam dolorum.
            </p>
          </div>
        </div>
      </section>

      <section className="campus">
        <h1>Our Global Campus</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          sunt. Rem nobis optio eius.
        </p>

        <div className="row">
          <div className="campus-col">
            <img src="https://i.ytimg.com/vi/IUB9GvxS0uU/maxresdefault.jpg" />
            <div className="layer">
              <h3>Tohoku University</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src="https://tgu.mext.go.jp/en/universities/tohoku/img/mainimg.jpg" />
            <div className="layer">
              <h3>HOKKAIDO UNIVERSITY</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src="https://www.wallpaperup.com/uploads/wallpapers/2012/10/01/17611/8e6bf78f65ce82eea863b62189e6263c.jpg" />
            <div className="layer">
              <h3>RitsukimenUniversity</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus.
        </p>

        <div className="facilities-col">
          <img src="https://www.wallpaperflare.com/static/30/46/472/library-building-architecture-prague-wallpaper.jpg" />
          <h3>library</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            nostrum.
          </p>
        </div>
        <div className="facilities-col">
          <img src="https://pbs.twimg.com/media/FCF5cB_WEAsP_OR?format=jpg&name=large" />
          <h3>playground</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            nostrum.
          </p>
        </div>
        <div className="facilities-col">
          <img src="" />
          <h3>cafeteria area</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            nostrum.
          </p>
        </div>
      </section>

      <section className="testimonals">
        <h1>what our students say</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          voluptatem.
        </p>

        <div className="row">
          <div className="testimonals-col">
            <img src="images/user1.jpg" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae voluptates nihil omnis. Amet ab dolore dolorum autem
                quis vitae reprehenderit et. Eum laudantium pariatur dolores ex,
                accusantium ab in recusandae.
              </p>
              <h3>Christine Berkley</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="testimonals-col">
            <img src="images/user2.jpg" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae voluptates nihil omnis. Amet ab dolore dolorum autem
                quis vitae reprehenderit et. Eum laudantium pariatur dolores ex,
                accusantium ab in recusandae.
              </p>
              <h3>David Bayer</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="Heading">
          <h1> Contact Us</h1>
        </div>
        <div className="description"> We're here to help</div>
        <br />
        <br />
        <div className="row">
          <div className="course-col">
            <div className="phone">
            <img
              src="https://i.pinimg.com/564x/98/c8/28/98c828953930ca387b6c89c17c7df2c0.jpg"
              style={{ height: "30px", width: "30px" }}
            />
            </div>

            <h3>Phone Contact</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              ullam consequatur perspiciatis delectus odio consectetur est
              architecto ea veniam dolorum.
            </p>
          </div>
          <div className="course-col">
            <div className="whatsapp">
              <img
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
                style={{ height: "40px", width: "40px" }}
              />
            </div>
            <h3>Whatsapp</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              ullam consequatur perspiciatis delectus odio consectetur est
              architecto ea veniam dolorum.
            </p>
          </div>
          <div className="course-col">
            <div className="Gmail">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
              style={{ height: "30px", width: "40px" }}
            />
            </div>

            <h3>G-mail</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              ullam consequatur perspiciatis delectus odio consectetur est
              architecto ea veniam dolorum.
            </p>
          </div>
        </div>
      </section>

      <section className="footer">
        <h4>About Us</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit
          exercitationem illum ducimus <br /> voluptatibus aspernatur excepturi
          commodi necessitatibus cupiditate?
        </p>

      </section>
    </>
  );
}

export default Homepage;
