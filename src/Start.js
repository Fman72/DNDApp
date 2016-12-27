import React from 'react';
import ReactDOM from 'react-dom';
import './Start.css'

class App extends React.Component {
  constructor(){
    super()[
      this.state= {
        header: 'Welcome to DnD App'
      }
    ]
  }
  render(){
    return (
    <div>
      <header>{this.state.header}</header>
    </div>
    )
  }
}

class button extends React.Component {
  render(){
    return (
      <div>
      
      </div>  
    )
  }
}

export default App