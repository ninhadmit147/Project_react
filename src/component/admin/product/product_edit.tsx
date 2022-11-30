import React, { useEffect } from 'react'
import { Form, InputNumber, Input, Select, Upload, Button } from 'antd'
import { PlusOutlined, } from '@ant-design/icons'
import { useGetProductQuery } from '../../../service/product';
import { useParams } from 'react-router-dom';
import { IProduct } from '../../../interface/product';

const { TextArea } = Input;
const ProductEdit = () => {
    const { id } = useParams()
    console.log(id);
    const [form] = Form.useForm()
    const { data: product, isLoading, isError } = useGetProductQuery(id as any)

    //Value form
    form.setFieldsValue({
        name: product?.name,
        price: product?.price,
        sale: product?.sale,
        description: product?.description
    })

    const submitForm = (value: any) => {
        console.log(value);

    }
    return (
        <Form form={form} onFinish={submitForm}>
            <h1 className='text-center text-2xl my-5'>Form add product</h1>
            <Form.Item label="Prouduct name" name="name" >
                <Input className='w-1/2' />
            </Form.Item>
            <Form.Item label="Price" name="price">
                <InputNumber />
            </Form.Item>
            <Form.Item label="Sale" name="sale">
                <InputNumber />
            </Form.Item>
            <Form.Item label="Amount" name="amount">
                <InputNumber />
            </Form.Item>
            <Form.Item label="Select" name="category">
                <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Description" name="description">
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

export default ProductEdit