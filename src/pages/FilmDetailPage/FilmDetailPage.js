import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { userServices } from "../../services/ApiServices/userServices";
import FilmDetail from "./FilmDetail";
export default function FilmDetailPage() {
  let [content, setContent] = useState({});
  let { maPhim } = useParams();
  useEffect(() => {
    userServices
      .getDetailFilmByID(maPhim)
      .then((res) => {
        console.log(res);
        setContent(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <FilmDetail content={content} />
      <Footer />
    </div>
  );
}
