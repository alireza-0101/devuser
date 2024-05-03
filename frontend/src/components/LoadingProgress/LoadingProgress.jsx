import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export default function LoadingProgress() {
    const [progress, setProgress] = useState(0)

    const location = useLocation()

    useEffect(() => {
        setProgress(40)
        setTimeout(() => {
            setProgress(100)
        }, 200);
    }, [location])

    return (
        <div style={{ direction: 'ltr' }}>
            <LoadingBar
                color='#4A6DFF'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
        </div>
    )
}
