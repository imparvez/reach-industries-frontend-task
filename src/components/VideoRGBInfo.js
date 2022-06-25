import React from 'react'

const VideoRGBInfo = () => {
  return (
    <div className='video-list__rgb-container'>
        <div className='video-list__rgb-container_box'>
            <input type='color' />  
        </div>
        <span className='video-list__rgb-container_title'>Average RGB</span>  
    </div>
  )
}

export default VideoRGBInfo
