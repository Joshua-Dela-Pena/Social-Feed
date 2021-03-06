import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';
import LikesDislikes from './Components/LikesDislikes/LikesDislikes';
import './App.css'


function App() {

  const [entries, setEntries] = useState([])

  function NewPost(entry){
    let tempEntries = [...entries, entry];

    setEntries(tempEntries)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social<small className='text-muted'>Feed</small></h3>
        <div className='col-md-6'>
          <div className='border-box'>
              <CreatePost addNewPost={NewPost} />
          </div>
          <div className='border-box'>
              <DisplayPosts parentEntries={entries}/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
