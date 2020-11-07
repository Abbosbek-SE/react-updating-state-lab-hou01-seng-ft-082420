// Code YouTubeDebugger Component Here
import React from "react";

export default class YouTubeDebugger extends React.Component {

  constructor() {
    super();
    this.state = {
      errors: [],
     user: null,
     settings: {
     bitrate: 8,
    video: {
    resolution: '1080p'
  }
    }
  }
}

handleClick = () => {

  this.setState({
    ...this.state,
    settings: {
      ...this.state.settings,
      bitrate: 12
    }
  })
}

handleResoultion = () => {
  console.log(this.state)
  this.setState({
    ...this.state,
    settings: Object.assign({}, this.state.settings, {
      video: {
        resolution: "720p"
      }
    })
  })
}



  render() {
    return (
      <div>
      <button className = "bitrate" onClick = {this.handleClick} />
      <button className = "resolution" onClick = {this.handleResoultion} />
      </div>
  )
}
}
