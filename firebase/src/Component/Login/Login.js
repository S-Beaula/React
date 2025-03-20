import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { author, db } from '../../formsConfig';
import { get, ref } from 'firebase/database';

const Login = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
    confirmpassword: '',
  });

  const handleLoginChanges = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleLoginDetailsSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmpassword } = loginDetails;

    if (password !== confirmpassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const userCredentials = await signInWithEmailAndPassword(author, email, password);

      const loggedInUserCred = userCredentials.user.displayName;
      const adminRef = ref(db, `admins/${loggedInUserCred}`);
      const userRef = ref(db, `users/${loggedInUserCred}`);
      
      const adminData = await get(adminRef);
      const userData = await get(userRef);

      if (adminData.exists()) {
        navigate('/dashboard', { state: { personData: adminData.val(), role: 'admins' } });
      } else if (userData.exists()) {
        navigate('/dashboard', { state: { personData: userData.val(), role: 'users' } });
      } else {
        alert('No data found');
      }

      setLoginDetails({ email: '', password: '', confirmpassword: '' });

    } catch (err) {
      console.error(err);
      alert('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <div>
      <Form onSubmit={handleLoginDetailsSubmit} style={{ width: '40%' }}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Email here'
            name='email'
            onChange={handleLoginChanges}
            value={loginDetails.email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password here'
            name='password'
            onChange={handleLoginChanges}
            value={loginDetails.password}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password here'
            name='confirmpassword'
            onChange={handleLoginChanges}
            value={loginDetails.confirmpassword}
          />
        </Form.Group>
        <Button type='submit'>Login</Button>
      </Form>
    </div>
  );
};

export default Login;
