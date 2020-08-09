import React from 'react';
import CardList from './CardList.js';
import { robots } from './robots';
import SearchBox from './SearchBox';

const App = () => {
  return (   
  	<div className='tc'>
  	  <h1>RoboFriend</h1>   
  	  <SearchBox/>
      <CardList robots={robots}/>
    </div>
    );
}

export default App;