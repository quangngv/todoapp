import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ToDoList from './pages/ToDo/ToDoList';
import './App.css';
import 'antd/dist/reset.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      {/* ✅ Navbar luôn hiện */}
      <Navbar active="" lang="en" />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/to-do-list" element={<ToDoList />} />
      </Routes>
    </>
  );
}

export default App;
