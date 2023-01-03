
import { Menu } from 'antd';
import { BookOutlined, HomeOutlined, FileSearchOutlined, PieChartOutlined, LeftSquareOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

const items = [
    {
        label: <NavLink to="/">Trang chủ</NavLink>,
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: 'Lựa chọn điểm đến',
        key: 'SubMenu',
        children: [
            {
                label: <NavLink to="/travel-experience">Nha Trang</NavLink>,
                key: 'item1'
            },
            {
                label: <NavLink to="/travel-experience">Đà Lạt</NavLink> ,
                key: 'item2',
            },
            {
                label: <NavLink to="/travel-experience">Phú Quốc</NavLink> ,
                key: 'item3',
            }
        ],
    },
    {
        label: <NavLink to="/travel-experience">Kinh nghiệm du lịch</NavLink>,
        key: 'experience'
    },
    {
        label: <NavLink to="/travel-experience">Cẩm nang ăn uống</NavLink>,
        key: 'food'
    },
    {
        label: <NavLink to="/booking-hotel">Đặt khách sạn</NavLink>,
        key: 'hotel'
    },
    {
        label: <NavLink to="/booking-air-ticket">Đặt vé máy bay</NavLink>,
        key: 'flight'
    }
];

const NavBar = () => {

    const [current, setCurrent] = useState('home');

    const onClickIconHandler = (e) => {
        setCurrent(e.key);
    };

    return (
        <div className="nav-bar">
            <Menu onClick={ onClickIconHandler } selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
    );
};

export default NavBar;