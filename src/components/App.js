import React from 'react'

import AddContact from '../containers/AddContact'
import VisibleTodoList from '../containers/VisibleContactList'

import {Col, Container, Row} from "react-bootstrap";
import Header from "./Header";
import Footer from './Footer'
import Router from "./Router";

const App = () => (
    <div>
        <Container fluid>

            <Router/>


            <Footer/>
            <Row>
                <Col>1 of 1</Col>
            </Row>
        </Container>

    </div>
);

export default App
