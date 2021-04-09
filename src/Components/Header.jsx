import React from 'react'

import { Search, Person } from 'react-bootstrap-icons'
export default function Header() {
  return (
    <header className="container">
      <div className="header__logo">
        <img className="h-100 w-100" src="./img/galaxy-logo.jpg" alt="logo" />
      </div>

      {/* Thanh tìm kiếm */}
      <div className="header__search input-append col-md-4">
        <input className="form-control py-2" type="search" placeholder="Tìm tên diễn viên, phim..." />

        <button className="btn-search" type="button">
          <Search />

        </button>
      </div>

      {/* Phần đăng nhập và chọn ngôn ngữ */}
      <div className="header__login row">
        <div className="login__group">
          <Person className="person-icon"/>
          <button className="btn__login mr-3">Đăng nhập</button>
        </div>

        <span>VN<span className="m-1">|</span>ENG</span>


      </div>

    </header>
  )
}
