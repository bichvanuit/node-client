import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../components/Pages/HomePage/HomePage';
import TravelExperiencePage from '../components/Pages/TravelExperiencePage/TravelExperiencePage';
import EatingGuidePage from '../components/Pages/EatingGuidePage/EatingGuidePage';
import FindFriendPage from '../components/Pages/FindFriendPage/FindFriendPage';
import BookingAirTicketPage from '../components/Pages/BookingAirTicketPage/BookignAirTicketPage';
import BookingHotelPage from '../components/Pages/BookingHotelPage/BookingHotelPage';

const AppRouter = () => (
    <Routes>
        <Route path="/travel-experience" element={<TravelExperiencePage />} />
        <Route path="/eating-guide" element={<EatingGuidePage />} />
        <Route path="/find-friend" element={<FindFriendPage />} />
        <Route path="/booking-hotel" element={<BookingHotelPage />} />
        <Route path="/booking-air-ticket" element={<BookingAirTicketPage />} />
        <Route path="/*" element={<HomePage />} />
    </Routes>
);

export default AppRouter;