import React, {Component} from 'react';
import ReactPlayer from 'react-player';

import Header from './header';
import Footer from './footer';

class MediaPlayer extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        return(
            <div>
                <Header />
                <div>
                    <h2 style={{textAlign: 'center'}}>Media Player</h2>
                    <div style={{display: 'flex', width: '100%', margin: '50px'}}>
                        <div style={{width: '40%', marginRight: '30px'}}>
                            <ReactPlayer
                                url='https://www.youtube.com/embed/tgbNymZ7vqY'
                                className='react-player'
                                //playing
                                width="300"
                            />
                        </div>
                        <div style={{width: '50%'}}>
                            <iframe width="600" height="350" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe> 
                        </div>
                    </div>
                    
                </div>
                <Footer />
            </div>
        )
    }
}

export default MediaPlayer;