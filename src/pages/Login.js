import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
import { Link } from 'react-router-dom';
const Login = () => {

  const {loginWithRedirect} = useAuth0();

  return <Wrapper>
    <img src={loginImg} alt = "user image"></img>
    <h1>Github user</h1>
    {/* <Link to ="" className='btn'>login</Link> */}
<button className='btn' onClick ={loginWithRedirect}>Login</button>
  </Wrapper>;
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
