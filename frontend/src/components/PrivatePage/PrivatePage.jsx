import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivatePage({ children }) {

    const [isLogin, setIsLogin] = useState(null)

    useEffect(() => {

        const { username, password } = document.cookie && JSON.parse(document.cookie.slice(5))

        if (username && password) {
            fetch('https://personal-backend.iran.liara.run/admins')
                .then(res => res.json())
                .then(data => {
                    const adminInfo = data.find(admin => admin.username === username && admin.password === password)

                    if (adminInfo) {
                        setIsLogin(true)
                    } else {
                        setIsLogin(false)
                    }
                })
                .catch(() => setIsLogin(false))
        } else {
            setIsLogin(false)
        }

    }, [])

    return isLogin !== null ? isLogin ? children : <Navigate to='/login' /> : <></>
}