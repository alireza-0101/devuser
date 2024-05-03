import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import ProjectCard from '../ProjectCard/ProjectCard'
import { Container } from 'react-bootstrap'

export default function LastProjects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://personal-backend.iran.liara.run/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
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
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1000: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
                className="mySwiper rounded"
            >
                {
                    projects.reverse().map(project => (
                        <SwiperSlide key={project.id}>
                            <ProjectCard {...project} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Container >
    )
}