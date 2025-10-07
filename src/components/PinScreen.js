import React from "react";
import { Typography } from "antd";
const { Title } = Typography;

const PinScreen = ({setPinCode, checkPin, pinCode}) => {
    return (
        <div style={{paddingTop: 200}}>
            <Title level={2}>Enter Your Pin Code</Title>
            <input value={pinCode} onChange={(e) => setPinCode(e.target.value)}></input>
            <button onClick={checkPin}>OK</button>
        </div>
    );
};

export default PinScreen;