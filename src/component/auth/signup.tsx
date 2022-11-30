import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

type Props = {}

const Signup = (props: Props) => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
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