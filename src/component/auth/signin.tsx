import { Button, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { IAuth } from '../../interface/auth';
import { useSignInMutation } from '../../service/auth';

type Props = {}

const Signin = (props: Props) => {
    const [signIn, { isError }] = useSignInMutation()
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        console.log(values);

        signIn(values).unwrap().then((response: any) => {
            console.log(response);
            localStorage.setItem("user", JSON.stringify(response))
            console.log(localStorage.getItem("user"));
            navigate("/admin")
        })
        if (isError) {
            message.error("Signin Failed !")
        }
        else {
            message.success("Signin success !")
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
            <h1 className='text-2xl text-center my-10 font-bold'>Signin</h1>
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