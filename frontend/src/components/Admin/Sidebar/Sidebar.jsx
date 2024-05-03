import React from 'react'
import { Col } from 'react-bootstrap'
import { BiCodeAlt, BiLogOut, BiMessageDots, BiNews } from 'react-icons/bi'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { SiOpenproject } from 'react-icons/si'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {

    let navigate = useNavigate()

    const logout = () => {
        const date = new Date()
        date.setTime(date.getTime() - (7 * 24 * 60 * 60 * 1000))
        document.cookie = `user=logout; expires=${date}; path=/;`
        navigate('/')
    }

    return (
        <Col style={{ paddingBottom: '100px' }} xs={12} md={2} className='bg-white min-vh-100 overflow-auto d-flex p-0 flex-column position-relative'>

            <span
                style={{ height: '60px' }}
                className='bg-theme text-white fw-bold w-100 py-2 d-flex justify-content-start align-items-center gap-2 px-3'
            >
                <HiOutlineMenuAlt3 className='fs-3' />
                دِو یوزر
            </span>

            <ul className='w-100 d-flex flex-column gap-3 mt-5 p-0' style={{ listStyle: 'none' }}>
                <li className='w-100 p-0 m-0'>
                    <NavLink to='projects' className='admin-page-sidebar-item-link bg-light border-end border-5 hover text-dark fw-bold p-3 w-100 h-100 d-flex justify-content-start align-items-center gap-2'>
                        <SiOpenproject />
                        پروژه ها
                    </NavLink>
                </li>
                <li className='w-100 p-0 m-0'>
                    <NavLink to='abilities' className='admin-page-sidebar-item-link bg-light border-end border-5 hover text-dark fw-bold p-3 w-100 h-100 d-flex justify-content-start align-items-center gap-2'>
                        <BiCodeAlt />
                        مهارت ها
                    </NavLink>
                </li>
                <li className='w-100 p-0 m-0'>
                    <NavLink to='articles' className='admin-page-sidebar-item-link bg-light border-end border-5 hover text-dark fw-bold p-3 w-100 h-100 d-flex justify-content-start align-items-center gap-2'>
                        <BiNews />
                        مقاله ها
                    </NavLink>
                </li>
                <li className='w-100 p-0 m-0'>
                    <NavLink to='connect' className='admin-page-sidebar-item-link bg-light border-end border-5 hover text-dark fw-bold p-3 w-100 h-100 d-flex justify-content-start align-items-center gap-2'>
                        <BiMessageDots />
                        ارتباطات
                    </NavLink>
                </li>
            </ul>

            <span onClick={logout} className='text-dark py-4 fw-bold w-100 d-flex justify-content-center align-items-center position-absolute bottom-0 gap-2 border-top hover'>
                <BiLogOut />
                خروج از حساب
            </span>

        </Col>
    )
}
