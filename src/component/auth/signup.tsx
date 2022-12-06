import { Button, Form, Input, message } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '../../service/auth';

const Signup = () => {
    const [err, setErr] = useState()
    const [signUp, { isError }] = useSignUpMutation()
    console.log(isError);
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        if (values.password !== values.rePassword) {
            message.error("Password confirmation failed")
        }
        else {
            const { rePassword, ...data } = values
            console.log(data);
            const user = { ...data, role: 0 }
            signUp(user)
            if (!isError) {
                message.error("Failed")
            }
            else {
                setTimeout(() => {
                    message.success("Create successful accoount")
                    navigate("/auth")
                }, 2000)
            }

        }

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form className="w-1/3 border rounded-md mx-auto p-20 bg-white"
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <h1 className='text-2xl text-center my-10 font-bold'>Signup</h1>
            <Form.Item
                className='font-semibold'
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                className='font-semibold'
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                className='font-semibold'
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                className='font-semibold'
                label="Repassword"
                name="rePassword"
                rules={[{ required: true, message: 'Please input your repassword!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item className='grid justify-items-center'>
                <Button className='font-semibold bg-blue-500' type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
            <Link className='grid justify-items-end' to={"/auth"}>You have account ?</Link>
        </Form>
    )
}

export default Signup