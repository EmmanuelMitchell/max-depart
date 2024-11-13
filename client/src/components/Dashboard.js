import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
} from '@coreui/react'
import {
    CChartBar,
} from '@coreui/react-chartjs'



const Dashboard = () => {

    const [freetown_west_iphone_sum, setFreetown_west_iphone_sum] = useState(null);
    const [freetown_east_iphone_sum, setFreetown_east_iphone_sum] = useState(null);
    const [east_iphone_sum, setEast_iphone_sum] = useState(null);
    const [north_iphone_sum, setNorth_iphone_sum] = useState(null);
    const [north_west_iphone_sum, setNorth_west_iphone_sum] = useState(null);
    const [south_iphone_sum, setSouth_iphone_sum] = useState(null);


    const [freetown_west_android_sum, setFreetown_west_android_sum] = useState(null);
    const [freetown_east_android_sum, setFreetown_east_android_sum] = useState(null);
    const [east_android_sum, setEast_android_sum] = useState(null);
    const [north_android_sum, setNorth_android_sum] = useState(null);
    const [north_west_android_sum, setNorth_west_android_sum] = useState(null);
    const [south_android_sum, setSouth_android_sum] = useState(null);
  



    useEffect(() => {
        axios.get(`https://qrcodes-app-runt.vercel.app`)
            .then(response => {

                setFreetown_west_iphone_sum(response.data.freetown_west_iphone_sum);
                setFreetown_east_iphone_sum(response.data.freetown_east_iphone_sum);
                setEast_iphone_sum(response.data.east_iphone_sum);
                setNorth_iphone_sum(response.data.north_iphone_sum);
                setNorth_west_iphone_sum(response.data.north_west_iphone_sum);
                setSouth_iphone_sum(response.data.south_iphone_sum);
            


                setFreetown_west_android_sum(response.data.freetown_west_android_sum);
                setFreetown_east_android_sum(response.data.freetown_east_android_sum);
                setEast_android_sum(response.data.east_android_sum);
                setNorth_android_sum(response.data.north_android_sum);
                setNorth_west_android_sum(response.data.north_west_android_sum);
                setSouth_android_sum(response.data.south_android_sum);

            })
            .catch(error => console.log(error));
    }, []);

    setTimeout(function () {
        window.location.reload(1);
    }, 25000);

    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ORANGE SIERRA LEONE DASHBOARD</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">DOWNLOAD PER SHOP CHART</Nav.Link>
                        <Nav.Link href="#features"></Nav.Link>
                        <Nav.Link href="weeklyReport"><Link to="weeklyReport" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Weekly Report</Link></Nav.Link>
                        <Nav.Link href="weeklyReport"><Link to="monthlyReport" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>One Month Report</Link></Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
            <CCard className="mb-4">
            </CCard>
            <CRow className="row justify-content-md-center">
                <CCol xs={10}>
                </CCol>
                <CCol xs={5}>
                    <CCard className="mb-4">
                        <CCardHeader>Maxit App Download (Iphone)</CCardHeader>
                        <CCardBody>
                            <CChartBar
                                data={{
                                    labels: [
                                        'FreetownWest',
                                        'FreetownEast',
                                        'East',
                                        'South',
                                        'North',
                                        'NorthWest'
                                    ],
                                    datasets: [
                                        {
                                            label: ['Details'],
                                            backgroundColor: ['#E14D2A', '#FD841F', '#3E6D9C', '#001253', '#FF7B54', '#FFB26B'],
                                            data: [

                                                `${freetown_west_iphone_sum}`,
                                                `${freetown_east_iphone_sum}`,
                                                `${east_iphone_sum}`,
                                                `${north_iphone_sum}`,
                                                `${north_west_iphone_sum}`,
                                                `${south_iphone_sum}`,
                                            ]
                                        },
                                    ],
                                }}
                                labels="Details"
                            />
                        </CCardBody>
                    </CCard>
                </CCol>

                <br />


                <CCol xs={5}>
                    <CCard className="mb-4">
                        <CCardHeader>Maxit App Download (Android)</CCardHeader>
                        <CCardBody>
                            <CChartBar
                                data={{
                                    labels: [
                                        'FreetownWest',
                                        'FreetownEast',
                                        'East',
                                        'South',
                                        'North',
                                        'NorthWest'
                                    ],
                                    datasets: [
                                        {
                                            label: ['Details'],
                                            backgroundColor: ['#E14D2A', '#FD841F', '#3E6D9C', '#001253', '#FF7B54', '#FFB26B'],
                                            data: [

                                                `${freetown_west_android_sum}`,
                                                `${freetown_east_android_sum}`,
                                                `${east_android_sum}`,
                                                `${north_android_sum}`,
                                                `${north_west_android_sum}`,
                                                `${south_android_sum}`,

                                            ],
                                        },
                                    ],
                                }}
                                labels="Details"
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>

    )
}

export default Dashboard

