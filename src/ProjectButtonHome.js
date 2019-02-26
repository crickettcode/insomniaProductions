import React, {Component} from 'react'
import Menu from './Menu'
import VideoPlayer from './VideoPlayer'
import './index.css';

const VIDEOS = {
    cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4',
    fast:'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    slow:'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4'
  };
  





class ProjectButtonHome extends Component {
    constructor() {
        super()
        this.chooseVideo=this.chooseVideo.bind(this)
        this.state = {
            src:VIDEOS.cute
        
        }
    }

    chooseVideo(newVideo){
        this.setState({
          src:VIDEOS[newVideo]
        })
      }

    render(){
        return (
            <div id ="videoPlayer"className="row">
            <div className ="col-md-12">
        <VideoPlayer src ={this.state.src}/>
        <Menu chooseVideo={this.chooseVideo}/>
        </div>
    
</div>
        )
    }

}

export default ProjectButtonHome