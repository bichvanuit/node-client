import React from 'react';
import 'antd/dist/antd.min.css';

import Slide from './Slider/Slider';
import ListDestinations from '../../PageItems/ListDestinations/ListDestinations';
import ListPosts from '../../PageItems/ListPosts/ListPosts';

import { Locations as locations } from '../../../json/MoocJson';
import { Posts as posts } from '../../../json/MoocJson';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="site-card-wrapper">
                <Slide />
                {/* <Avatar /> */}
                <ListDestinations locations={locations} title="Lựa chọn điểm đến" />
                <ListPosts posts={posts} title="Kinh nghiệm du lịch" />
            </div>
        </div>
    );
};

export default HomePage;