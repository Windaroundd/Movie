import { https } from "./configURL";

export const userServices = {
  postLogin: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
  getMovieList: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03");
  },
  getBannerList: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
  getDetailFilmByID: (id) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
};
