import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import auth from './auth';
import {useNavigate} from 'react-router-dom';


export const Home = (props) => {
    const history = useNavigate();
    return (
       <div>
         <h1>Task</h1>
           <Button 
             onClick={() => {
               auth.login(() => {
                   history("/login")       
               });
             }}>Login</Button>
           <Button component={Link} to="/sign-in">Sign In</Button>
       </div>
    )
    
}


