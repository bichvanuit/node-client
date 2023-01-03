import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignIn from '../components/Login/SignIn';
import SignUp from '../components/Login/SignUp';
import MainPage from '../components/Pages/MainPage/MainPage';

const LoginRouter = () => (
    <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/*" element={<MainPage />} />
    </Routes>
);

export default LoginRouter;