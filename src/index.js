import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
//importing youtube search package.
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyC6b4u_uR4Ctvb6Yi9X4JSu_d6ArTsACt4';


class App extends Component{
  constructor(props){
    super(props);

    this.state = { videos: [] };

    //Youtube api search test.
    YTSearch({key: API_KEY, term:"skate"},(videos) => {
      this.setState({videos});
    });

  }

  render (){
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
