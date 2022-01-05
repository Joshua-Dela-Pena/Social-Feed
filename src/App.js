import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import './App.css'


function App() {

  const [entries, setEntries] = useState([])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];

    setEntries(tempEntries)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social<small className='text-muted'>Feed</small></h3>
        <div className='col-md-6'>
          <div className='border-box'>
              <AddEntryForm addNewEntryProperty={addNewEntry} />
          </div>
          <div className='border-box'>
              <DisplayEntries parentEntries={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
