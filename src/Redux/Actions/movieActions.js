import { GET_MOVIES } from "../Constants/movieConstants";
import axios from "axios";

export const getMovies = () =>{
  return async (dispatch) => {
    const {data} = await axios({
      method: "GET",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07",
    })

    dispatch({
      type: GET_MOVIES,
      payload: {data},
    })
  }
}