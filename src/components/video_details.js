import React from 'react';

const VideoDetails = ({ videoData }) => {
    if(!videoData){
        return <div>Loading...</div>;
    }

    const videoId = videoData.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;

    // ES6 syntax, above can be written in ES6 as:
    // const url = `https://www.youtube.com/embed/${videoId}`;
    
    return (
        <div className="video-details col-md-8">
            <div className="">
                <iframe src={url}></iframe>
            </div>
            <div className="details">
                <div>{videoData.snippet.title}</div>
                <div>{videoData.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetails;