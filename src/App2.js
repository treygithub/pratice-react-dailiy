import React, { Component } from 'react';
import Button from './Button';
import Classes from './Classes';

import './App.css';

class App2 extends Component {
     state = {
    title: 'title of app',
    subtitle:'im a subtitle',
    options:[]
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
      this.state.options.push(option);
      e.target.elements.option.value = ""
      this.setState((state) => {
        return {options: state.options};
      });
    }
    console.log(this.state.options)
  }

  handleClick = () => {

      this.setState((state)=>{
        return {options: state.options = []}
      })
      console.log('reset state',this.state.options)
  }

  render() {
    const {title,subtitle,options} = this.state
    const newNumbers = options.map((nums)=>{
        return(
          <li key={nums}>Number: {nums}  </li>
        )
    })
    return (
      <div className="App">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
          <p>{options.length > 0 ? "here are your options" : " no options"}</p>
          <p>{options.length}</p>
          <ol>
            {newNumbers}
          </ol>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
            <button onClick={this.handleClick}>Remove All</button>
          </form>

          <Button/>

          <Classes/>
      </div>
    );
  }
}

export default App2;
