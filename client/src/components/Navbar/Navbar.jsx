import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar({ active, lang }) {
  return (
    <header>
      <nav> 
        <Link to="/" className="logo_wrapper" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={logo} alt="logo" />
          <h4>TODOLIST</h4>
        </Link>

        <ul className="navigation-menu">
          <li>
            <Link to="/" className={active === 'home' ? 'activeNav' : ''}>
              {lang === "en" ? "Home" : "Trang chủ"}
            </Link>
          </li>
          <li>
            <Link to="/login">
              {lang === "en" ? "Login" : "Đăng nhập"}
            </Link>
          </li>
          <li>
            <Link to="/register">
              {lang === "en" ? "Register" : "Đăng ký"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
