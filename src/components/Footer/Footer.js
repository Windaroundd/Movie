import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className=" container pt-14">
          <div className="footer-wrap">
            <div className="footer-top">
              <div className="footer-left flex justify-between text-gray-400">
                <ul>
                  <li className="text-white text-xl pb-7">
                    <Link>Movies</Link>
                  </li>
                  <li className="pb-4">
                    <Link>Now Showing</Link>
                  </li>
                  <li className="pb-4">
                    <Link>Coming Soon</Link>
                  </li>
                </ul>
                <ul>
                  <li className="text-white text-xl pb-7">
                    <Link>Promotions</Link>
                  </li>
                  <li className="pb-4">
                    <Link>Promotions</Link>
                  </li>
                  <li className="pb-4">
                    <Link>Announcements</Link>
                  </li>
                </ul>
                <ul>
                  <li className="text-white text-xl pb-7">
                    <Link>Experiences</Link>
                  </li>
                  <li className="pb-4">
                    <Link>Star+</Link>
                  </li>
                  <li className="pb-4">
                    <Link>Star Max</Link>
                  </li>
                  <li className="pb-4">
                    <Link>Lil Star</Link>
                  </li>
                  <li className="pb-4">
                    <Link>Café La Croisette</Link>
                  </li>
                </ul>
                <ul>
                  <li className="text-white text-xl pb-7">
                    <Link>Events</Link>
                  </li>
                  <li className="pb-4">
                    <Link>Private Event</Link>
                  </li>
                  <li className="pb-4">
                    <Link>Celebration</Link>
                  </li>
                  <li>
                    <Link>Corporate Event</Link>
                  </li>
                </ul>
                <ul>
                  <li className="text-white text-xl pb-7">
                    <Link>Find Out More</Link>
                  </li>
                  <li className="pb-4">
                    <Link>About Us</Link>
                  </li>
                  <li className="pb-4">
                    <Link>Location</Link>
                  </li>
                  <li className="pb-4">
                    <Link>Career</Link>
                  </li>
                  <li className="pb-4">
                    <Link>Contact Us</Link>
                  </li>
                  <li className="pb-4">
                    <Link>FAQ</Link>
                  </li>
                </ul>
                <ul>
                  <li className="text-white text-xl pb-7">
                    <Link>Follow us</Link>
                  </li>
                  <div className="flex ml-3 justify-start">
                    <Link
                      href="https://www.facebook.com/dadicinema"
                      target="_blank"
                      className="fab fa-facebook-square text-4xl ml-4 mr-2 hover:text-red-500  "
                    ></Link>

                    <Link
                      href="https://www.instagram.com/dadicinema_my/"
                      target="_blank"
                      className="fab fa-instagram text-4xl hover:text-red-500 "
                    ></Link>
                  </div>
                </ul>
              </div>
              <div className="footer-right"></div>
            </div>
            <div className="footer-bot flex justify-between pb-10">
              <div className="text-gray-400">
                <p className="footer-bot_left">
                  <Link>Privacy Policy</Link>
                  <span className="mx-4">|</span>
                  <Link>Term & Condition</Link>
                  <span className="mx-4">|</span>
                  <Link>Disclaimers</Link>
                  <span className="mx-4">|</span>
                  <span className="items-center">
                    Clone by:
                    <Link
                      className="text-red-600 ml-4"
                      href="https://www.facebook.com/addmeheree"
                      target="_blank"
                    >
                      HUYNH QUANG MINH PHONG
                    </Link>{" "}
                  </span>
                </p>
              </div>
              <div className="ml-8">
                <Link to="/">
                  <img className="w-3/5" src="./image/logo.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
