import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function NotFound() {
  return (
    <div>
      <Header />
      <div className="py-16 bg-black">
        <div>
          <div
            className="flex justify-center items-center"
            style={{ height: "390px" }}
          >
            <div>
              {" "}
              <img
                src="https://www.dadi.my/static/404.png"
                className="w-24 h-24"
                alt=""
              />
              <p className="text-white text-center mt-2">No Data</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
