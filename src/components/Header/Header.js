import React, { Component } from "react";

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
              <a
                href="#"
                className="leading-6 rounded-md bg-red-500 text-white py-1 px-3 mr-1"
              >
                Login
              </a>
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
              <a href="#">
                <img src="./image/logo.png" alt="" />
              </a>
            </div>
            <nav className="">
              <ul className="font-bold flex flex-row ">
                <li>
                  <a
                    className="py-4 text-lg hover:border-b-2 hover:text-red-500 border-red-500"
                    href="#/film/index"
                  >
                    Movies
                  </a>
                </li>
                <li>
                  <a
                    className="py-4 text-lg hover:border-b-2 hover:text-red-500 border-red-500"
                    href="#/sell/index"
                  >
                    Food & Beverage
                  </a>
                </li>
                <li>
                  <a
                    className="py-4 text-lg hover:border-b-2 hover:text-red-500 border-red-500"
                    href="#/experience/index"
                  >
                    Experiences
                  </a>
                </li>
                <li>
                  <a
                    className="py-4 text-lg hover:border-b-2 hover:text-red-500 border-red-500"
                    href="#/other/activity"
                  >
                    Promotions
                  </a>
                </li>
                <li>
                  <a
                    className="py-4 text-lg hover:border-b-2 hover:text-red-500 border-red-500"
                    href="#/event/index"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    className="py-4 text-lg text-yellow-500 hover:border-b-2 hover:text-yellow-500 border-yellow-500"
                    href="#/other/U"
                  >
                    U+
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
