import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
//importing youtube search package.
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyC6b4u_uR4Ctvb6Yi9X4JSu_d6ArTsACt4';

//Youtube api search test.
YTSearch({key: API_KEY, term:"skate"}, function(data){
  console.log(data);
});

const App = function(){
  return(
    <div>
    <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
