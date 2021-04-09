import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovies } from "../Redux/Actions/movieActions";

export default function CurrentMovieList() {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [])


  return (
    <div className="row">
      {
        data.map((movie) => {
          return (
            <div key={movie.maPhim} className="col-4">
              <div className="card">
                <img className="card-img-top" src={movie.hinhAnh} alt />
                <div className="card-body">
                  <h4 className="card-title">{movie.tenPhim}</h4>
                  <p className="card-text">{movie.moTa}</p>
                </div>
              </div>

            </div>
          )
        })
      }
    </div>
  )
}
