import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="footer">
                <h4 style={{textAlign: 'center', color: 'aqua'}}>Hemanth @2020, All Reserved.</h4>
            </div>
        )
    }
}

export default Footer;