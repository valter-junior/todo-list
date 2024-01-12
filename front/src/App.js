import React from 'react';
/**import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import {Home} from './home';
import Login from './login/login';
import SignIn from './login/sign.in';
import {ProtectedRoute} from './protected.route'
import api from './services/api';
import CreateUser from './login/sign.in'; */
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import {Home} from './home';
import Login from './login/login';
import SignIn from './login/sign.in';
import {ProtectedRoute} from './protected.route'
import request from '../node_modules/superagent/dist/superagent'
import CreateUser from './login/sign.in';
import LoginUser from './login/login';
import { signIn } from './lib/api';


function App() {
  /**const [state, setState] = useState([]);

  const getUser = async () => {
    const response = await fetch('/sign-in');
    const data = await response.json();
    console.log(data);
  };
  try{
    const createUser = async () => {
     
    request
.post('http://127.0.0.1:3001/sign-in')
.set('Content-Type', 'application/x-www-form-urlencoded')
.send({ firstname: "firstname", lastname: "lastname", email: "email", password: "password" })
.end(function(err, res){
console.log(res.text);
}); 

    }
    useEffect(() => {
      createUser();
      })
    
    /**useEffect(() => {
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        },
      
    };
    fetch('/sign-in', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
      });
      
  } catch (error) {
    console.log(error.message)
  }*/
 
    return(
      <div>
        <Container>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/login" element={<Login/>}/>              
              <Route path="/sign-in" element={<SignIn/>} />
            </Routes>
          </BrowserRouter>
        </Container>  
      </div>
    )

// empty dependency array means this effect will only run once (like componentDidMount in classes)


}


export default App;

/**import CreateUsers from './login/sign.in';
import api from './services/api';

class App extends React.Component {

  constructor() {
    super();
    api.get('/').then(res => {
      console.log(res.data)
    })
  }
    render() {
        return (
            <div>
                <CreateUsers />
            </div>
        );
    }
}

export default App;


/**function App () {
  const [user, setUser ] = useState();

  useEffect(() => {
    api
      .post("http://127.0.0.1:3001/sign-in", CreateUser)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  return (
    <div>
      <Container>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute exact path="/login" component={Home}>
              <Login />
            </ProtectedRoute>
            <Route path="/sign-in" component={SignIn}>
              <SignIn />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>  
    </div>
  )
}

export default App; */

