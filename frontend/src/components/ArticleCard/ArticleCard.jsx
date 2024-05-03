import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TbClockHour2 } from 'react-icons/tb'
import { AiOutlineShareAlt } from 'react-icons/ai'

export default function ArticleCard({ title, descreption, photoUrl, url, content }) {

    const [image, setImage] = useState(photoUrl)

    const imageErrorLoadding = () => setImage('/images/default-article-image.png')

    const shareArticle = ev => {
        ev.preventDefault()
        navigator.share({ title, text: descreption, url: `/blog/${url}` })
    }

    return (
        <Card data-aos="fade-up" style={{ width: '18rem' }} className='border-0 hover'>

            <Link to={`/blog/${url}`}>

                <Card.Img style={{ height: '190px' }} className='overflow-hidden' alt={title} variant="top" src={image} onError={imageErrorLoadding} />

                <Card.Body>

                    <Card.Title className='fw-bold fs-6 line-heght-1 text-dark'>{title}</Card.Title>

                    <Card.Text style={{ fontSize: '14px' }} className='fw-bold text-dark opacity-75 d-flex justify-content-between align-items-center mt-4'>

                        <span className='d-flex justify-content-center align-items-center gap-1'>
                            <TbClockHour2 className='mb-1 fs-5' />
                            {Math.ceil(content.length / 5 / 60)} دقیقه مطالعه
                        </span>

                        <AiOutlineShareAlt onClick={shareArticle} className='fs-5' />

                    </Card.Text>

                </Card.Body>

            </Link>

        </Card>
    )
}
