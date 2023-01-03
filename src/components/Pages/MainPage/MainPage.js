import React from 'react';

import NavBar from './NavBar/NavBar';
import Logo from './Logo/Logo';
import Footer from '../../PageItems/Footer/Footer';
import Header from '../../PageItems/Header/Header';
import AppRouter from '../../../routers/AppRouter';

import './MainPage.scss';

const MainPage = () => {
    return (
        <div className="main-page">
            <Header />
            <div className="main-page__content">
                <div className="main-page__content_header">
                    <Logo />
                    <NavBar/>
                </div>
                <AppRouter />
            </div>
            <Footer />
        </div>
    );
};

export default MainPage;