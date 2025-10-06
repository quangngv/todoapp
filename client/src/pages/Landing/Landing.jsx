import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Landing.module.css';
import { Link } from 'react-router-dom';
import landing from '../../assets/Landing.png';

function Landing() {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "vi" : "en"));
  };

  return (
    <div>
      {/* ✅ Navbar nhận lang */}
      <Navbar active={"home"} lang={lang} />

      <div className={styles.landing_wrapper}>
        {/* Text bên trái */}
        <div className={styles.landing_text}>
          <h1>
            {lang === "en"
              ? "Schedule Your Daily Tasks With TODOLIST!"
              : "Lên lịch công việc hằng ngày cùng TODOLIST!"}
          </h1>

          {/* Buttons */}
          <div className={styles.btnWrapper}>
            <Link to="/register" className={styles.primaryBtn}>
              {lang === "en" ? "Register" : "Đăng ký"}
            </Link>
            <Link to="/login" className={styles.secondaryBtn}>
              {lang === "en" ? "Login" : "Đăng nhập"}
            </Link>
          </div>
        </div>

        {/* Ảnh bên phải */}
        <div className={styles.landing_img}>
          <img src={landing} alt="landing" />
        </div>
      </div>

      {/* ✅ Nút đổi ngôn ngữ (cố định ở góc phải dưới) */}
      <button onClick={toggleLang} className={styles.langBtn}>
        {lang === "en" ? "Tiếng Việt" : "English"}
      </button>
      <footer className={styles.footer}>
  <p><strong>© 2025 Quang. All rights reserved.</strong></p>
  <p>
    Contact:
    <a href="mailto:quanghot31lao@gmail.com"> quanghot31lao@gmail.com</a> |
    <a href="https://github.com/quangngv" target="_blank" rel="noopener noreferrer"> GitHub</a>
  </p>
</footer>

    </div>
    
  );
}

export default Landing;
