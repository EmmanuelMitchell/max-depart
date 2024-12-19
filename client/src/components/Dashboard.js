import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { CChartBar } from '@coreui/react-chartjs';

const Dashboard = () => {
  const [data, setData] = useState({
    commercialIphone: null,
    commercialAndroid: null,
    customerExperienceIphone: null,
    customerExperienceAndroid: null,
    financeIphone: null,
    financeAndroid: null,
    foundationIphone: null,
    foundationAndroid: null,
    giaProgramIphone: null,
    giaProgramAndroid: null,
  });

  useEffect(() => {
    axios
      .get('https://maxit-app.vercel.app')
      .then((response) => {
        setData({
          commercialIphone: response.data.commercial_iphone_sum,
          commercialAndroid: response.data.commercial_android_sum,
          customerExperienceIphone: response.data.customer_experience_iphone_sum,
          customerExperienceAndroid: response.data.customer_experience_android_sum,
          financeIphone: response.data.finance_iphone_sum,
          financeAndroid: response.data.finance_android_sum,
          foundationIphone: response.data.foundation_iphone_sum,
          foundationAndroid: response.data.foundation_android_sum,
          giaProgramIphone: response.data.gia_program_iphone_sum,
          giaProgramAndroid: response.data.gia_program_android_sum,
        });
      })
      .catch((error) => console.error(error));
  }, []);

  // Refresh the dashboard every 25 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 25000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ORANGE SIERRA LEONE DASHBOARD</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">DOWNLOAD</Nav.Link>
            {/* <Nav.Link href="weeklyReport">
              <Link to="weeklyReport" style={{ color: 'white', textDecoration: 'none', fontWeight: 700 }}>
                Weekly Report
              </Link>
            </Nav.Link> */}
            {/* <Nav.Link href="monthlyReport">
              <Link to="monthlyReport" style={{ color: 'white', textDecoration: 'none', fontWeight: 700 }}>
                One Month Report
              </Link>
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      <CCard className="mb-4">
        <CCardHeader>Maxit App Download (iPhone)</CCardHeader>
        <CCardBody>
          <CChartBar
            data={{
              labels: ['Commercial', 'Customer Experience', 'Finance', 'Foundation', 'GIA Program'],
              datasets: [
                {
                  label: 'iPhone Downloads',
                  backgroundColor: ['#E14D2A', '#FD841F', '#3E6D9C', '#001253', '#FF7B54'],
                  data: [
                    data.commercialIphone,
                    data.customerExperienceIphone,
                    data.financeIphone,
                    data.foundationIphone,
                    data.giaProgramIphone,
                  ],
                },
              ],
            }}
          />
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
        <CCardHeader>Maxit App Download (Android)</CCardHeader>
        <CCardBody>
          <CChartBar
            data={{
              labels: ['Commercial', 'Customer Experience', 'Finance', 'Foundation', 'GIA Program'],
              datasets: [
                {
                  label: 'Android Downloads',
                  backgroundColor: ['#FFB26B', '#FF7B54', '#3E6D9C', '#001253', '#FD841F'],
                  data: [
                    data.commercialAndroid,
                    data.customerExperienceAndroid,
                    data.financeAndroid,
                    data.foundationAndroid,
                    data.giaProgramAndroid,
                  ],
                },
              ],
            }}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Dashboard;
