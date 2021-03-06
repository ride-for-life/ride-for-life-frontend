import React from "react";
import { DriverBioDiv } from "../styles";
import { ReactComponent as Share } from "../DriverProfile/share.svg";
import { ReactComponent as Comment } from "../DriverProfile/speech-bubble-line.svg";
import { ReactComponent as StarSVG } from "../Review/star.svg";
import styled from 'styled-components';

const Star = styled(StarSVG)`
  polygon {
    fill: white;
  }
`

const DriverBio = props => {
 return (
   <DriverBioDiv>
     <div className="caret">V</div>
     <div className="driver-heading">
         <img src='' alt={props.name} />
         <div>
             <h3>{props.name}</h3>
         </div>
     </div>
     <p>{props.myBio}
     </p>
     <div className="driver-footer">
     <div><Share /></div> <div>{props.reviews}<Comment />    {props.avgRating}<Star /></div>
     </div>
   </DriverBioDiv>
 );
};

export default DriverBio;
