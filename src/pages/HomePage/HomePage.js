import React from "react";
import Banner from "../../components/Body/Banner/Banner";
import MovieSlides from "../../components/Body/MoiveSlides/MovieSlides";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AuthoriumSlide from "../../components/Body/authorium/AuthoriumSlide";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <MovieSlides />
      <AuthoriumSlide />
      <Footer />
    </div>
  );
}
