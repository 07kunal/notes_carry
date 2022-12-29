import React from 'react'
import { Accordion, Badge, Button, Card, useAccordionButton } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import DefaultScreen from '../../component/defaultscreen/DefaultScreen';
import { useNavigate } from 'react-router-dom';
import './style.css'
// import DefaultData from '../../data/DefaultData';
import axios from 'axios'


function MyNotes() {
    const navigate = useNavigate()
    const API_URL = '/api/notes'
    const [defaultData, setDefaultData] = useState([])
    const deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {

        }


    }
    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!'),
        );

        return (
            <p
                type="button"
                onClick={decoratedOnClick}
            >
                {children}
            </p>
        );
    }

    const fetchMyNotes = async () => {
        try {
            const response = await axios.get(API_URL)
            if (response?.data) {
                setDefaultData(response?.data)
                console.log(response)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchMyNotes()
    }, [])




    return (
        <DefaultScreen title={'Welcome Back Kunal Gautam..'}>

            <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg' onClick={() => navigate('/createnote')}>
                Create New Note
            </Button>
            {defaultData?.map((data) => (
                <>
                    <Accordion key={data._id}>
                        <Card style={{ margin: 10 }}>
                            <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{
                                    color: "black",
                                    textDecoration: "none",
                                    flex: 1,
                                    cursor: "pointer",
                                    alignSelf: "center",
                                    fontSize: 18,
                                }}>

                                    <CustomToggle eventKey="0">
                                        {data.title}
                                    </CustomToggle>

                                </span>
                                <div>
                                    <Button onClick={() => navigate(`/note/${data._id}`)}>Edit</Button>
                                    <Button variant='danger' className='mx-2' onClick={() => deleteHandler(data._id)}>Delete</Button>
                                </div>
                            </Card.Header>
                            <Accordion.Collapse eventKey='0'>
                                <Card.Body>
                                    <h4>
                                        <Badge variant='success'>
                                            Category-{data.category}
                                        </Badge>
                                    </h4>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            {data.content}
                                        </p>
                                        <footer className="blockquote-footer">
                                            Created On -date:
                                        </footer>
                                    </blockquote>
                                </Card.Body>

                            </Accordion.Collapse>

                        </Card>
                    </Accordion>
                </>
            ))}


        </DefaultScreen>
    )
}

export default MyNotes