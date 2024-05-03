import React from 'react'
import useForm from '../../hooks/useForm'
import Editor from '../Admin/Editor/Editor';

export default function ArticleForm({ onFinally, editData }) {

    const baseForm = editData ? editData : {
        title: '',
        descreption: '',
        photoUrl: '',
        url: '',
        content: '',
        isPublic: false,
    }

    const [form, changeHandler, insertValue] = useForm(baseForm)

    const editorChangeHandler = value => {
        insertValue({
            title: form.title,
            descreption: form.descreption,
            photoUrl: form.photoUrl,
            url: form.url,
            content: value,
            isPublic: form.isPublic
        })
    }

    return (
        <>
            <input onChange={changeHandler} value={form.title} id='title' type="text" placeholder="عنوان مقاله..." className='p-2 form-control' />

            <input onChange={changeHandler} value={form.photoUrl} id='photoUrl' type="text" placeholder="آدرس عکس مقاله..." className='p-2 form-control' />

            <input onChange={changeHandler} value={form.url} id='url' type="text" placeholder="لینک مشاهده مقاله..." className='p-2 form-control' />

            <textarea rows={4} onChange={changeHandler} value={form.descreption} id='descreption' type="text" placeholder="توضیح کوتاه مقاله..." className='p-2 form-control w-100'></textarea>

            <Editor value={form.content} setValue={editorChangeHandler} />

            <div className="w-100 d-flex justify-content-start align-items-center gap-2">
                <input onChange={changeHandler} checked={form.isPublic} id='isPublic' type="checkbox" className='form-check' />
                <label htmlFor="isPublic">انتشار به صورت عمومی.</label>
            </div>

            <button onClick={() => onFinally(form, insertValue)} className='hover bg-theme border-0 px-5 py-2 shadow text-center rounded-pill text-white text-decoration-none d-flex justify-content-center align-items-center gap-2'>
                انتشار مقاله
            </button>
        </>
    )
}
