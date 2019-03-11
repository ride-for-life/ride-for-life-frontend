import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import PhoneKey from './PhoneKey';

// TBD: Implement Ugandan telephone length
// Extension/Area Codes may not be Ugandan? Rwandan numbers in Uganda and vice versa, apparently.

// KeyContainer styled component
// StyledKey component

const PhonePage = props => {

  let { state, dispatch } = useContext(UserContext);

  let numPush = num => () => dispatch({ type: "numPush", payload: num });
  let numPop = () => dispatch({ type: "numPop" });
  let reset = () => dispatch({ type: "reset" });

  const keyNums = [1,2,3,4,5,6,7,8,9,0]
  const keyPad = keyNums.map(keyNum => <PhoneKey keyNum={keyNum} />)

  return (
    <div>
      <p>{state.phoneNum}</p>
      <div>
        {keyPad}
        <button onClick={numPop}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default PhonePage;
