import React from 'react'
import { Table } from 'react-bootstrap'

export default function DataTable({ children }) {
    return (
        <>
            <div className="w-100 overflow-auto mt-5">
                <Table striped hover className='text-center align-middle' style={{ minWidth: '800px' }}>
                    {children}
                </Table>
            </div>
        </>
    )
}
