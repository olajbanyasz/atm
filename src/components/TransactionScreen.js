import React, { useState } from "react";
import { Row, Col, Button, Typography } from "antd";
import CardTypes from "./CardTypes";
const { Title } = Typography;


const TransactionScreen = ({ user, onExit, onReenterPin, onUpdateBalance }) => {
    const transactionTypes = {
        'SHOW_BALANCE': 'SHOW_BALANCE',
        'WITHDRAWAL': 'WITHDRAWAL',
        'DEPOSIT': 'DEPOSIT'
    };

    const [showBalance, setShowBalance] = useState(false);
    const [transactionType, setTransactionType] = useState('');
    const [amount, setAmount] = useState(null);
    const [isValidAmount, setIsvalidAmont] = useState(false);
    const { firstName, lastName, balance, cardType } = user;

    const onShowBalance = () => {
        setShowBalance(true);
        setTransactionType(transactionTypes.SHOW_BALANCE);
    };

    const onDeposit = () => {
        setTransactionType(transactionTypes.DEPOSIT);
        setShowBalance(false);
    };

    const onWithdrawal = () => {
        setTransactionType(transactionTypes.WITHDRAWAL);
        setShowBalance(false);
    };

    const onTransaction = () => {
        if (transactionType === transactionTypes.WITHDRAWAL) {
            onUpdateBalance(balance - amount);
        }

        if (transactionType === transactionTypes.DEPOSIT) {
            onUpdateBalance(balance + Number(amount));
        }

        setAmount(null);
        setTransactionType('');
    };

    const onAmountChange = (value) => {
        if (value > 0 && typeof value === "number" && value%1 === 0) {
            setIsvalidAmont(true);
        }
        setAmount(value);
    };

    return (
        <div style={{ paddingTop: 50 }}>
            <CardTypes cardType={cardType}/>
            <div style={{height: 112}}>
                {showBalance && (
                    <>
                        <Title level={2}>Your Balance</Title>
                        <Title level={2}>${balance}</Title>
                    </>
                )}
                {(!showBalance && !transactionType) && (
                    <>
                        <Title level={2}>Hi {firstName} {lastName}!</Title>
                        <Title level={2}>Please Make a Choice ...</Title>
                    </>
                )}
                {(transactionType && transactionType !== transactionTypes.SHOW_BALANCE) &&
                    <>
                        <Title level={2}>Enter the Amount</Title>
                        <input type="number" min="0" step="1" value={amount} onChange={(e) => onAmountChange(e.target.value)}></input>
                        <button onClick={onTransaction} disabled={isValidAmount}>OK</button>
                    </>
                }
            </div>
            <div style={{ marginTop: 90 }}>
                <Row>
                    <Col span={12}></Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Button type="text" onClick={onExit}><Title level={2}>Exit-</Title></Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} style={{ textAlign: 'left' }}>
                        <Button type="text" onClick={onWithdrawal}><Title level={2}>-Withdraw</Title></Button>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Button type="text" onClick={onShowBalance}><Title level={2}>Balance-</Title></Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} style={{ textAlign: 'left' }}>
                        <Button type="text" onClick={onDeposit}><Title level={2}>-Deposit</Title></Button>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Button type="text" onClick={onReenterPin}><Title level={2}>Re-Enter PIN-</Title></Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default TransactionScreen;