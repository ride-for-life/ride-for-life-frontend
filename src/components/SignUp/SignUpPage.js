import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../UserContext';
import styled from 'styled-components';
import TransitionButton from '../TransitionButton'
import {
  BrowserRouter as Router,
  NavLink, Link,
  Route

} from 'react-router-dom';
import axios from 'axios';
import '../../index.css';
import { colors, Input, Inputs, SignUpButtons, ContinueButton, Button, NavStyle, FormContainer, OverlayDiv } from '../styles';

const Body = styled.div`
  overflow: hidden;
  position: relative;
`;


const SignUpPage = props => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ pass, setPass ] = useState("");
  const [ location, setLocation ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ result, setResult ] = useState("");

  const { state, dispatch } = useContext(UserContext);

  const driverSignUp = (event) => {
    event.preventDefault();
    const phoneContext = state.phoneNum.join("");
    const parsedPrice = parseInt(price);
    const registrationWrapper = {
      firstname: firstName,
      lastname: lastName,
      username: `__${Math.random().toString().slice(2,19)}__`,
      phone: `__${Math.random().toString().slice(2,19)}__`,
      email: `__${Math.random().toString().slice(2,19)}__`,
      password: pass,
      price: parsedPrice,
      vehicle_type: "mu",
      location: location
    };
    axios.post('https://rideforlife.herokuapp.com/api/drivers/register', registrationWrapper)
     .then(res => {
       setResult(JSON.stringify(res));
       dispatch({type: "loginSuccess", payload: res.data.token });
     })
     .catch(error => setResult(JSON.stringify(error)));
  }; // driverSignUp function

  return (
    <Body>
      {result}
      <FormContainer>
      <div>
        <SignUpButtons>
           <NavStyle style={{color: colors.dusk}} to = '/'>←Home</NavStyle>

        </SignUpButtons>


           <form onSubmit={driverSignUp}>
           <Inputs>
             <Input  type="text"
                     name="lastName"
                     value={firstName}

                     onChange={event => setFirstName(event.target.value)}
                     placeholder="First"
              />
              <Input  type="text"
                      name="firstName"
                      value={lastName}

                      onChange={event => setLastName(event.target.value)}
                      placeholder="Last"
               />
               <Input
                      type="password"
                      name="pass"
                      onChange={event => setPass(event.target.value)}
                      value={pass}
                      placeholder="Password"
               />
              <Input
                     type="text"
                     name="location"
                     onChange={event => setLocation(event.target.value)}
                     value={location}
                     placeholder="Location"
              />
              <Input
                     type="text"
                     name="price"
                     onChange={event => setPrice(event.target.value)}
                     value={price}
                     placeholder="Price"
              />

              <Link to='/profile'><ContinueButton> CONTINUE </ContinueButton></Link>
               </Inputs>
            </form>

      <OverlayDiv style={{minHeight: "200px", pointerEvents: "all"}}>
      <h2 style={{color: colors.dusk}}>Already have an account?</h2>
      <TransitionButton link="/login" background={colors.thunderhead} text="LOGIN"> </TransitionButton>
    </OverlayDiv>
      </div>
      </FormContainer>
    </Body>
  );
};

export default SignUpPage;
