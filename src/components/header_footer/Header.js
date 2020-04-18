import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer'
class header extends Component {
    state = {
        drawerOpen: false
    }

    //Create transparent for header
    //Note: Use compenentWillUnmount to remove if have multiple page
    componentDidMount(){
        window.addEventListener('scroll', this.handlerScroll);
    }

    handlerScroll = ()=>{
        if(window.scrollY > 0){
            this.setState({headerShow: true});
        }else{
            this.setState({headerShow: false});
        }
    }
    toggleDrawer = (value) =>{
        console.log(value)
        this.setState({
            drawerOpen: value,
            headerShow: false
        })
    }
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0px'
                }}
            >
                <Toolbar>
                    <div className = "logoName">
                        <div>The Sweet</div>
                        <div>Food Events</div>
                    </div>
                    <IconButton onClick={() => this.toggleDrawer(true)}
                        style={{
                            marginLeft: 'auto',
                            marginRight: -12,
                        }}>
                        <MenuIcon aria-label="Menu"
                            style={{color: 'white',
                                    fontSize: '150%'}}
                        />
                    </IconButton>
                    <SideDrawer
                         open={this.state.drawerOpen}
                         onClose={(value)=>this.toggleDrawer(value)}
                    >
                       
                    </SideDrawer>


                </Toolbar>
            </AppBar>
        );
    }
}

export default header;