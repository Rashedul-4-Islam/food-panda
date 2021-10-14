import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {logInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogle = () =>{
        logInWithGoogle()
        .then(result =>{
              history.push(redirect_uri)
        })
    }
    return (
        <div>
            <h2 className="text-warning text-danger">Sign In</h2>
            <Form className="container w-50 m-auto text-start">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Log In
                </Button>
               
            </Form>
            <p>Create Account? <Link to="/register">Register</Link></p>
            <div>----------LogIn With Google-------------</div>
            <button onClick={handleGoogle} className="btn btn-warning rounded-pill fw-bold"><span><i className="fab fa-google"></i></span> Google</button>
        </div>
    );
};

export default Login;