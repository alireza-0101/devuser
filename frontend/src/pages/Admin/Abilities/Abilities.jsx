import React, { useEffect, useState } from 'react'
import DataTable from '../../../components/Admin/DataTable/DataTable'
import useForm from '../../../hooks/useForm'
import { toast } from 'react-toastify';

export default function Abilities() {

    const [abilities, setAbilities] = useState([])

    const [form, changeHandler, insertValue] = useForm({
        title: '',
        mastery: '',
        shortName: '',
        color: '',
        isSoft: false,
    })

    const getAbilities = () => {
        fetch('https://personal-backend.iran.liara.run/abilities')
            .then(res => res.json())
            .then(data => setAbilities(data))
    }

    useEffect(() => {
        getAbilities()
    }, [])

    const submitHandler = ev => {
        ev.preventDefault()

        if (form.title.trim() && form.mastery.trim() && form.shortName.trim() && form.color.trim()) {

            fetch('https://personal-backend.iran.liara.run/abilities', {
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
                        mastery: '',
                        shortName: '',
                        color: '',
                        isSoft: false,
                    })

                    getAbilities()
                }
            })

        } else {
            toast.error("لطفا تمامی مقادیر را وارد کنید!")
        }
    }

    const removeAbility = id => {
        fetch(`https://personal-backend.iran.liara.run/abilities/${id}`, {
            method: 'DELETE'
        }).then(res => {
            if (res.ok || res.status === 500) {
                toast.success('با موفقیت حذف شد.')
                getAbilities()
            }
        })
    }

    return (
        <div className='d-flex flex-column gap-3'>

            <input value={form.title} onChange={changeHandler} id='title' type="text" placeholder="عنوان مهارت..." className='p-2 form-control' />

            <input value={form.mastery} onChange={changeHandler} id='mastery' type="text" placeholder="درصد تسلط مهارت..." className='p-2 form-control' />

            <input value={form.shortName} onChange={changeHandler} id='shortName' type="text" placeholder="حرف کوتاه مهارت..." className='p-2 form-control' />

            <input value={form.color} onChange={changeHandler} id='color' type="text" placeholder="رنگ مهارت..." className='p-2 form-control' />

            <div className="w-100 d-flex justify-content-start align-items-center gap-2">
                <input onChange={changeHandler} checked={form.isSoft} id='isSoft' type="checkbox" className='form-check' />
                <label htmlFor="isSoft">مهارت نرم است.</label>
            </div>

            <button onClick={submitHandler} className='hover bg-theme border-0 px-5 py-2 shadow text-center rounded-pill text-white text-decoration-none d-flex justify-content-center align-items-center gap-2'>
                افزودن مهارت
            </button>

            <DataTable>
                <thead>
                    <tr>
                        <th>عنوان</th>
                        <th>نوع مهارت</th>
                        <th>درصد تسلط</th>
                        <th>حرف کوتاه</th>
                        <th>رنگ</th>
                        <th>حذف</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        abilities.map(ability => (
                            <tr key={ability.id}>
                                <td>{ability.title}</td>
                                <td>{ability.isSoft ? 'مهارت نرم' : 'مهارت تخصصی'}</td>
                                <td>{ability.mastery}%</td>
                                <td>{ability.shortName}</td>
                                <td>
                                    <span className='px-4 py-1' style={{ background: (ability.color) }}></span>
                                </td>
                                <td>
                                    <button onClick={() => removeAbility(ability.id)} className='btn btn-danger'>حذف</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </DataTable>

        </div>
    )
}
