import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { HiHashtag } from 'react-icons/hi'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <Container data-aos="fade-up" className='mt-2 mt-md-5 pb-5'>
            <Row className='d-flex flex-column-reverse flex-md-row'>

                <Col xs={12} md={6} className='text-md-start text-center mt-3 mt-md-0'>
                    <Link to='https://cvbuilder.me/Builder/Pdf/fa/template27/311c1643-a746-43f3-8edc-b53fc2346fc5/MyResume-430[www.cvbuilder.me].pdf' download target='_blank'>
                        <span className='bg-theme px-3 py-1 mx-1 text-white rounded-pill'>
                            <HiHashtag className='me-1 mb-1' />
                            دانلود رزومه{" "}
                        </span>
                        <span className='text-theme'> به صورت فایل!</span>
                    </Link>
                    <h1 className='so-bold mt-5 line-heght-1'>
                        همراه من برنامه نویسی دیگه تو مشتته!
                        {" "}<span className='text-theme theme-so-bold'>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('توسعه سایت شرکتی')
                                        .start()
                                        .pauseFor(2000)
                                        .deleteChars(5)
                                        .typeString('فروشگاهی')
                                        .start()
                                        .pauseFor(2000)
                                        .deleteChars(8)
                                        .typeString('خبری')
                                        .start()
                                        .pauseFor(2000)
                                }}
                                options={{
                                    loop: true
                                }}
                            />
                        </span>
                    </h1>
                    <p className='w-75 m-auto m-md-0 line-heght-1 text-black-75 fw-bold mt-4 opacity-75'>
                        من در کنارتونم تا سایت شما از همه لحاظ از سایر سایت ها زیبا تر و بروز تر باشد و نیاز به طراحی دوباره نداشته باشید...
                    </p>
                    <div className='d-flex gap-2 align-items-center justify-content-center justify-content-md-start fw-bold mt-5 w-100'>
                        <Link to='/connect' className='bg-theme rounded-pill px-5 py-2 border-0 text-white fw-bold'>بزن بریم!</Link>
                        <span>برای هماهنگی بیشتر!</span>
                    </div>
                </Col>

                <Col xs={12} md={6} className='d-flex px-4 px-md-0 align-items-center justify-content-center'>
                    <img
                        style={{ maxHeight: '450px' }}
                        src="images/banner.png"
                        alt="website admin"
                        className='img-fluid' />
                </Col>
            </Row>
        </Container>
    )
}
