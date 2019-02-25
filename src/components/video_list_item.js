import React from 'react';

const VideoListItem = ({ videoData, onVideoSelect }) => {
    //Es6 syntax, here just 'videoData' is collected from passed props
    const imageURL = videoData.snippet.thumbnails.default.url;

// Here when user click on any video in the list, it will call onVideoSelect function 
// at index.js and update the 'selectedVideo' state value

    return (
        <li onClick={() => onVideoSelect(videoData)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageURL} />
                </div>
                
                <div className="media-body">
                    <div className="media-heading">{videoData.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;