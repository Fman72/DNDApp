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
/*
class App extends React.Component {
  constructor(){
    super();
    this.state={
      output: '', 
      input: '//add jsx here',
      error: ''
    }
  }
  
  update(e){
    let code = e.target.value;
    try {
      this.setState({
        output: window.Babel
        .transform(code, {presets: ['es2015','react']}) //transforms our code using defined presets
        .code,                                           //return that code to us.
        error: ''
      })
    }catch(error){
      this.setState({error: error.message})
    }  
  }
  render(){
    return (
      <div>
        <header>{this.state.error}</header>
        <div className="container">
          <textarea
            onChange={this.update.bind(this)}
            defaultValue={this.state.input}/>
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
} 
*/
export default App