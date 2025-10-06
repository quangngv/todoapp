// Import các thư viện và tài nguyên cần thiết
import React from 'react'
import styles from './Register.module.css'        
import userIcon from '../../assets/login.png'      
import { Link, useNavigate } from 'react-router-dom' 
import { Input, Button } from 'antd'              
import { CloseOutlined } from '@ant-design/icons'  


function Register() {
  // Hook điều hướng để chuyển trang mà không cần tải lại
  const navigate = useNavigate()

  
  const [firstName, setFirstName] = React.useState("") 
  const [lastName, setLastName] = React.useState("")   
  const [username, setUsername] = React.useState("")  
  const [password, setPassword] = React.useState("")   

  return (
    <div className={styles.container}>
      <div className={styles.register__card}>
        {/* ✅ Nút “X” để quay lại trang chủ */}
        <button
          className={styles.close__btn}
          onClick={() => navigate('/')} // Khi nhấn sẽ quay lại trang "/"
        >
          <CloseOutlined /> {/* Icon từ Ant Design */}
        </button>

        {/* ✅ Ảnh minh họa và tiêu đề */}
        <img src={userIcon} alt="register" />
        <h4 className={styles.title}>Register</h4>
        <p className={styles.subtitle}>Create your account</p>

        {/* ✅ Hàng chứa 2 ô nhập Họ và Tên */}
        <div className={styles.name__row}>
          <Input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} // Lưu giá trị nhập vào state
            className={styles.customInput}
          />
          <Input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={styles.customInput}
          />
        </div>

        {/* ✅ Ô nhập Username */}
        <div className={styles.input__wrapper}>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.customInput}
          />
        </div>

        {/* ✅ Ô nhập Password */}
        <div className={styles.input__wrapper}>
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.customInput}
          />
        </div>

        {/* ✅ Nút đăng ký (Register) */}
        <Button
          type="primary"
          className={styles.register__btn}
          // Bạn có thể thêm sự kiện onClick để xử lý gửi dữ liệu (handleRegister)
        >
          Register
        </Button>

        {/* ✅ Gợi ý: Nếu đã có tài khoản thì chuyển sang trang Login */}
        <div className={styles.hint}>
          Existing User? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

// Xuất component để sử dụng ở nơi khác
export default Register
