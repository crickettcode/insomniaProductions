import React, {Component} from 'react'


class VideoPlayer extends Component {
    render(){
        return(
            <div>
                <video 
                 controls autostart autoplay src={this.props.src} />
            </div>
        )
    }
}

export default VideoPlayer