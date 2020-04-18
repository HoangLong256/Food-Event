import React from 'react';
import icon_calender from '../../images/icons/calendar.png';
import icon_location from '../../images/icons/location.png'

const Info = () => {
    return (
        <div className="info_board">
            <div className="center_wrapper">
                <div className="inner_center_wrapper">
                    <div className="item">
                        <div className="outer">
                            <div className="inner">
                                <div className="icon_background">
                                </div>
                                <div
                                    className="icon"
                                    style={{
                                        background: `url(${icon_calender})`,
                                    }}>
                                </div>
                                <div className="title">
                                    Event and Date
                                </div>
                                <div className="detail">
                                    Monday, Apr 20 2020 <br/> 6:00 am
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="outer">
                            <div className="inner">
                                <div className="icon_background">
                                </div>
                                <div
                                    className="icon"
                                    style={{
                                        background: `url(${icon_location})`,
                                    }}>
                                </div>
                                <div className="title">
                                    Location
                                </div>
                                <div className="detail">
                                    Ho Chi Minh city <br/> Vietnam 
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Info;