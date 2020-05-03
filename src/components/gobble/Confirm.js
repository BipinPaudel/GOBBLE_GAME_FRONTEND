import React, {useContext, useState} from 'react';
import {Button, Col, InputNumber, message, Modal, Row} from "antd";
import GobbleContext from "../../context/gobble/gobbleContext";
import AlertContext from "../../context/alert/alertContext";

const Confirm= (props) => {


    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState( 20);
    const gobbleContext = useContext(GobbleContext);
    const alertContext = useContext(AlertContext);

    const {grid, makeGrid, isGameOver,timer, totalScore, playAgain, setTimer, wordResponse,setTime, clearWords} = gobbleContext;


    
    const handleOk = () => {
        setTimer(parseInt(minute), parseInt(second));
        setTime({value: {minute, second}});
        clearWords();
        playAgain();
        makeGrid();
        if (props.props.hasOwnProperty('history')){
            props.props.history.push('/gobble');
        }

    };

    const handleCancel = () => {
        props.setVisible(false);
    };

    const handleMinuteChange = async (value) => {
        if (parseInt(value) > 5) {
            console.log('inside');
            message.error('Max min is 5 min');
            return
        }
        await setMinute(value);
        console.log(value, 'minute');

    };

    const handleSecondChange = async (value) => {
        if (parseInt(value) > 59) {
            message.error('Max min is 59 sec');
            return
        }
        await setSecond(value);

        console.log(value, 'second');

    };
    
    return (
        <Modal
            title={'Enter game time interval '}
            visible={props.visible}
            onCancel={handleCancel}
            footer={null}
            maskClosable={false}
        >

            <Row>
                <Col span={8}>
                    <label>Minute :</label>
                    <InputNumber min={0} max={5} defaultValue={0} onChange={handleMinuteChange}/>
                </Col>
                <Col span={8} offset={4}>
                    <label>Second :</label>
                    <InputNumber min={0} max={59} defaultValue={20} onChange={handleSecondChange}/>
                </Col>
            </Row>
            <div style={{paddingLeft: '120px', marginLeft: '20px', marginTop: '20px'}}>
                <Button key="back" style={{marginRight: '5px'}} onClick={handleCancel}>
                    Cancel
                </Button>
                <Button key="submit" type="primary" onClick={() => handleOk()}>
                    Start
                </Button>
            </div>


        </Modal>
    )
};

export default Confirm;