import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videoList.map(video => {
        return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} videoData={video} />
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;