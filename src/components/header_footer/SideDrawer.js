import React from 'react';
import {scroller} from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const SideDrawer = (props) => {
    const scrollToElement = (element)=>{
        scroller.scrollTo(element, {
            duration: 500,
            delay: 100,
            smooth: true,
            offset:-100
        });
        props.onClose(false);
    }
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List  component="nav">
                <ListItem button onClick={()=>scrollToElement('sliders')}>
                    Sliders
                </ListItem>
                <ListItem button onClick={()=>scrollToElement('info')}>
                    Information
                </ListItem>
                <ListItem button onClick={()=>scrollToElement('hightlights')}>
                    Highlights
                </ListItem>
                <ListItem button onClick={()=>scrollToElement('prices')}>
                    Prices
                </ListItem>
                <ListItem button onClick={()=>scrollToElement('location')}>
                    Location
                </ListItem>

            </List>
        </Drawer>
    );
};

export default SideDrawer;