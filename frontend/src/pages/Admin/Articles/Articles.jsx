import React, { useEffect, useState } from 'react'
import DataTable from '../../../components/Admin/DataTable/DataTable'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import ArticleForm from '../../../components/ArticleForm/ArticleForm';
import { Modal } from 'react-bootstrap';

export default function Projects() {

    const [articles, setArticles] = useState([])
    const [showEditModal, setShowEditModal] = useState(false)
    const [targetArticle, setTargetArticle] = useState({})

    const toggleEditModal = () => setShowEditModal(prev => !prev)

    const getArticles = () => {
        fetch('https://personal-backend.iran.liara.run/articles')
            .then(res => res.json())
            .then(data => setArticles(data))
    }

    useEffect(() => {
        getArticles()
    }, [])

    const removeArticle = id => {
        fetch(`https://personal-backend.iran.liara.run/articles/${id}`, {
            method: 'DELETE'
        }).then(res => {
            if (res.ok || res.status === 500) {
                toast.success('با موفقیت حذف شد.')
                getArticles()
            }
        })
    }

    const submitHandler = (dataObj, insertValue) => {
        if (dataObj.title && dataObj.url && dataObj.descreption) {

            fetch('https://personal-backend.iran.liara.run/articles', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...dataObj })
            }).then(res => {
                if (res.ok || res.status === 500) {
                    toast.success('با موفقیت افززوده شد.')

                    insertValue({
                        title: '',
                        descreption: '',
                        photoUrl: '',
                        url: '',
                        content: '',
                        isPublic: false,
                    })

                    getArticles()
                }
            })

        } else {
            toast.error("لطفا تمامی مقادیر را وارد کنید!")
        }
    }

    const editHandler = (dataObj, insertValue) => {
        if (dataObj.title && dataObj.url && dataObj.descreption) {

            const targetID = targetArticle.id

            fetch(`https://personal-backend.iran.liara.run/articles/${targetID}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...dataObj })
            }).then(res => {
                if (res.ok || res.status === 500) {
                    toast.success('با موفقیت ویرایش شد.')

                    insertValue({
                        title: '',
                        descreption: '',
                        photoUrl: '',
                        url: '',
                        content: '',
                        isPublic: false,
                    })

                    setShowEditModal(false)

                    getArticles()
                }
            })

        } else {
            toast.error("لطفا تمامی مقادیر را وارد کنید!")
        }
    }

    return (
        <div className='d-flex flex-column gap-3'>

            <ArticleForm onFinally={submitHandler} />

            <DataTable>
                <thead>
                    <tr>
                        <th>عنوان</th>
                        <th>لینک کوتاه</th>
                        <th>لینک عکس</th>
                        <th>وضعیت</th>
                        <th>ویرایش</th>
                        <th>حذف</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        articles.map(article => (
                            <tr key={article.id}>
                                <td>{article.title}</td>
                                <td>
                                    <Link target='_blank' to={`/blog/${article.url}`}>{article.url}</Link>
                                </td>
                                <td>
                                    <Link target='_blank' to={articles.photoUrl}>تصویر</Link>
                                </td>
                                <td>{article.isPublic ? 'عمومی' : 'خصوصی'}</td>
                                <td>
                                    <button onClick={() => {
                                        toggleEditModal()
                                        setTargetArticle(article)
                                    }} className='btn btn-primary'>ویرایش</button>
                                </td>
                                <td>
                                    <button onClick={() => removeArticle(article.id)} className='btn btn-danger'>حذف</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </DataTable>

            <Modal show={showEditModal} onHide={toggleEditModal} centered size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>{targetArticle.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex flex-column gap-3'>
                        <ArticleForm onFinally={editHandler} editData={targetArticle} />
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}