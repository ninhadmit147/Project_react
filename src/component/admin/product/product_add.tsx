import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, InputNumber, message, Select, Upload } from 'antd';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';
import { storage } from '../../../app/firebase';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const ProductAdd = () => {
    //Uploadfile

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






    const submitForm = (value: any) => {
        console.log(value);
        const product = { ...value, image: downloadURL }
        console.log(product);


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

export default ProductAdd