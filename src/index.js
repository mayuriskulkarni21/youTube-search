import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

// API key of 'YouTube Data API V3' of Google account
const API_KEY = 'AIzaSyDaK2uOr2euKWCrz2VJ1O_wPLTRMvIEIoI';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('reactJS');
    }

    videoSearch(term) {
        // Code to use search API of YouTube
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearch={videoSearch} />
                <VideoDetails videoData={this.state.selectedVideo} />
                <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videoList={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#container'));