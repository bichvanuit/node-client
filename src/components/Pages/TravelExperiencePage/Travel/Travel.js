import React from 'react';
import styled from 'styled-components';

import TravelSummary from './TravelSummary';
import IntroductTravel from './IntroductTravel';
import ImageTravel from './ImageTravel';
import ListPosts from '../../../PageItems/ListPosts/ListPosts';
import ListDestinations from '../../../PageItems/ListDestinations/ListDestinations';

import { Locations as locations } from '../../../../json/MoocJson';
import { Posts as posts } from '../../../../json/MoocJson';

const Wrapper = styled.div`
    padding-left: 60px;
    padding-right: 60px;
`;

const Travel = () => {
    return (
        <Wrapper>
            <TravelSummary />
            <IntroductTravel />
            <ImageTravel />
            <ListPosts posts={posts} title="Tổng hợp bài viết về Nha Trang" />
            <ListDestinations locations={ locations } title="Lựa chọn địa điểm khác" />
        </Wrapper>
    );
}

export default Travel;