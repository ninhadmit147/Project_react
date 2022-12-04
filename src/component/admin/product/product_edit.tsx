import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, message, Select, Upload } from 'antd';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { storage } from '../../../app/firebase';
import { useGetCategoriesQuery } from '../../../service/category';
import { useEditProductMutation, useGetProductQuery } from '../../../service/product';
const { TextArea } = Input;
const ProductEdit = () => {
    const { id } = useParams()
    console.log(id);
    const [form] = Form.useForm()
    const { data: product, isLoading, isError } = useGetProductQuery(id as any)
    useEffect(() => {
        //Value form
        form.setFieldsValue({
            name: product?.name,
            price: product?.price,
            sale: product?.sale,
            amount: product?.amount,
            category: product?.category,
            description: product?.description
        })
    }, [product])

    const { data: cate = [] } = useGetCategoriesQuery()
    const getCate = () => {
        return cate.map((item) => ({
            value: item.id,
            label: item.name
        }))
    }
    //Upload img
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


    //Update
    const [updateProd] = useEditProductMutation()

    const submitForm = (value: any) => {
        console.log(value);
        if (!imgUpload) {
            const productupdate = { ...value, image: product?.image, rate: 1, id: id };
            updateProd(productupdate)
        }
        else {
            const productupdate = { ...value, image: downloadURL, rate: 1, id: id };
            updateProd(productupdate)
        }
        setTimeout(() => {
            message.success("Update successful (^_^)")
        }, 2000)

    }
    return (
        <Form form={form} className='w-1/2 mx-auto' onFinish={submitForm}>
            <h1 className='text-center text-2xl my-5'>Update product</h1>
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
                <Button htmlType='submit'>Button</Button>
            </Form.Item>
        </Form>
    )
}

export default ProductEdit