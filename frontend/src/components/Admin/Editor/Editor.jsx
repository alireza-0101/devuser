import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Editor({ value, setValue }) {
    return (
        <CKEditor
            editor={ClassicEditor}
            data={value}
            config={{
                contentsLangDirection: 'rtl',
                language: 'fa',
                link: {
                    addTargetToExternalLinks: true
                }
            }}
            onChange={(event, editor) => {
                const data = editor.getData();
                setValue(data)
            }}

        />
    )
}
