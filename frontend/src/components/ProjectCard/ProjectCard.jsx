import React from 'react'
import { Card } from 'react-bootstrap'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function WorkSamplesCard({ title, developer, isCompleted, technology, link }) {
    return (
        <Card data-aos="fade-up" style={{ width: '30rem' }} className='fw-bold border-0 p-2 pb-0'>
            <Card.Body>

                <Card.Text>

                    <ul className='w-100 m-0 p-0 text-dark opacity-75 gap-3 d-flex flex-column'>
                        <li className='d-flex w-100 justify-content-between align-items-center'>
                            <span>عنوان پروژه:</span>
                            <span>{title}</span>
                        </li>
                        <li className='d-flex w-100 justify-content-between align-items-center'>
                            <span>توسعه دهنده:</span>
                            <span>{developer}</span>
                        </li>
                    </ul>

                    {
                        isCompleted ? (
                            <div className="d-flex text-success flex-column justify-content-center align-items-center gap-2 my-3 mt-2">
                                <AiOutlineCheckCircle className='fs-1' />
                                <span className='fs-6'>تکمیل شده</span>
                            </div>
                        ) : (
                            <div className="d-flex text-danger flex-column justify-content-center align-items-center gap-2 my-3 mt-2">
                                <AiOutlineCloseCircle className='fs-1' />
                                <span className='fs-6'>در انتظار تکمیل</span>
                            </div>
                        )
                    }

                    <ul className='w-100 m-0 p-0 text-dark opacity-75 gap-3 d-flex flex-column'>
                        <li className='d-flex w-100 justify-content-between align-items-center'>
                            <span>تکنولوژی:</span>
                            <span className='text-theme'>{technology}</span>
                        </li>
                    </ul>

                </Card.Text>

                <Card.Footer className='bg-transparent d-flex justify-content-center align-items-center pt-4'>

                    {
                        link === '#' ? (
                            <span style={{ minWidth: '70%' }} className='hover bg-theme border-0 px-5 py-2 shadow text-center rounded-pill text-white text-decoration-none d-flex justify-content-center align-items-center gap-2 opacity-50'>
                                <FiExternalLink className='mb-1' />
                                بدون لینک
                            </span>
                        ) : (
                            <Link to={link} target='_blank' style={{ minWidth: '70%' }} className='hover bg-theme border-0 px-5 py-2 shadow text-center rounded-pill text-white text-decoration-none d-flex justify-content-center align-items-center gap-2'>
                                <FiExternalLink className='mb-1' />
                                مشاهده پروژه
                            </Link>
                        )
                    }

                </Card.Footer>

            </Card.Body>
        </Card>
    )
}