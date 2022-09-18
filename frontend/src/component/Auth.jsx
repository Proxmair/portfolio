import React, { useState,useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {login} from '../actions/user.js';
import {useAlert} from 'react-alert'
const Auth = () => {
    const dispatch=useDispatch();
    const alert=useAlert();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const { loading, message, error } = useSelector((state) => state.login);
    const loginHandler=(e)=>{
        e.preventDefault();
        dispatch(login(email,password));
    }
    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch({ type: "CLEAR_ERRORS" });
        }
        if (message) {
          alert.success(message);
          dispatch({ type: "CLEAR_MESSAGE" });
        }
      }, [alert, error, message, dispatch]);
    
    return (
        <form className='auth-container'>
            <h1>Admin Login</h1>
            <label htmlFor="email">Email</label>
            <input
                type="text"
                id="email"
                placeholder='Enter your mail'
                onChange={(e)=>setemail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                placeholder='Enter password'
                onChange={(e)=>setpassword(e.target.value)} />

            <div>
                <button onClick={loginHandler} type='submit' disabled={loading}>Login</button>
            </div>
        </form>
    )
}

export default Auth