import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

type Props = {}

const Signin = (props: Props) => {
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
            <h1 className='text-2xl text-center my-10 font-bold'>Signin</h1>
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
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item className='grid justify-items-center'>
                <Button className='font-semibold bg-blue-500' type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
            <div className="flex justify-between w-1/3 mx-auto">
                <Link to={"/"}>Home</Link>
                <Link to={"signup"}>Create account</Link>
            </div>
        </Form>
    )
}

export default Signin