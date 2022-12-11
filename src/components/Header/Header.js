import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./headerStyle.css";

export default class Header extends Component {
  render() {
    return (
      <div className="bg-black">
        <div className="container text-white ">
          <div className="top-header flex justify-end items-center text-gray-500 py-3">
            <i className="fa fa-map-marker-alt" />
            <div className="ml-2 mr-2 ">Destination</div>
            <i className="fa fa-chevron-down" />
            <div className="top-login ml-5 pl-5 border-l-2 border-gray-500">
              <Link
                to=""
                className="leading-6 rounded-md bg-red-500 text-white py-1 px-3 mr-1"
              >
                Login
              </Link>
            </div>
            <div className="top-share ">
              <a
                href="https://www.facebook.com/dadicinema"
                target="_blank"
                className="fab fa-facebook-square fa-xl ml-4 mr-2 hover:text-red-500  "
              ></a>
              <a
                href="https://www.instagram.com/dadicinema_my/"
                target="_blank"
                className="fab fa-instagram fa-xl hover:text-red-500 "
              ></a>
            </div>
          </div>
          <div className="bot-header flex justify-between items-center pb-2">
            <div className="header-logo">
              <Link to="/">
                <img src="./image/logo.png" alt="" />
              </Link>
            </div>
            <nav className="">
              <ul className="font-bold flex flex-row ">
                <li>
                  <Link
                    className="py-4 text-lg hover:border-b-2 hover:text-red-500 border-red-500"
                    to="movies"
                  >
                    Movies
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-4 text-lg hover:border-b-2 hover:text-red-500 border-red-500"
                    to="#/sell/index"
                  >
                    Food & Beverage
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-4 text-lg hover:border-b-2 hover:text-red-500 border-red-500"
                    to="#/experience/index"
                  >
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-4 text-lg hover:border-b-2 hover:text-red-500 border-red-500"
                    to="#/other/activity"
                  >
                    Promotions
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-4 text-lg hover:border-b-2 hover:text-red-500 border-red-500"
                    to="#/event/index"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-4 text-lg text-yellow-500 hover:border-b-2 hover:text-yellow-500 border-yellow-500"
                    to="#/other/U"
                  >
                    U+
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
