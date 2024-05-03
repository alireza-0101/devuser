import React, { useReducer } from 'react'

export default function useForm(defaultObj) {

    const formReducer = (state, action) => {
        if (action.type === 'CCUSTOM') {
            return action.payload
        } else {
            return { ...state, [action.type]: action.payload }
        }
    }

    const [form, dispatch] = useReducer(formReducer, defaultObj)

    const changeHandler = ev => {
        if (ev.target.type === 'checkbox') {
            dispatch({ type: ev.target.id, payload: ev.target.checked })
        } else {
            dispatch({ type: ev.target.id, payload: ev.target.value })
        }
    }

    const insertValue = obj => dispatch({ type: 'CCUSTOM', payload: obj })

    return [form, changeHandler, insertValue]
}