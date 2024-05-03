import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Container } from 'react-bootstrap'
import { TbClockHour2 } from 'react-icons/tb'
import { AiOutlineShareAlt } from 'react-icons/ai'
import LastArticles from '../../components/LastArticles/LastArticles'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useChangePageInfo from '../../hooks/useChangePageInfo'
import DOMPurify from 'dompurify';
import ConnectToMe from '../../components/ConnectToMe/ConnectToMe'

export default function ArticleContent() {

    const [article, setArticle] = useState({})

    const [image, setImage] = useState(article.photoUrl)

    const changeValues = useChangePageInfo(`${article.title} - دِو یوزر`, article.descreption)

    useEffect(() => {
        fetch(`https://personal-backend.iran.liara.run/articles/?url=${url}`)
            .then(res => res.json())
            .then(data => {
                data.length ? data[0].isPublic ? setArticle(data[0]) : navigate('/') : navigate('/')
                setImage(data[0].photoUrl)
                changeValues(data[0].title, data[0].descreption)
            })
    }, [])

    const imageErrorLoadding = () => setImage('/images/default-article-image.png')

    const { url } = useParams()
    const navigate = useNavigate()


    const shareArticle = () => navigator.share({ title: article.title, text: article.descreption, url: `/blog/${article.url}` })

    return (
        <>
            <Header />

            <Container style={{ minHeight: '100vh' }} className="bg-white px-4 mt-4 mb-4 py-4 rounded-2">

                <div style={{ maxHeight: '450px' }} className="rounded d-inline-block w-100 overflow-hidden">
                    <img className='w-100 h-auto img-fluid rounded' src={image} onError={imageErrorLoadding} alt="news imgae" />
                </div>

                <div style={{ fontSize: '14px' }} className='fw-bold text-dark opacity-75 d-flex justify-content-between align-items-center mt-4 px-3'>

                    <span className='d-flex justify-content-center align-items-center gap-1'>
                        <TbClockHour2 className='mb-1 fs-5' />
                        {article.content && Math.ceil(article.content.length / 5 / 60)} دقیقه مطالعه
                    </span>

                    <AiOutlineShareAlt onClick={shareArticle} className='fs-5 hover' />

                </div>

                <h1 className='h2 text-theme mt-4 px-2 px-md-5  fw-bold line-heght-1'>{article.title}</h1>


                <div className="w-100 px-2 px-md-5 long-text mt-4 text-start">
                    <p>
                        {article.descreption}
                    </p>

                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content) }}></div>

                </div>

                {/* <p className='line-heght-1 px-2 text-theme text-center w-100 fw-bold mt-5'>
                    اگر در مورد این مطلب یا هر موضوع دیگه ای سوال داری میتونی از بخش <Link className='text-dark px-1' to='/connect'>ارتباط با من</Link> سوالت رو ازم بپرسی
                </p> */}

                <ConnectToMe comment={article.title}/>

            </Container>

            <LastArticles />

            <Footer />
        </>
    )
}