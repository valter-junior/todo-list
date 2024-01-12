import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import {useForm} from 'react-hook-form';
import { Login } from '../lib/api';
import swal from 'sweetalert';

const LoginUser = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    
    const history = useNavigate();
    
    
   
    
    const onSubmitForm = async (event) => {
        event.preventDefault();

        const body = {email, password}
        const response = await Login(body)
    
        if (response === "Email or password invalid") {
            swal("Email or password invalid!")
        } else
        if ('token'in response) {
            swal("success", {
              buttons: false,
              timer: 2000,
            })
            .then((value) => {
              localStorage.setItem('token', response['token']);
              localStorage.setItem('user', JSON.stringify(response['user']));
              history("/")
            })
        }
    }
    
    return (
        <div>
            <h1 className="text-center mt-5">Login</h1>
                <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <label>
                    Email:
                    <input type="email" className="form-control" value={email} onChange={e=> setEmail(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="password" className="form-control" value={password} onChange={e=> setPass(e.target.value)}/>
                </label>
                <input type="button" value="submit" onClick={onSubmitForm}/>
            </form>
        </div>
    );
    }
    export default LoginUser;

/**function Login () {
    const {register, handleSubmit} = useForm();
    const onSubmit = (d) => alert(JSON.stringify(d));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Email:
                <input {...register("login")} />
            </label>
            <label>
                Password:
                <input type="password" {...register("password")} />
            </label> 
            <input type="submit" value="submit" />
        </form>
    );
}

export default Login; */

