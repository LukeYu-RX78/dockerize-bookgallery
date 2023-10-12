import React, {useEffect, useState} from 'react';
import { Button, Form, Input, Radio } from 'antd';
import './BookUpdatePage.css';

export const BookUpdatePage = () => {
    const [form] = Form.useForm();
    const defaultBookValue = JSON.parse(window.localStorage.getItem("bookgallery-book"));
    const [formState, setFormState] = useState(!!defaultBookValue? "update-book":"add-book");

    const updateBookByIdUrl = !!defaultBookValue && `http://localhost:8080/book/updateById/${defaultBookValue.id}`;
    const addBookUrl = `http://localhost:8080/book/add`;

    useEffect(() => {
        //console.log("clear", formState);
        !!formState && form.resetFields();
    },[formState, form]);

    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setFormState(requiredMarkValue);
    }

    const onFinish = (values) => {
        console.log(values);
        console.log(typeof(+values.price));

        let isReadyToUpdate = true;
        if (values.requiredMarkValue === 'add-book' && !values.name)
        {
            isReadyToUpdate = false;
            alert("New book's name couldn't be null!");
        }
        if (!!values.price && !+values.price && +values.price !== 0)
        {
            isReadyToUpdate = false;
            alert("Price should be a number!");
        }
        if (!!values.price && +values.price < 0) {
            isReadyToUpdate = false;
            alert("Price should can't be negative!");
        }

        if (isReadyToUpdate) {
            values.requiredMarkValue === 'update-book' ?
                fetch(updateBookByIdUrl,{
                    method:"PUT",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(values)
                }).then(()=>{ alert('Book is already updated.'); }) :
                fetch(addBookUrl,{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(values)
                }).then(()=>{ alert('Book is added.'); })
        }
    };

    const formInput = () => {
        const book = formState ==='update-book'? defaultBookValue : undefined;
        return (
        <>
            <Form.Item label="Book Name" name="name" >
                <Input placeholder="Please input the book Name"
                       defaultValue={book?.name}/>
            </Form.Item>
            <Form.Item label="Book Author" name="author" >
            <Input placeholder="Please input the author name"
                   defaultValue={book?.author}/>
            </Form.Item>
            <Form.Item label="Introduction" name="intro" >
            <Input placeholder="Please input the book Introduction"
                   defaultValue={book?.intro}/>
            </Form.Item>
            <Form.Item label="Book Type" name="tag" >
            <Input placeholder="Please input the book's type"
                   defaultValue={book?.tag}/>
            </Form.Item>
            <Form.Item label="Download Link" name="content">
                <Input placeholder="Please input the download link of the book"
                   defaultValue={book?.content}/>
            </Form.Item>
            <Form.Item label="Cover Link" name="cover">
                <Input placeholder="Please input the cover link of the book"
                   defaultValue={book?.cover}/>
            </Form.Item>
            <Form.Item label="Download Price" name="price">
                <Input placeholder="Please input the book's price"
                   defaultValue={book?.price}/>
            </Form.Item>
        </>
        )}

    return (
        <div className="updatePageContainer">
        <Form
            form={form}
            layout="vertical"
            onValuesChange={onRequiredTypeChange}
            initialValues={{
                requiredMarkValue: formState,
            }}
            onFinish={onFinish}
        >
            <Form.Item name="requiredMarkValue">
                <Radio.Group>
                    <Radio.Button value="add-book">Add book</Radio.Button>
                    <Radio.Button value="update-book">Update book</Radio.Button>
                </Radio.Group>
            </Form.Item>
            {formInput()}
            <Form.Item>
                <Button type="primary"  htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
        </div>
    );
};