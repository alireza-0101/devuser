import React, { useReducer, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import useForm from '../../hooks/useForm'
import { toast } from 'react-toastify';
import useSolarDate from '../../hooks/useSolarDate';

export default function ConnectToMe({ modal, comment }) {

    const [form, changeHandler, insertValue] = useForm({
        name: '',
        phone: '',
        descreption: '',
    })

    const [solarDate, setDate] = useSolarDate(new Date)

    const submitHandler = ev => {
        ev.preventDefault()

        if (form.name.trim() && form.phone.trim() && form.descreption.trim()) {

            const newMsg = {
                ...form,
                descreption: comment ? `پیام در ارتباط با مقاله  ${comment}: ${form.descreption}` : form.descreption,
                date: solarDate
            }

            fetch('https://personal-backend.iran.liara.run/connects', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newMsg)
            }).then(res => {
                if (res.ok || res.status === 500) {
                    toast.success('با موفقیت ارسال شد.')

                    insertValue({
                        name: '',
                        phone: '',
                        descreption: '',
                    })
                }
            })

        } else {
            toast.error("لطفا تمامی مقادیر را وارد کنید!")
        }
    }

    return (
        <Container data-aos="fade-up" className={`fw-bold bg-white p-4 pt-2 rounded-4 ${(!modal || !comment) && 'my-5 pt-3'}`}>
            {
                !comment && (
                    <>
                        <h3 className='w-100 fw-bold fs-4 text-theme text-center opacity-75 mt-4'>فرم ارتباط با من</h3>
                        <p className='w-100 text-center opacity-75 mt-4'>
                            اگه سوالی داری یا میخوای پروژه ای رو به من بسپری اطلاعات زیر رو کامل کن و در پیام بگو بهت کجا پیام بدم، توجه داشته باش که اطلاعات شما کاملا شخصی میمونه
                        </p>
                        <p className='w-100 text-center opacity-75 mt-4'>
                            در صورت نیاز شما میتوانید با شماره تلفن من <a href="tel:09925097232">09925097232</a> تماس حاصل نمایید و یا از طریق لینک های پایین سایت در شبکه های اجتماعی با من در ازتباط باشید، با تشکر
                        </p>
                    </>
                )
            }
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>نام شما:</Form.Label>
                    <Form.Control onChange={changeHandler} value={form.name} id='name' type="text" placeholder="نام و نام خانوادگی شما..." />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>شماره تلفن شما:</Form.Label>
                    <Form.Control onChange={changeHandler} value={form.phone} id='phone' type="text" placeholder="شماره تماس شما..." />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>متن پیام شما:</Form.Label>
                    <Form.Control onChange={changeHandler} value={form.descreption} id='descreption' as="textarea" rows={5} placeholder='متن پیام شما...' />
                </Form.Group>
                <Button type="submit" className='py-2 opacity-75 bg-theme w-100 mt-4'>
                    ارسال پیام
                </Button>
            </Form>

            {/* <ToastContainer /> */}

        </Container>
    )
}