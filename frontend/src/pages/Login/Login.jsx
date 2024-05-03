import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [admins, setAdmins] = useState([])

    const [form, changeHandler, insertValue] = useForm({
        username: '',
        password: ''
    })

    useEffect(() => {
        fetch('https://personal-backend.iran.liara.run/admins')
            .then(res => res.json())
            .then(data => setAdmins(data))
    }, [])

    let navigate = useNavigate()

    const login = () => {
        if (form.username.trim() && form.password.trim()) {
            const adminInfo = admins.find(admin => admin.username === form.username && admin.password === form.password)

            if (adminInfo) {
                const date = new Date()
                date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000))
                document.cookie = `user=${JSON.stringify((adminInfo))}; expires=${date}; path=/;`
                navigate('/admin/projects')
            } else {
                toast.error("نام کاربری یا رمز عبور اشتباه است!")
            }
        } else {
            toast.error("لطفا تمامی مقادیر را وارد کنید!")
        }
    }

    return (
        <div style={{ maxWidth: '400px' }} className='m-auto min-vh-100 p-4 d-flex gap-3 flex-column justify-content-center align-items-center'>
            <h1 className='h2 fw-bold so-bold'>ورود به مدیریت</h1>

            <Form.Control value={form.username} onChange={changeHandler} id="username" type='text' placeholder='نام کاربری را وارد کنید...' className='p-2' />
            <Form.Control value={form.password} onChange={changeHandler} id="password" type='password' placeholder='رمز عبور حساب...' className='p-2' />

            <button onClick={login} className='hover bg-theme w-100 mt-4 border-0 px-5 py-2 shadow text-center rounded-pill text-white text-decoration-none d-flex justify-content-center align-items-center gap-2'>
                ورود به مدیریت
            </button>
        </div>
    )
}
