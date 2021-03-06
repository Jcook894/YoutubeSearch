import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
//importing youtube search package.
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyC6b4u_uR4Ctvb6Yi9X4JSu_d6ArTsACt4';


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
       videos: [],
       selectedVideo: null
    };
    this.videoSearch('skate');
  }


  videoSearch(term){
    //Youtube api search test.
    YTSearch({key: API_KEY, term: term},(videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }


  render (){
    //Throttle for the search input.
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
