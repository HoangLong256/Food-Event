import React from 'react';
import Button from '@material-ui/core/Button';

const MyButton = (props) => {
    return (
        <Button 
            href="#"
            variant={props.type}
            color={props.btnColor}
                size="small">
            {props.text}
        </Button>
    );
};

export default MyButton;