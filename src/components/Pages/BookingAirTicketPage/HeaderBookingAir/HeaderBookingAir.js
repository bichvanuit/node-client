import React, { useState } from 'react';
import { Row, Col, Checkbox, DatePicker } from 'antd';
import AutoComplete from '../../../UI/Items/AutoComplete/AutoComplete';
import { BookingAirTicketRequest } from '../../../../models/requests/BookingAirTicketRequest';

import './HeaderBookingAir.scss';

const HeaderBookingAir = () => {

    const [isRoundTrip, setRoundTrip] = useState(false);

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const onChangeCheckBoxRoundTripHandler = (e) => {
        setRoundTrip(e.target.checked);
    };

    const onChangeAirportDepartureInputHandler = (departure) => {
        // this.request.departure = departure;
    }

    const onChangeAirportDestinationInputHandler = (destination) => {
        // this.request.destination = destination;
    }

    return (
        <div className="header-booking-air">
            <div className="header-booking-air__image">
                <img src="https://img.freepik.com/free-psd/flat-lay-copyspace-mockup-summer-concepts_23-2148200233.jpg?w=1800&t=st=1659670359~exp=1659670959~hmac=d83642f6078eec54fac400e0918737100cde7b97a44ac56bab820c08170f9cc5" alt="image" />
            </div>
            <div className="header-booking-air__content">
                <Row gutter={16} className="location">
                    <Col className="gutter-row" span={12}>
                        <p className="label">Từ</p>
                        <AutoComplete onChange={ onChangeAirportDepartureInputHandler } />
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <p className="label">Đến</p>
                        <AutoComplete onChange={ onChangeAirportDestinationInputHandler } />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className="num_passenger">
                        <p className="label">Số hàng khách</p>
                        <AutoComplete />
                    </Col>
                </Row>
                <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={12}>
                        <p className="label">Ngày đi</p>
                        <DatePicker onChange={onChange} style={{ width: "100%" }} />

                    </Col>
                    <Col className="gutter-row" span={12}>
                        <p><Checkbox onChange={onChangeCheckBoxRoundTripHandler} checked={isRoundTrip}>Khứ hồi</Checkbox></p>
                        {
                            isRoundTrip && <DatePicker onChange={onChange} style={{ width: "100%" }} />
                        }
                    </Col>
                </Row>
            </div>
            <div style={{ height: "1000px" }}>
            </div>
        </div>
    );
};

export default HeaderBookingAir;