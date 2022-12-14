import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Movies from "./components/Body/Movies/Movies";
import NotFound from "./pages/NotFound/NotFound";
import LoginPage from "./pages/LoginPage/LoginPage";
import FilmDetailPage from "./pages/FilmDetailPage/FilmDetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="detail/:maPhim" element={<FilmDetailPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
