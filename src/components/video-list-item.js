import React from 'react';

const VideoListItem = function({video, onVideoSelect}){
  const imageURL = video.snippet.thumbnails.default.url;
  return (
    <li onClick={()=>{onVideoSelect(video)}} className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media' src={imageURL}></img>
        </div>
        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
