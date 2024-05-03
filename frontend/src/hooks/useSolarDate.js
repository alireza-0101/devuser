import React, { useEffect, useState } from 'react'

export default function useSolarDate(defualtDate) {

    const [date, setDate] = useState(defualtDate)
    const [solarDate, setSolarDate] = useState('')

    useEffect(() => setSolarDate(date.toLocaleDateString('fa-IR')), [date])

    return [solarDate, setDate]
}