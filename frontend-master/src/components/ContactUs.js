import React from "react";
import "./ContactUs.css";
import TemporaryDrawer from "./TemporaryDrawer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section class="course">
        <div class="Heading">
          <h1> Contact Us</h1>
        </div>
        <div class="description"> We're here to help</div>
        <br />
        <br />
        <div class="row">
          <div class="course-col">
            <img
              src="https://i.pinimg.com/564x/98/c8/28/98c828953930ca387b6c89c17c7df2c0.jpg"
              style="height: 30px;width: 30px;"
            />
            <h3>Phone Contact</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              ullam consequatur perspiciatis delectus odio consectetur est
              architecto ea veniam dolorum.
            </p>
          </div>
          <div class="course-col">
            <div>
              <img
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
                style="height: 40px;width: 40px;"
              />
            </div>
            <h3>Whatsapp</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              ullam consequatur perspiciatis delectus odio consectetur est
              architecto ea veniam dolorum.
            </p>
          </div>
          <div class="course-col">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
              style="height: 30px;width: 40px;"
            />

            <h3>G-mail</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              ullam consequatur perspiciatis delectus odio consectetur est
              architecto ea veniam dolorum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
