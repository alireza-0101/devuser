import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'

export default function AboutMe() {
    return (
        <Container data-aos="fade-up" className='bg-white p-3 p-md-5 rounded-3 overflow-hidden my-5'>

            <Row className='d-flex flex-column-reverse flex-md-row'>

                <Col xs={12} md={6} className='mb-4 mb-md-0 text-md-start text-center mt-5 mt-md-0'>

                    <h3 className='h2 so-bold mb-3'>من چه کسی هستم؟</h3>

                    <p className='fw-bold text-black opacity-75 line-heght-1'>دوست داری بدونی من کیم و چه علایقی دارم؟ اینجا همه رو بهت توضیح دادم تا راحت تر منو بشناسی و برای پروژه هات در نظر بگیری...</p>

                    <Accordion className='mb-0 mt-4 text-start' flush defaultActiveKey={['0']}>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>چند سالم هست و کجا زندگی میکنم؟</Accordion.Header>
                            <Accordion.Body>
                                من متولد سال 1384 هستم و الان در گیلان زندگی میکنم، که یکی از استان های زیبا و سرسبز شمال کشورمون هست.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>علایق من چی هست و چرا؟</Accordion.Header>
                            <Accordion.Body>
                                من عاشق توسعه فرانت اند هستم و دوست دارم توی این زمینه به صورت مداوم پیشرفت کنم و به یکی از توسعه دهندگان برتر در زمینه فرانت اند تبدیل بشم.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>چرا اصلا این سایت رو ساختم؟</Accordion.Header>
                            <Accordion.Body>
                                این سایت صرفا برای معرفی خودم و برای ارتباط شما با من زده شده و خوشحال میشم از طریق این سایت در مورد پروزه های خودتون با من هماهنگ کنید.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>

                </Col>

                <Col xs={12} md={6} className='d-flex justify-content-center align-items-center'>
                    <img src="/images/about.png" alt="About me" className='w-100 img-fluid' />
                </Col>

            </Row>

        </Container>
    )
}