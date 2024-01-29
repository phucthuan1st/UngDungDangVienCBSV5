import React, { useContext, useState } from 'react';
import "../styles/LoginForm.css";
import { AuthContext } from '../services/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null); // State to hold error message

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
            console.log(error);
            if (error.statusCode === 401) {
                // Set error message for 403 status code
                setErrorMessage("Sai tên tài khoản hoặc mật khẩu");
            } else {
                // Optionally: Handle other error cases
                // Redirect to /error or display a generic error message
            }
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
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
            {/* Display error message if it exists */}
        </div>
    );
}

export default LoginForm;
