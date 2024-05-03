import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { Container, Form } from 'react-bootstrap'
import useChangePageInfo from '../../hooks/useChangePageInfo';

export default function Projects() {

    const [projects, setProjects] = useState([])
    const [shownProjects, setShownProjects] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const searchValueHandler = ev => setSearchValue(ev.target.value)

    useEffect(() => {
        fetch('https://personal-backend.iran.liara.run/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setShownProjects(data)
            })
    }, [])

    useEffect(() => {
        const filteredProjects = [...projects].filter(project => project.title.includes(searchValue) || project.technology.includes(searchValue))

        setShownProjects(filteredProjects)
    }, [searchValue])

    useChangePageInfo('لیست نمونه کار ها - دِو یوزر', 'لیست پروژه های انجام شده توسط من برای گواهی تسلط به کار')

    return (
        <>
            <Header />
            <Container className="d-flex justify-content-around align-items-center flex-wrap gap-3 bg-white py-3 px-2 mt-4 rounded-2">
                <Form.Control value={searchValue} onChange={searchValueHandler} className='fw-bold rounded-pill' style={{ width: '90%' }} placeholder='متنی برای جستجو...' />
            </Container>
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 my-4"  style={{ minHeight: '60vh' }}>
                {
                    shownProjects.reverse().map(project => (
                        <ProjectCard key={project.id} {...project} />
                    ))
                }
            </div>
            <Footer />
        </>
    )
}
