import React from 'react';
import HeaderTravelPage from './Header/HeaderTravelPage';
import Travel from './Travel/Travel';

const TravelExperiencePage = () => {
    return (
        <div className="travel-experience-page">
            <HeaderTravelPage />
            <Travel />
        </div>
    );
};

export default TravelExperiencePage;