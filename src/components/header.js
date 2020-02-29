import React from 'react';

import './styles.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="header">
                <h2 style={{textAlign: 'center', color: 'blue'}}>My Pathasala</h2>
            </div>
        )
    }
}

export default Header;