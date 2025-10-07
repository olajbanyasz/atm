import React from "react";
import { Typography } from "antd";
const { Title } = Typography;

const InitialScreen = ({setIsCardInserted}) => {
    return (
        <div style={{paddingTop: 200}}>
            <Title level={2}>Please Insert Your Card</Title>
            <button onClick={()=> setIsCardInserted(true)}>Insert Card</button>
        </div>
    );
};

export default InitialScreen;