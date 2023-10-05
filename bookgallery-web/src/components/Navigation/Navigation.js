import React, { useState } from 'react';
import './Navigation.css';
import { TrophyOutlined, ReadOutlined, BookOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {Link} from "react-router-dom";

const items = [
    {
        label: (
            <Link to="/" rel="best selling page">
                {'BESTS SELLING'}
            </Link>
        ),
        key: '',
        icon: <TrophyOutlined />,
    },
    {
        label: (
            <Link to="/book-lists" rel="book lists page">
                {'BOOK LISTS  '}
            </Link>
        ),
        key: 'book-lists',
        icon: <ReadOutlined />,
    },
    {
        label: (
            <Link to="/book-update"  rel="book update page">
                {'BOOK UPDATE '}
            </Link>
        ),
        key: 'book-update',
        icon: <BookOutlined />,
    },
];
const Navigation = () => {
    const currentPage = window.location.href.slice(24);
    const [current, setCurrent] = useState(currentPage);
    const onClick = (e) => {
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navigation;