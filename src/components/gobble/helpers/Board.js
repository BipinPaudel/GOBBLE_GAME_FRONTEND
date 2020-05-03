import React from 'react';
import {Container, Row, Col} from 'react-grid-system';


const Board = (props) => {
    const {grid} = props;
    return (
        <div>
            <div>
                <Container fluid>
                    {grid.map(row =>
                        <Row debug>
                            {row.map(c =><Col debug> {c} </Col>)}
                        </Row>
                    )}
                </Container>
            </div>
        </div>
    )
};

export default Board;