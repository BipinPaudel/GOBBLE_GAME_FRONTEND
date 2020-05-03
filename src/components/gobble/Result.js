import React, {useState} from 'react';
import {Button, Tag, Col, Row} from 'antd';
import Board from "./helpers/Board";
import Confirm from "./Confirm";

const Result = (props) => {
    const {grid, totalScore, wordMap, playAgain, makeGrid, setTimer, time, clearWords} = props;
    const value = time.value;

    const [visible, setVisible] = useState(false);


    const handlePlayAgain = () => {
        setVisible(true);
    };

    return (
        <Row gutter={16}>
            <Col span={12}>
                <h2>Result</h2>
                <Board grid={grid}/>
            </Col>

            <Col span={12}>
                <h2>Word Results</h2>
                <div className={'word-display'}>
                    <ul>
                        {Object.keys(wordMap).map((e, i) =>
                            <li style={{marginTop: '20px', textAlign: 'center'}} key={e}>
                                <Tag color={wordMap[e] ? '#87d068' : '#f50'}>
                                    {wordMap[e] ? e + ' : ' + e.length : e}
                                </Tag>
                            </li>
                        )}
                    </ul>
                </div>
            </Col>

            <Col span={10}>
                <h3 style={{marginTop: '20px'}}>Total score is: {totalScore} </h3>
            </Col>

            <Col span={8} offset={8}>
                <Button type="primary" style={{marginTop: '20px'}} block onClick={() => handlePlayAgain()}>
                    Play Again
                </Button>
            </Col>

            <Confirm props={props} visible={visible} setVisible={setVisible}/>

        </Row>
    )
};

export default Result;