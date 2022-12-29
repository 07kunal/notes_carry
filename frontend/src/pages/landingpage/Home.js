import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../landingpage/style.css'
import { Button } from 'react-bootstrap'

function Home() {
    return (
        <div
            className='main' >
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <h1 className='title'>Welcome to Note's Handler</h1>
                            <p className='subtitle'>One Safe place for all your note's</p>
                            <div className="buttonContainer">
                                <Button size='lg' className='landingbutton'>
                                    Login
                                </Button>
                                <Button size='lg' className='landingbutton'
                                variant='outline-primary'
                                >
                                    register
                                </Button>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Home