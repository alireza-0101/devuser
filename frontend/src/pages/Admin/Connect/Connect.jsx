import React, { useEffect, useState } from 'react'
import DataTable from '../../../components/Admin/DataTable/DataTable'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Modal } from 'react-bootstrap'

export default function Connect() {

    const [connects, setConnects] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [modalHeader, setModalHeader] = useState('')
    const [modlaBody, setModlaBody] = useState('')

    const getConnects = () => {
        fetch('https://personal-backend.iran.liara.run/connects')
            .then(res => res.json())
            .then(data => setConnects(data))
    }

    useEffect(() => {
        getConnects()
    }, [])

    const removeConnect = id => {
        fetch(`https://personal-backend.iran.liara.run/connects/${id}`, {
            method: 'DELETE'
        }).then(res => {
            if (res.ok || res.status === 500) {
                toast.success('با موفقیت حذف شد.')
                getConnects()
            }
        })
    }

    const showMessage = (text, name) => {
        setShowModal(true)
        setModalHeader(name)
        setModlaBody((text))
    }

    return (
        <div>
            <DataTable>
                <thead>
                    <tr>
                        <th>نام فرستنده</th>
                        <th>شماره تلفن</th>
                        <th>تاریخ</th>
                        <th>مشاهده</th>
                        <th>حذف</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        connects.map(connect => (
                            <tr>
                                <td>{connect.name}</td>
                                <td>{connect.phone}</td>
                                <td>{connect.date}</td>
                                <td>
                                    <button onClick={() => showMessage(connect.descreption, connect.name)} className='btn btn-primary'>مشاهده پیام</button>
                                </td>
                                <td>
                                    <button onClick={() => removeConnect(connect.id)} className='btn btn-danger'>حذف</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </DataTable>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className='fs-6 fw-bold'>{modalHeader}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modlaBody}</Modal.Body>
            </Modal>

        </div>
    )
}
