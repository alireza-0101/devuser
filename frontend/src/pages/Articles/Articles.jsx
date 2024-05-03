import React, { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Container, Form } from "react-bootstrap"
import useChangePageInfo from "../../hooks/useChangePageInfo"
import ArticleCard from "../../components/ArticleCard/ArticleCard"

export default function Articles() {
  const [articles, setArticles] = useState([])
  const [shownArticles, setShownArticles] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const searchValueHandler = (ev) => setSearchValue(ev.target.value)

  useEffect(() => {
    fetch("https://personal-backend.iran.liara.run/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.filter((article) => article.isPublic))
        setShownArticles(data.filter((article) => article.isPublic))
      })
  }, [])

  useEffect(() => {
    const filteredProjects = [...articles].filter(
      (article) =>
        article.title.includes(searchValue) ||
        article.technology.includes(searchValue)
    )

    setShownArticles(filteredProjects)
  }, [searchValue])

  useChangePageInfo(
    "لیست مقاله ها - دِو یوزر",
    "لیست تمامی مقالات خبری و آموزشی دنیای وب و تکنولوژی"
  )

  return (
    <>
      <Header />
      <Container className="d-flex justify-content-around align-items-center flex-wrap gap-3 bg-white py-3 px-2 mt-4 rounded-2">
        <Form.Control
          value={searchValue}
          onChange={searchValueHandler}
          className="fw-bold rounded-pill"
          style={{ width: "90%" }}
          placeholder="متنی برای جستجو..."
        />
      </Container>
      <div
        className="d-flex justify-content-center align-items-center flex-wrap gap-4 my-4"
        style={{ minHeight: "60vh" }}
      >
        {shownArticles.reverse().map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
      <Footer />
    </>
  )
}
