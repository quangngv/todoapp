
import React from 'react'
import styles from './Login.module.css'         
import login from '../../assets/login.png'     
import { Link, useNavigate } from 'react-router-dom' 
import { Button, Input, message } from 'antd'           
import { CloseOutlined } from '@ant-design/icons'
import AuthServices from '../../services/authServices.js' 

function Login() {
 
  const [username, setUsername] = React.useState("") 
  const [password, setPassword] = React.useState("")  
  const [loading, setLoading] = React.useState(false) 

  // Hook điều hướng (dùng để chuyển trang không cần reload)
  const navigate = useNavigate()

  // Hàm xử lý khi người dùng nhấn nút “Login”
  const handleSubmit = async () => {
    console.log("login");
    try {
      setLoading(true); // Bắt đầu quá trình đăng nhập, hiển thị vòng xoay
      let data ={
        username,
        password
      }
      const response = await AuthServices.loginUser(data);
      console.log(response.data);
      localStorage.setItem("toDoAppUser", JSON.stringify(response.data));
      message.success("Login successful");
      navigate('/to-do-list'); // Chuyển về trang chủ sau khi đăng nhập thành công
      setLoading(false); // Kết thúc quá trình, ẩn vòng xoay
    } catch (error) {
      console.log()
      message.error(error.message);
      setLoading(false); // Kết thúc quá trình, ẩn vòng xoay
    }
  }

  // JSX — phần giao diện
  return (
    <div className={styles.container}>
      <div className={styles.login__card}>
        {/* Nút “X” để quay lại trang chủ */}
        <button 
          className={styles.close__btn} 
          onClick={() => navigate('/')} // Khi click sẽ chuyển về trang "/"
        >
          <CloseOutlined />  {/* Icon từ Ant Design */}
        </button>

        {/* Hình minh họa và tiêu đề */}
        <img src={login} alt="login" />
        <h2 className={styles.title}>Login</h2>
        
        {/* Ô nhập Username */}
        <div className={styles.input__wrapper}>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Cập nhật giá trị state khi người dùng nhập
            className={styles.customInput}
          />
        </div>

        {/* Ô nhập Password */}
        <div className={styles.input__wrapper}>
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Cập nhật state
            className={styles.customInput}
          />
        </div>

        {/* Nút đăng nhập */}
        <Button
          loading={loading}                 // Hiển thị vòng xoay khi đang xử lý
          onClick={handleSubmit}            // Gọi hàm handleSubmit khi bấm
          type="primary"                    // Kiểu chính (màu xanh của Ant Design)
          className={styles.login__btn}
        >
          Login
        </Button>

        {/* Liên kết chuyển sang trang đăng ký nếu chưa có tài khoản */}
        <div className={styles.hint}>
          New User? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  )
}

// Xuất component để có thể sử dụng ở nơi khác
export default Login
