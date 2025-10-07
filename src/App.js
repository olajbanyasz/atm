import React, { useState } from 'react';
import './App.css';
import InitialScreen from './components/InitialScreen';
import PinScreen from './components/PinScreen';
import TransactionScreen from './components/TransactionScreen';
import {mockUser} from './mock/user';

function App() {
  const [isCardInserted, setIsCardInserted] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [isPinValid, setIsPinValid] = useState(false);
  const [user, setUser] = useState(mockUser);

  const checkPin = () => {
    if(pinCode === user.pinCode) {
      setIsPinValid(true);
    } else {
      setIsPinValid(false);
      setPinCode('');
    }
  };

  const onExit = () => {
    setIsCardInserted(false);
    setIsPinValid(false);
    setPinCode('');
  };

  const onReenterPin = () => {
    setIsPinValid(false);
    setPinCode('');
  };

  const onUpdateBalance = (newBalance) => {
    const updatedUser = {
      ...user,
      balance: newBalance
    };

    setUser(updatedUser);
  };

  return (
    <div className="App">
      <img src='/atm_sign.png' style={{width: 550}}></img>
      <div className="atm-screen">
        {!isCardInserted && <InitialScreen setIsCardInserted={setIsCardInserted}/>}
        {(isCardInserted && !isPinValid) && <PinScreen setPinCode={setPinCode} checkPin={checkPin} pinCode={pinCode}/>}
        {isPinValid && <TransactionScreen user={user} onUpdateBalance={onUpdateBalance} onExit={onExit} onReenterPin={onReenterPin}/>}
      </div>
    </div>
  );
}

export default App;
