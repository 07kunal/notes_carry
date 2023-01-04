import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../landingpage/style.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


function Home() {
    const [userInfo, setUserInfo] = useState('')
    const Navigate = useNavigate()

    // useEffect(() => {

    //     setUserInfo(localStorage.getItem('userInfo'))
    //     if (userInfo) {
    //         Navigate('/mynotes')
    //     }
    // }, [userInfo])
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
                                <Button size='lg' className='landingbutton'
                                    onClick={() => Navigate('/login')}
                                >
                                    Login
                                </Button>
                                <Button size='lg' className='landingbutton'
                                    variant='outline-primary'
                                    onClick={() => Navigate('/register')}
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