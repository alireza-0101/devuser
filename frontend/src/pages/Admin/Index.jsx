import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import useChangePageInfo from '../../hooks/useChangePageInfo'

export default function Index() {

  useChangePageInfo('مدیریت محتوا - دِو یوزر', 'مدیریت محتوای سایت')

  return (
    <Container fluid className='mx-0 px-0'>

      <Row className='justify-content-center'>

        <Sidebar />

        <Col xs={12} md={10} className='min-vh-100 overflow-hidden p-2 p-md-4'>
          <Container className='bg-white p-3 h-auto min-vh-100 w-100 rounded overflow-auto'>
            <Outlet />
          </Container>
        </Col>

      </Row>

    </Container>
  )
}