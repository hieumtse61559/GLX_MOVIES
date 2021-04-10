import React from 'react'

export default function Navbar() {
  return (
    <nav className="nav__container">
      
        <ul className="nav__list">
          <li className="nav-item active">
            <a className="nav-link" href="#">MUA VÉ <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              PHIM
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Phim 1</a>
              <a className="dropdown-item" href="#">Phim 2</a>
              <a className="dropdown-item" href="#">Phim 3</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              GÓC ĐIỆN ẢNH
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">THỂ LOẠI PHIM</a>
              <a className="dropdown-item" href="#">DIỄN VIÊN</a>
              <a className="dropdown-item" href="#">ĐẠO DIỄN</a>
              <a className="dropdown-item" href="#">BÌNH LUẬN PHIM</a>
              <a className="dropdown-item" href="#">BLOG ĐIỆN ẢNH</a>

            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              SỰ KIỆN
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">ƯU ĐÃI</a>
              <a className="dropdown-item" href="#">PHIM HAY THÁNG</a>

            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">RẠP/GIÁ VÉ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">HỖ TRỢ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">THÀNH VIÊN</a>
          </li>
          
        </ul>
      
    </nav>

  )
}
