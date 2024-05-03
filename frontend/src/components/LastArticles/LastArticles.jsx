import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import ArticleCard from '../ArticleCard/ArticleCard'
import { Container } from 'react-bootstrap'

export default function LastArticles() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('https://personal-backend.iran.liara.run/articles')
            .then(res => res.json())
            .then(data => setArticles(data.filter(article => article.isPublic)))
    }, [])

    return (
        <Container fluid='xl' className='mb-5 mt-5 pt-5 p-2 p-md-5'>
            <Swiper
                slidesPerView={4}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                centeredSlides
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    450: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1000: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="mySwiper rounded"
            >
                {
                    articles.reverse().map(article => (
                        <SwiperSlide key={article.id}>
                            <ArticleCard {...article} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Container >
    )
}