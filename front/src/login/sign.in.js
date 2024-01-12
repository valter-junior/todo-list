import React from 'react';
import { useState } from 'react';
import { signIn } from '../lib/api';


const CreateUser = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    
    const onSubmitForm = async (event) => {
        event.preventDefault();
    
        try {
            const body = {firstname, lastname, email, password};
            console.log(body)
            const response = await signIn(body);
            console.log(response);
        } catch (err) {
            console.log(err.message);
        }
    }
    
    return (
        <div>
            <h1 className="text-center mt-5">Create User</h1>
                <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <label>
                    First Name:
                    <input type="text" className="form-control" value={firstname} onChange={e=> setFirstname(e.target.value)}/>
                </label>
                <label>
                    Last Name:
                    <input type="text" className="form-control" value={lastname} onChange={e=> setLastname(e.target.value)}/>
                </label>
                <label>
                    Email:
                    <input type="email" className="form-control" value={email} onChange={e=> setEmail(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="password" className="form-control" value={password} onChange={e=> setPass(e.target.value)}/>
                </label>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
    }
    export default CreateUser;












/** class CreateUsers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: Request,
            lastname: Request,
            email: Request,
            password: Request
        };
    }

    async componentDidMount() {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        
        };
        const response = await fetch('http://127.0.0.1:3001/sign-in', requestOptions);
        const data = await response.json();
        this.setState({ firstname: data.firstname, lastname: data.lastname, email: data.email, password: data.password});
    }

    render() {
        const { firstname } = this.state;
        const { lastname } = this.state;
        const { email } = this.state;
        const { password } = this.state;
        
        return (
            <div className="card text-center m-3">
                <form onSubmit={this.state}>
                    <label>
                        First Name:
                        <input type='text' value={firstname} />
                    </label>
                    <label>
                        Last Name:
                        <input type='text' value={lastname} />
                    </label>
                    <label>
                        Email:
                        <input type='email' value={email} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} />
                    </label>
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default CreateUsers; 

class CreateUser extends Component{
    constructor(props) {
        super(props)
    
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChange = this.onChangeLastName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            name: '',
            email: ''
        }
    }
    
    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }
    
    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    
    onSubmit(e) {
        e.preventDefault()
    
        const userObject = {
            name: this.state.name,
            email: this.state.email
        };
}
*/

/**function SignIn () {
    const {register, handleSubmit} = useForm();
    
  
    return (
        <form>
            <label>
                First Name:
                <input {...register("First Name")} />
            </label>
            <label>
                Last Name:
                <input {...register("Last Name")} />
            </label>
             <label>
                Email:
                <input {...register("Email")} />
            </label>
            <label>
                Password:
                <input type="password" {...register("password")} />
            </label>
            <input type="submit" value="submit" />
        </form>
    );
}

export default SignIn; 

*/