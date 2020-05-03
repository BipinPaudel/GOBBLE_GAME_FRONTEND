import React, {useState} from 'react';
import gobbleImg from "../../gobb.jpg";
import Confirm from "../gobble/Confirm";
import {withRouter} from 'react-router-dom';
import {Button} from 'antd';

const Home = (props) => {

    const [visible, setVisible] = useState(false);

    const confirm = () => {
        console.log("confirm");
        setVisible(true);
    };

    return (
        <div className='grid-2'>

            <div style={{margin: '10px'}}>
                <div>
                    <img src={gobbleImg}/>
                </div>
            </div>
            <div style={{margin: '10px'}}>
                <h2> Game Rule</h2>
                <ol>
                    <li> Search for the valid words in the grid.</li>
                    <li> The entered word should be of 3 or more than 3 letters.</li>
                    <li> You cannot insert the same word twice. </li>
                    <li>The character can be traversed horizontally, diagonally and vertically. However,
                        the box once visited cannot be visited again for the same word.
                    </li>
                    <li>You can set the time limit for your game upto max 6 minutes.</li>
                    <li> After the time is over, you will be redirected to the result page where you can see your
                    total score and input words. Words in green are valid words and invalid words are highlighted in
                    red color.</li>
                </ol>

                <Button type="primary" shape="round" style={{marginTop: '60px'}} onClick={confirm} block>
                    Start Game
                </Button>

                <Confirm props={props} visible={visible} setVisible={setVisible}/>

            </div>
        </div>
    )
};


export default withRouter(Home);