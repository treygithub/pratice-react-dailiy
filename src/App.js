import React, { Component } from 'react';

import './App.css';

class App extends Component {
     state = {
      text:[],
      count:0,
      textField2:""
  }

  handleDeleteOne=()=>{
    this.setState((state)=>{return{count:state.count -= 1}})
  }
  handleAddOne=()=>{
    this.setState((state)=>{return{count:state.count += 1}})
  }
  handleReset=()=>{
    this.setState((state)=>{return{count:state.count = 0}})
  }
  handleRemoveOne=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  filterOne = (e) =>{
    e.preventDefault()
    this.setState((state)=>({  text: state.text.filter((text)=>{return this.state.textField2 !== text} )}))
  }

  handleOption=(e)=>{
    e.preventDefault();
    let userValue = e.target.elements.textField.value.trim();
    if(userValue){
      let newText = [...this.state.text]
      newText.push(userValue)
      this.setState((state)=>({text:state.text = newText}))
    }
  }

  render() {
    let {count,text} = this.state

    let textMap= text.map((e)=>{
      return <li key={e}>{e}</li>
    })
    return (
      <div className="App">
        <h1>Count: {count}</h1>
        <button onClick={(e)=>{this.handleAddOne()}}> + </button>
        <button onClick={(e)=>{this.handleDeleteOne()}}> - </button>
        <button onClick={(e)=>{this.handleReset()}}>reset</button>
          <ol>
            {textMap}
          </ol>
            <form onSubmit={this.filterOne}>
            <h3>enter the value to delete</h3>
            <input onChange={ e => this.handleRemoveOne(e) } type="text" name="textField2"/>
            <button>submit</button>
            </form>
          <h3>Add new value</h3>
        <form onSubmit={this.handleOption}>
          <input type="text" name="textField"></input>
          <button>SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default App;
