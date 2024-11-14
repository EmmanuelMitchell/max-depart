import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    CCol,
    CRow,
    CModalTitle,
    CModalHeader
} from '@coreui/react'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"
import 'datatables.net-buttons/js/buttons.flash.min.js'
import * as jzip from 'jszip';
import 'pdfmake';
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jzip;







const WeeklyReport = () => {
    $(document).ready(function () {
        setTimeout(function () {
            $('#table1').DataTable(
                {
                    pagingType: 'full_numbers',
                    pageLength: 5,
                    processing: true,
                    dom: 'Bfrtip',
                    destroy: true,
                    buttons: [
                        'copy', 'print',
                        {
                            extend: 'excelHtml5',
                            title: 'Maxit Iphone'
                        },
                        {
                            extend: 'pdfHtml5',
                            title: 'Maxit Iphone'
                        },
                        {
                            extend: 'csvHtml5',
                            title: 'Maxit Iphone'
                        }
                    ]
                }
            );
        },
            1200
        );
    });

    $(document).ready(function () {
        setTimeout(function () {
            $('#table2').DataTable(
                {
                    pagingType: 'full_numbers',
                    pageLength: 5,
                    processing: true,
                    dom: 'Bfrtip',
                    destroy: true,
                    buttons: [
                        'copy', 'print',
                        {
                            extend: 'excelHtml5',
                            title: 'Maxit Android'
                        },
                        {
                            extend: 'pdfHtml5',
                            title: 'Maxit Android'
                        },
                        {
                            extend: 'csvHtml5',
                            title: 'Maxit Android'
                        }
                    ]
                }
            );
        },
            1200
        );
    });
  

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
        axios.get(`https://maxit-app.vercel.app/oneWeek`)
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

    // setTimeout(function () {
    //     window.location.reload(1);
    // }, 25000);

    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ORANGE SIERRA LEONE</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"></Nav.Link>
                        <Nav.Link href="#features"></Nav.Link>
                        <Nav.Link href="weeklyReport"><Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Dashboard</Link></Nav.Link>
                        <Nav.Link href="weeklyReport"><Link to="/monthlyReport" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>One Month</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="container text-center">
                <CRow>

                    <CCol xs={12}>
                        <CModalHeader>
                            <CModalTitle>Maxit Iphone</CModalTitle>
                        </CModalHeader>
                        <Table striped bordered hover size="sm" responsive id="table1">
                            <caption><h2>Maxit Download For Iphone</h2></caption>
                            <thead>
                                <tr>
                                    <th>Freetown West</th>
                                    <th>Freetown East</th>
                                    <th>East</th>
                                    <th>North</th>
                                    <th>North West</th>
                                    <th>South</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                <td>{freetown_west_iphone_sum}</td>
                                <td>{freetown_east_iphone_sum}</td>
                                <td>{east_iphone_sum}</td>
                                <td>{north_iphone_sum}</td>
                                <td>{north_west_iphone_sum}</td>
                                <td>{south_iphone_sum}</td>
                                </tr>

                            </tbody>
                        </Table>

                    </CCol>

                    <br />
                    <br />
                    <CCol xs={12}>
                        <CModalHeader>
                            <CModalTitle>Maxit Android</CModalTitle>
                        </CModalHeader>
                        <Table striped bordered hover size="sm" responsive id="table2">
                            <caption><h2>Maxit Download For Android</h2></caption>
                            <thead>
                                <tr>
                                    <th>Freetown West</th>
                                    <th>Freetown East</th>
                                    <th>East</th>
                                    <th>North</th>
                                    <th>North West</th>
                                    <th>South</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >

                                <td>{freetown_west_android_sum}</td>,
                                <td>{freetown_east_android_sum}</td>
                                <td>{east_android_sum}</td>
                                <td>{north_android_sum}</td>
                                <td>{north_west_android_sum}</td>
                                <td>{south_android_sum}</td>
                                </tr>

                            </tbody>
                        </Table>

                    </CCol>

                </CRow>

            </div>


        </>

    )
}

export default WeeklyReport

