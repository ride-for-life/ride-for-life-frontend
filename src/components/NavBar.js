import React, { useContext, useEffect } from "react";
import "../App.css";
import SignUpPage from "./SignUp/SignUpPage";
import { Route, NavLink } from "react-router-dom";
import Phone1 from "./Phone1";
import Phone2 from "./Phone2";
import Login from "./Login";
import PhoneNumber from "./PhoneNumber";
import DriverProfile from "./DriverProfile";
import DriverProfile1 from "./DriverProfile1";
import MapContainer from "./maps/MapContainer"
import SubmitRating from './Review/';
import EditProfile from './EditProfile/';
import ConfirmPickup from './ConfirmPickup'
import SearchDrivers from "./maps/index";
import { UserContext } from './UserContext';


const NavBar = props => {

 return (
   <div>
     <NavLink className="tab" to="/PhoneNumber">
       Phone Number
     </NavLink>
     <NavLink className="tab" to="/Phone1">
       Phone1
     </NavLink>
     <NavLink className="tab" to="/Phone2">
       Phone2
     </NavLink>
     <NavLink className="tab" to="/SignUp">
       Sign Up
     </NavLink>
     <NavLink className="tab" to="/Login">
       Login
     </NavLink>
     <NavLink className="tab" to="/DriverProfile">
       Driver Profile
     </NavLink>
     <NavLink className="tab" to="/DriverProfile1">
       Driver Profile - 1
     </NavLink>
     <NavLink className="tab" to="/SearchResult">
       Search Result
     </NavLink>
     <NavLink className="tab" to="/confirm-pickup">
       Confirm Pickup
     </NavLink>
     <NavLink className="tab" to="/SubmitRating">
       Submit Rating
     </NavLink>
     <NavLink className="tab" to="/DriverEdit">
       Edit Profile
     </NavLink>



     <Route exact path="/SignUp" component={SignUpPage} />
     <Route exact path="/Login" component={Login} />
     <Route exact path="/Phone1" component={Phone1} />
     <Route exact path="/Phone2" component={Phone2} />
     <Route exact path="/DriverProfile" component={DriverProfile} />
     <Route exact path="/DriverProfile1" component={DriverProfile1} />
     <Route exact path='/PhoneNumber' component={PhoneNumber} />
     <Route exact path='/SearchResult' component={SearchDrivers} />
     <Route exact path='/SubmitRating' component={SubmitRating} />
     <Route exact path='/DriverEdit' component={EditProfile} />
     <Route exact path='/confirm-pickup' component={ConfirmPickup} />


   </div>
 );
};

export default NavBar;
