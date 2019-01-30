import React, {Component} from 'react';
import classes from './Layout.css'
import HeaderMenu from '../../Components/Navigation/HeaderMenu/HeaderMenu'

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <HeaderMenu/>
                <main>
                    { this.props.children }
                </main>
            </div>
        );
    }
}

export default Layout;