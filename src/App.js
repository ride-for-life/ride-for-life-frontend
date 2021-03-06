import React from 'react';
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGoogleMap from "react-google-map";
import {Route, Redirect} from 'react-router-dom';
import SignUpPage from './components/SignUp/SignUpPage'
import PhoneNumber from './components/PhoneNumber'
import NavBar from './components/NavBar'
import Phone1 from './components/Phone1';
import Phone2 from './components/Phone2';
import MapContainer from './components/maps/MapContainer'
import SubmitRating from './components/Review';
import ConfirmPickup from './components/ConfirmPickup';
import DriverProfile1 from './components/DriverProfile';
import { UserContext } from './components/UserContext';
import axios from 'axios';
import EditProfile from './components/EditProfile';



const App = props => {


  return (
    <div>
      <NavBar />
      <Route exact path='/' component={PhoneNumber} />
      <Route exact path='/info' component={Phone1} />
      <Route exact path='/mom-to-be' component={Phone2} />
      <Route exact path='/caregiver' component={Phone2} />
      <Route exact path='/sign-up' component={SignUpPage} />
      <Route exact path='/my-profile' component={EditProfile} />



      <Route exact path='/search' component={MapContainer} />
      <Route exact path='/submit-rating' component={SubmitRating} />
      <Route exact path='/confirm-pickup' component={ConfirmPickup} />

    </div>
    );
  }

export default App



// {
//   this.state.myArray.map((a,index) => {
//     return <MapDirectionRenderer
//       direction={a}
//       key={index}
//     />
//   })
// }
