import React, { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Landing from "../../components/Landing/Landing"
import LastProjects from "../../components/LastProjects/LastProjects"
import CardSlider from "../../components/CardSlider/CardSlider"
import ConnectToMe from "../../components/ConnectToMe/ConnectToMe"
import useChangePageInfo from "../../hooks/useChangePageInfo"
import AboutMe from "../../components/AboutMe/AboutMe"
import LastArticles from "../../components/LastArticles/LastArticles"

export default function Home() {
  useChangePageInfo("دِو یوزر", "صفحه اصلی سایت برنامه نویسیه دِو یوزر")

  const [abilities, setAbilities] = useState([])

  useEffect(() => {
    fetch("https://personal-backend.iran.liara.run/abilities")
      .then((res) => res.json())
      .then((data) => setAbilities(data))
  }, [])

  return (
    <>
      <Header />
      <Landing />
      <LastArticles />
      <CardSlider
        abilities={abilities}
        title="چه چیزایی بلدم؟"
        desc="توی این بخش تمام زبان ها، فریم ورک ها و پکیج هایی که من بهشون مسلطم رو میتونی ببینی و سطح تسلطم توی هرکدوم به صورت پروگرس و درصد نشون داده میشه..."
        subDesc="اینجا فقط زبان ها، فریم ورک ها و پکیج هایی که کلی هست نمایش داده میشه.. "
        card="ability"
      />
      <AboutMe />
      <CardSlider
        abilities={abilities}
        title="مهارت های شخصیم؟"
        desc="توی این بخش تمام مهارت های نرم و شخصی من رو توی اسلایدر میتونی ببینی"
        subDesc="توجه داشته باش که اینها فقط بخشی از مهارت هام هست"
        card="personal"
      />
      <LastProjects />
      <ConnectToMe />
      <Footer />
    </>
  )
}
