import { FormOutlined, DownloadOutlined, ClearOutlined } from '@ant-design/icons';
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { List, Space } from 'antd';
import './BookListsPage.css';

const IconText = ({ icon, text, link, onClickEvent }) => (
    <Space>
        {React.createElement(icon)}
        { link === "/book-update" ? (<Link to={link} onClick={onClickEvent} >{text}</Link>) :
            (<a href={link} onClick={onClickEvent}>{text}</a>) }
    </Space>
);

export const BookListsPage = () => {
    const [ books, setBooks ] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/book/getAll")
            .then(res=>res.json())
            .then((result)=>{
                    setBooks(result);
                }
            )
    },[])

    console.log(books);

    const DownloadBook = ( id ) => {
        fetch(`http://localhost:8080/book/incrementDownloads/${id}`,{method:"PUT"}).then(()=>{
            console.log("Book downloaded.");
        })
    }

    const EditBook = ( id ) => {
        window.localStorage.setItem("bookId", id);
        console.log("I need to jump to the book update page.");
    }

    const DeleteBook = ( id ) => {
        fetch(`http://localhost:8080/book/deleteById/${id}`,{method:"DELETE"}).then(()=>{
            console.log('I need to deleted book.');
            window.location.reload(false);
        })
    }

    const RenderItem = ( item ) => {
        return(<List.Item className="listItem" key={item.id}
                          actions={[
                              <IconText icon={DownloadOutlined} text="download" link={item.content}
                                        onClickEvent={() => {
                                            DownloadBook(item.id);
                                        }}  key="list-vertical-download-o"/>,
                              <IconText icon={FormOutlined} text="edit" link="/book-update"
                                        onClickEvent={() => {
                                            EditBook(item.id);
                                        }} key="list-vertical-edit-o"/>,
                              <IconText icon={ClearOutlined} text="delete"
                                        onClickEvent={() => {
                                            DeleteBook(item.id);
                                        }} key="list-vertical-delete-o"/>,]}
                          extra={<img className="coverThumbnails" alt="book cover"  src={item.cover} />}>
                <List.Item.Meta title={ item.name } description={ item.author }/>
                <text className="bookIntro">{item.intro}</text>
        </List.Item>
        )
    }

    return !!books &&
        (<List itemLayout="vertical" size="large" pagination={{onChange: (page) => {}, pageSize: 3,}}
            dataSource={books} renderItem={RenderItem}/>)
};