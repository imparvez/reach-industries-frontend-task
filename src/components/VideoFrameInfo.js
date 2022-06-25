import React from 'react'

const VideoFrameInfo = () => {
  return (
    <div className='video-list__frame-information'>
        <div className='video-list__frame-information__detail'>
            <ul>
            <li>Frame Number: </li>
            <li>Bounding Box: </li>
            <li>Histogram: </li>
            </ul>  
        </div>
        <div>
            <span className='video-list__frame-information__color-box-title'>R G B</span>
            <span className='video-list__frame-information__color-box'></span>
        </div>
    </div>
  )
}

export default VideoFrameInfo
