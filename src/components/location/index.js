import React from 'react';

const index = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.411191557471!2d106.69682485046866!3d10.779785492281565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f37e6d82451%3A0xe84f59936ced5b45!2sNotre%20Dame%20Cathedral%20of%20Saigon!5e0!3m2!1sen!2s!4v1587308343469!5m2!1sen!2s"
                title="map"
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>

    );
};

export default index;