import { message } from 'antd'
import React from 'react'
import { Navigate } from 'react-router-dom'

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
            message.success("Hello " + dataUser.user.username)
            return (
                <Navigate to="/" />

            )
        }
        else {
            message.success("Hello " + dataUser.user.username)
            return children
        }
    }

}

export default PrivateAdmin