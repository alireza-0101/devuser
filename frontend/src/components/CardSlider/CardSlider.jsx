import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import ProgressCard from '../ProgressCard/ProgressCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export default function CardSlider({ abilities, title, desc, subDesc, card }) {
    return (
        <Container className='my-5'>
            <Row className='d-flex flex-column-reverse flex-md-row'>
                <Col data-aos="fade-up" xs={12} md={6} className='mb-4 mb-md-0 text-md-start text-center mt-5 mt-md-0'>

                    <h3 className='h2 so-bold mb-3'>{title}</h3>

                    <p className='fw-bold text-black opacity-75 line-heght-1'>{desc}</p>

                    <p className='fw-bold text-black opacity-75 line-heght-1'>{subDesc}</p>

                    <div className="d-flex gap-3 w-100 justify-content-center justify-content-md-end pt-4">

                        <button
                            className={`next-${card} bg-white rounded-pill border-0 fs-5 shadow opacity-75`}
                            style={{ width: '50px', height: '50px' }}
                        >
                            <IoIosArrowForward />
                        </button>

                        <button
                            className={`prev-${card} bg-white rounded-pill border-0 fs-5 shadow opacity-75`}
                            style={{ width: '50px', height: '50px' }}
                        >
                            <IoIosArrowBack />
                        </button>

                    </div>

                </Col>
                <Col data-aos="fade-up" xs={12} md={6} className='overflow-hidden d-flex justify-content-center flex-column'>

                    <Swiper
                        navigation={{
                            nextEl: `.next-${card}`,
                            prevEl: `.prev-${card}`
                        }}
                        grabCursor={true}
                        speed={1000}
                        loop
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        slidesPerView={1}
                        className="my-swiper my-know-swiper shadow"
                        style={{ height: (card === 'ability' || card === 'personal') ? '130px' : '210px' }}
                    >

                        {card === 'ability' && abilities.reverse().filter(ability => !ability.isSoft).map(ability => (
                            <SwiperSlide key={ability.id}>
                                <ProgressCard {...ability} />
                            </SwiperSlide>
                        ))}

                        {card === 'personal' && abilities.reverse().filter(ability => ability.isSoft).map(ability => (
                            <SwiperSlide key={ability.id}>
                                <ProgressCard {...ability} />
                            </SwiperSlide>
                        ))}

                    </Swiper>

                    <span className='text-dark opacity-75 w-100 text-center mt-3 fw-bold d-flex justify-content-center align-items-center gap-1'>
                        <BsArrowRightShort className={`next-${card} fs-4`} />
                        برای مشاهده بیشتر ورق بزنید
                        <BsArrowLeftShort className={`prev-${card} fs-4`} />
                    </span>

                </Col>
            </Row>
        </Container>
    )
}