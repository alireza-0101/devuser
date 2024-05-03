import React from 'react'
import { Card, ProgressBar } from 'react-bootstrap'

export default function ProgressCard({ title, shortName, color, mastery }) {
    return (
        <Card style={{ width: '25rem' }} className='fw-bold border-0 p-2'>
            <Card.Body>
                <Card.Title className='fw-bold mb-4 d-flex align-items-center gap-1'>
                    <span
                        className='rounded-circle d-flex justify-content-center align-items-center pt-1'
                        style={{ background: (color), width: '30px', height: '30px' }}
                    >
                        {shortName}
                    </span>
                    <span>{title}</span>
                    <span className='opacity-75 fs-6 mt-2'>{mastery}%</span>
                </Card.Title>
                <Card.Text>
                    <ProgressBar animated now={mastery} max={100} />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}