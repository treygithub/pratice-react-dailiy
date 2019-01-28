import React, { Component } from 'react';
import Toggle from './Toggle'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
     this.state = {
      text:props.text,
      count:0,
      textField2:"",
      toggle:false
  }
}
  componentDidMount(){
    console.log('fethcing data')
    try{
      const json = localStorage.getItem('text');
      const text = JSON.parse(json);
      if(text){
      this.setState(()=>({text}))
      }
    } catch (e){
        console.log('e', e)
    }
  }

  componentDidUpdate(prevProps,prevState){
    console.log("change")
    if(prevState.text.length !== this.state.text.length){
      const json = JSON.stringify(this.state.text);
      localStorage.setItem('text',json);
    }
  }
  componentWillUnmount(){
    console.log('object unmounted')
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
    e.preventDefault();
    let userVal = e.target.elements.textField2.value.trim()
    if(userVal){
      this.setState((state)=>({  text: state.text.filter((text)=>{return this.state.textField2 !== text} )}))
      }
    if(this.state.text.includes(userVal)) {
      return e.target.elements.textField2.value = ""
    }else {
        return e.target.elements.textField2.value = "Item Not Found";
  }
  }

  handleOption=(e)=>{
    e.preventDefault();
    let userValue = e.target.elements.textField.value.trim();
    e.target.elements.textField.value = ""
    if(userValue){
      let newText = [...this.state.text]
      newText.push(userValue)
      this.setState((state)=>({text:state.text = [...newText]}))
    }
  }

  render() {
    console.log(this.state.text)
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
        <Toggle />
      </div>
    );
  }
}
App.defaultProps = {
  text:[]
}

export default App;