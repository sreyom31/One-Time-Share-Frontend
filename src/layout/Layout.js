import {Fragment} from 'react';
import Header from './Header'
import Footer from './Footer'

const Layout = props => {
    return (
        <Fragment>
        
       <Header/>
       {props.children}
       <Footer/>
       
        </Fragment>
    );
};

export default Layout;