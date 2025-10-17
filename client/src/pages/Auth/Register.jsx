// Import các thư viện và tài nguyên cần thiết
import React from 'react'
import styles from './Register.module.css'        
import userIcon from '../../assets/login.png'      
import { Link, useNavigate } from 'react-router-dom' 
import { Input, Button } from 'antd'              
import { CloseOutlined } from '@ant-design/icons'  
import AuthServices from '../../services/authServices.js'
import { message } from 'antd';


function Register() {
  // Hook điều hướng để chuyển trang mà không cần tải lại
  const navigate = useNavigate()

  
  const [firstName, setFirstName] = React.useState("") 
  const [lastName, setLastName] = React.useState("")   
  const [username, setUsername] = React.useState("")  
  const [password, setPassword] = React.useState("")   
  const [loading, setLoading] = React.useState(false) 

   const handleSubmit = async () => {
    console.log("register");
    try {
      setLoading(true); // Bắt đầu quá trình đăng nhập, hiển thị vòng xoay
      let data ={
        firstName,
        lastName,
        username,
        password
      }
      const response = await AuthServices.registerUser(data);
      console.log(response.data);
      localStorage.setItem("toDoAppUser", JSON.stringify(response.data));
      message.success("Register successful");
      navigate('/to-do-list'); // Chuyển về trang chủ sau khi đăng nhập thành công
      setLoading(false); // Kết thúc quá trình, ẩn vòng xoay
    } catch (error) {
      console.log()
      message.error(error.message);
      setLoading(false); // Kết thúc quá trình, ẩn vòng xoay
    }
  }
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
          loading={loading}      // Hiển thị vòng xoay khi đang xử lý
          onClick={handleSubmit} 
          type="primary"
          className={styles.register__btn}
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
