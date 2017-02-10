import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC6b4u_uR4Ctvb6Yi9X4JSu_d6ArTsACt4';

const App = function(){
  return(
    <div>
    <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
