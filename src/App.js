import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';


function App() {
  return (
    // BEM naming conventions--these conventions are very easy way of naming the components inside react inshort keeps the code clean

    <div className="App">
      
      <div className="app_body">   {/*this will take care of the layout of the page which contains sidebar and chat section and the avatar */}
      <Sidebar/>
      <Chat />

    </div> 
      
      </div>           
  );
}

export default App;
