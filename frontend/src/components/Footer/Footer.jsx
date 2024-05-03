import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsFillTelephoneFill, BsTelegram } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
    return (
        <Row className='px-2 py-4 bg-white d-flex flex-column-reverse flex-md-row gap-4 pt-4 pt-md-auto gap-md-0'>
            <Col xs={12} md={6} className='d-flex justify-content-center align-items-center fw-bold text-center'>
                این سایت توسط خودم با 💙 و ☕ ساخته شده است و تمامی اطلاعات آن محفوظ است.
            </Col>
            <Col xs={12} md={6} className='d-flex justify-content-center align-items-center'>
                <ul className='d-flex justify-content-center align-items-center m-0 p-0 gap-4 gap-md-5 text-white fs-5' style={{ listStyle: 'none' }}>
                    <li>
                        <a
                            style={{ width: '40px', height: '40px' }}
                            className='bg-theme text-white rounded-circle d-flex justify-content-center align-items-center'
                            href="https://t.me/alireza_dev_84"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsTelegram />
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ width: '40px', height: '40px' }}
                            className='bg-theme text-white rounded-circle d-flex justify-content-center align-items-center'
                            href="https://instagram.com/alireza_mh_01?igshid=ZDdkNTZiNTM="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GrInstagram />
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ width: '40px', height: '40px' }}
                            className='bg-theme text-white rounded-circle d-flex justify-content-center align-items-center'
                            href="tel:09925097232"
                            rel="noopener noreferrer"
                        >
                            <BsFillTelephoneFill />
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ width: '40px', height: '40px' }}
                            className='bg-theme text-white rounded-circle d-flex justify-content-center align-items-center'
                            href="mailto:alireza.mehdizadeh.84.313@gmail.com"
                            rel="noopener noreferrer"
                        >
                            <MdEmail />
                        </a>
                    </li>
                </ul>
            </Col>
        </Row>
    )
}