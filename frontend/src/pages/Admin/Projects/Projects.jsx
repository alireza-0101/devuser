import React, { useEffect, useState } from 'react'
import DataTable from '../../../components/Admin/DataTable/DataTable'
import { Link } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import { toast } from 'react-toastify';

export default function Projects() {

    const [projects, setProjects] = useState([])

    const [form, changeHandler, insertValue] = useForm({
        title: '',
        technology: '',
        developer: '',
        link: '',
        isCompleted: false,
    })

    const getProjects = () => {
        fetch('https://personal-backend.iran.liara.run/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }

    useEffect(() => {
        getProjects()
    }, [])

    const submitHandler = ev => {
        ev.preventDefault()

        if (form.title.trim() && form.technology.trim() && form.developer.trim() && form.link.trim()) {

            fetch('https://personal-backend.iran.liara.run/projects', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...form })
            }).then(res => {
                if (res.ok || res.status === 500) {
                    toast.success('با موفقیت افززوده شد.')

                    insertValue({
                        title: '',
                        technology: '',
                        developer: '',
                        link: '',
                        isCompleted: false,
                    })

                    getProjects()
                }
            })

        } else {
            toast.error("لطفا تمامی مقادیر را وارد کنید!")
        }
    }

    const removeProject = id => {
        fetch(`https://personal-backend.iran.liara.run/projects/${id}`, {
            method: 'DELETE'
        }).then(res => {
            if (res.ok || res.status === 500) {
                toast.success('با موفقیت حذف شد.')
                getProjects()
            }
        })
    }

    return (
        <div className='d-flex flex-column gap-3'>

            <input onChange={changeHandler} value={form.title} id='title' type="text" placeholder="عنوان پروژه..." className='p-2 form-control' />

            <input onChange={changeHandler} value={form.technology} id='technology' type="text" placeholder="تکنولوژی اصلی پروژه..." className='p-2 form-control' />

            <input onChange={changeHandler} value={form.developer} id='developer' type="text" placeholder="توسعه دهنده پرژه..." className='p-2 form-control' />

            <input onChange={changeHandler} value={form.link} id='link' type="text" placeholder="لینک مشاهده پروژه..." className='p-2 form-control' />

            <div className="w-100 d-flex justify-content-start align-items-center gap-2">
                <input onChange={changeHandler} checked={form.isCompleted} id='isCompleted' type="checkbox" className='form-check' />
                <label htmlFor="isCompleted">پروژه به اتمام رسیده است.</label>
            </div>

            <button onClick={submitHandler} className='hover bg-theme border-0 px-5 py-2 shadow text-center rounded-pill text-white text-decoration-none d-flex justify-content-center align-items-center gap-2'>
                افزودن پروژه
            </button>

            <DataTable>
                <thead>
                    <tr>
                        <th>عنوان</th>
                        <th>تکنولوژی</th>
                        <th>لینک</th>
                        <th>توسعه دهنده</th>
                        <th>وضعیت</th>
                        <th>حذف</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        projects.map(project => (
                            <tr key={project.id}>
                                <td>{project.title}</td>
                                <td>{project.technology}</td>
                                <td>
                                    <Link target='_blank' to={project.link}>{project.link}</Link>
                                </td>
                                <td>{project.developer}</td>
                                <td>{project.isCompleted ? 'تکمیل شده' : 'در انتظار تکمیل'}</td>
                                <td>
                                    <button onClick={() => removeProject(project.id)} className='btn btn-danger'>حذف</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </DataTable>

        </div>
    )
}