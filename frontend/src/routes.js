import { Navigate } from 'react-router-dom'

import Abilities from './pages/Abilities/Abilities'
import Connect from './pages/Connect/Connect'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Articles from './pages/Articles/Articles'
import ArticleContent from './pages/ArticleContent/ArticleContent'

import Login from './pages/Login/Login'
import PrivatePage from './components/PrivatePage/PrivatePage'

import Index from './pages/Admin/Index'
import AdminProjects from './pages/Admin/Projects/Projects'
import AdminConnect from './pages/Admin/Connect/Connect'
import AdminAbilities from './pages/Admin/Abilities/Abilities'
import AdminArticles from './pages/Admin/Articles/Articles'

let routes = [
    { path: '/', element: <Home /> },
    { path: '/connect', element: <Connect /> },
    { path: '/projects', element: <Projects /> },
    { path: '/blog', element: <Articles /> },
    { path: '/blog/:url', element: <ArticleContent /> },
    { path: '/abilities', element: <Abilities /> },

    { path: '/login', element: <Login /> },

    {
        path: '/admin',
        element: <PrivatePage><Index /></PrivatePage>,
        children: [
            { path: '', element: <Navigate to='projects' /> },
            { path: 'projects', element: <AdminProjects /> },
            { path: 'connect', element: <AdminConnect /> },
            { path: 'abilities', element: <AdminAbilities /> },
            { path: 'articles', element: <AdminArticles /> },
        ]
    },

    { path: '*', element: <Navigate to='/' /> },
]

export default routes