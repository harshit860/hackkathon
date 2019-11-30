import React from 'react'
import Webcam from 'react-webcam';

class WebcamCapture extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    setRef = webcam => {
      this.webcam = webcam;
    };
  
    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      this.props.imggg(imageSrc)
      console.log(this.props.history)
    };
  
    render() {
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      }
    
      return (
        <div className="col-xl-12">
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/png"
            width={350}
            videoConstraints={videoConstraints}
          />
          <button style={{marginTop:"200px"}}onClick={this.capture}>Capture photo</button>
        </div>
      );
    }
  }

export default WebcamCapture  