import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer>
            <Fade delay={500}>
                <div className="footer_logo">
                    The Sweet
                </div>
                <div>
                    The Sweet 2020. All rights reserved.
                </div>

            </Fade>
        </footer>
    );
};

export default Footer;