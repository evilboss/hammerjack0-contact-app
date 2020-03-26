import React from 'react'
import Footer from './Footer'
import AddContact from '../containers/AddContact'
import VisibleTodoList from '../containers/VisibleContactList'
import Header from "./Header";
import {Col, Container, Row} from "react-bootstrap";

const App = () => (
    <div>
        <Container fluid>
            <Header/>
            <AddContact />
            <VisibleTodoList />
            <Footer />
            <Row>
                <Col>1 of 1</Col>
            </Row>
        </Container>

    </div>
)

export default App
