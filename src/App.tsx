import React from 'react'
import './App.css'
import { link } from './components/link'
import links_data from './data/links'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/favicon.ico" className="jumpy-bumpy" alt="logo" />
        <div className="content">
          {links_data.map( l => link(l.name, l.link))}
        </div>
      </header>
    </div>
  );
}

export default App;
