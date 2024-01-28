// LoginForm.js
import React, { useContext } from 'react';
import "../styles/LoginForm.css";
import { AuthContext } from '../services/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const credentials = {
            username: formData.get('username'),
            password: formData.get('password')
        };
        try {
            await login(credentials);
            navigate("/app");
        } catch (error) {
            console.error('Login error:', error);
            // Optionally: Display error message to the user
        }
    };

    return (
        <div className='LoginForm'>
            <h1> Chi bộ Sinh viên 5 </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'> 
                    Tên đăng nhập <br />
                    <input type='text' name='username' id='username' placeholder='Tên đăng nhập'/> <br />
                </label> <br/>

                <label htmlFor='password'> 
                    Mật khẩu <br />
                    <input type='password' name='password' id="password" placeholder='Mật khẩu' /> <br />
                </label> 
                
                <button formMethod='POST' type='submit'> Đăng nhập </button>
            </form>
        </div>
    );
}

export default LoginForm;
