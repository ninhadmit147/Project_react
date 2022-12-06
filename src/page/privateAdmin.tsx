import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { IAuth } from '../interface/auth'

type PrivateProps = {
    children: React.ReactElement
}

const PrivateAdmin = ({ children }: PrivateProps) => {
    const data = localStorage.getItem("user")
    if (!data) {
        return <Navigate to="/auth" />
    } else {
        const dataUser = JSON.parse(data as any)
        const role = dataUser.user.role

        if (role !== 1) {
            return <Navigate to="/" />
        }
        else {
            return children
        }
    }

}

export default PrivateAdmin