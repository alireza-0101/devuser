import React, { useEffect, useState } from 'react'

export default function useChangePageInfo(title, description) {

    const [pageTitle, setPageTitle] = useState(title)
    const [pageDescription, setPageDescription] = useState(description)

    const changeValues = (title, description) => {
        setPageTitle(title)
        setPageDescription(description)
    }

    useEffect(() => {
        document.title = title
        document.getElementsByName('description')[0].content = description
    }, [pageTitle, pageDescription])

    return changeValues
}