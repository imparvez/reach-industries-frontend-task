import React from 'react'

const Video = ({ index, videofiles }) => {
  return (
    <video key={index} width='541' height='303' controls>
        <source src={videofiles} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
  )
}

export default Video
