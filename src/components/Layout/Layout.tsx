import * as React from 'react';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

const Layout: React.FunctionComponent = (props) => {
    
    const [openSidedrawer, setOpenSidedrawer] = React.useState(false);

    const openSideDrawerHandler = () => {
        setOpenSidedrawer(true);
    }

    const closeSideDrawerHandler = () => {
        setOpenSidedrawer(false);
    }

    return (
        <React.Fragment>
            <Toolbar openSidedrawer={openSideDrawerHandler}/>
            <Sidedrawer open={openSidedrawer} closeSideDrawer={closeSideDrawerHandler}/>
            <div>Backdrop</div>
            <main className="Content">{props.children}</main>    
        </React.Fragment>
    );
}

export default Layout;