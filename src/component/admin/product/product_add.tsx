import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, InputNumber, message, Select, Upload, Alert } from 'antd';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { storage } from '../../../app/firebase';
import { useGetCategoriesQuery } from '../../../service/category';
import { useAddProductMutation } from '../../../service/product';

const { TextArea } = Input;
const ProductAdd = () => {
    const { data: cate = [] } = useGetCategoriesQuery()
    const getCate = () => {
        return cate.map((item) => ({
            value: item.id,
            label: item.name
        }))
    }
    const [addProduct, { isLoading, isError }] = useAddProductMutation();

    //Upload file

    const [imgUpload, setImgUpload] = useState<File>()
    const [downloadURL, setDownloadURL] = useState('')
    const [progressUpload, setProgressUpload] = useState(0)
    const onChangeImg = (e: any) => {
        setImgUpload(e.file.originFileObj);
        if (imgUpload) {
            const image = imgUpload?.name
            const storageRef = ref(storage, `image/${image}`)
            const uploadTask = uploadBytesResumable(storageRef, imgUpload)
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgressUpload(progress)
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    message.error(error.message)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setDownloadURL(url)
                    });
                }
            );
        }

    }

    //upload file

    const handleChange = (value: any) => {
        console.log(value);

    }
    const submitForm = (value: any) => {
        setTimeout(() => {
            message.success("Add successful products")
        }, 2000)
        const product = { ...value, image: downloadURL, rating: 1 };
        addProduct(product);
    }
    return (
        <>
            <Form
                className='w-1/2 mx-auto'
                onFinish={submitForm}
            >
                <h1 className='text-center text-2xl my-5'>Form add product</h1>
                <Form.Item label="Prouduct name" name="name" rules={[{ required: true, message: "Do not leave blank" }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Price" name="price" rules={[{ required: true, message: "Do not leave blank" }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Sale" name="sale" rules={[{ required: true, message: "Do not leave blank" }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Amount" name="amount" rules={[{ required: true, message: "Do not leave blank" }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Category" name="category" rules={[{ required: true, message: "Do not leave blank" }]}>
                    <Select
                        onChange={handleChange}
                        options={getCate()}
                    />
                </Form.Item>
                <Form.Item label="Description" name="description" rules={[{ required: true, message: "Do not leave blank" }]}>
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList" rules={[{ required: true, message: "Do not leave blank" }]}>
                    <Upload
                        listType="picture-card"
                        onChange={onChangeImg}
                    >
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item label="Button">
                    <Button htmlType='submit' loading={isLoading}>Button</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default ProductAdd