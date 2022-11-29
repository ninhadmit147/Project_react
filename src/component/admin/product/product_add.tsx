import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, InputNumber, Select, Upload } from 'antd';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IProduct } from '../../../interface/product';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const ProductAdd = () => {
    const [imgUpload, setImgUpload] = useState()
    const customUpload = () => {

    }
    const onPreview = () => {

    }
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IProduct>()
    const onSubmit: SubmitHandler<IProduct> = (data) => {
        console.log(data);
    }
    const submitForm = (value: any) => {
        console.log(value);

    }
    return (
        <Form onFinish={submitForm}>
            <h1 className='text-center text-2xl my-5'>Form add product</h1>
            <Form.Item label="Prouduct name" name="name">
                <Input className='w-1/2' />
            </Form.Item>
            <Form.Item label="Price" name={"price"}>
                <InputNumber />
            </Form.Item>
            <Form.Item label="Sale" name={"sale"}>
                <InputNumber />
            </Form.Item>
            <Form.Item label="Amount" name={"amount"}>
                <InputNumber />
            </Form.Item>
            <Form.Item label="Select" name={"category"}>
                <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Description" name={"description"}>
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Upload" valuePropName="fileList">
                <Upload
                    listType="picture-card"
                >
                    <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                </Upload>
            </Form.Item>
            <Form.Item label="Button">
                <Button htmlType='submit'>Button</Button>
            </Form.Item>
        </Form>
    )
}

export default ProductAdd