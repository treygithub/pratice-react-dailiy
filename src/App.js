import React, { Component } from 'react';
import Toggle from './Toggle'
import './App.css';
import axios from 'axios'
class App extends Component {
  constructor(props){
    super(props);
     this.state = {
      text:[],
      count:0,
      textField2:"",
      toggle:false,
      persons:[]
  }
}
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      console.log('res', res)
      this.setState({persons:res.data})
    })
    .catch((err)=>{return console.log(err)})

      const getCount = localStorage.getItem('count');
      const count1 = parseInt(getCount,10);
      if(!isNaN(count1)){
      this.setState(()=>({count:count1}))
      }

    try{
      const json = localStorage.getItem('text');
      const text = JSON.parse(json);
      if(text){
      this.setState(()=>({text}))
      }
    } catch (e){
        //do nothing
    }
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.count !== this.state.count){
      localStorage.setItem('count',this.state.count);
    }

    if(prevState.text.length !== this.state.text.length){
      const json = JSON.stringify(this.state.text);
      localStorage.setItem('text',json);
    }
  }
  componentWillUnmount(){
    console.log('object unmounted')
  }

  handleDeleteOne=()=>{
    this.setState((state)=>{return{count:state.count - 1}})
  }
  handleAddOne=()=>{
    this.setState((state)=>{return{count:state.count + 1}})
  }
  handleReset=()=>{
    this.setState(()=>{return{count:0}})
  }
  handleRemoveOne=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  filterOne = (e) =>{
    e.preventDefault();
    let userVal = e.target.elements.textField2.value.trim()
    if(userVal){
      let ho = []
      ho = this.state.text.filter((text)=>{return this.state.textField2 !== text} )
      this.setState((state)=>({  text: ho }))
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
      this.setState((state)=>({text: newText}))
    }
  }

  render() {
    console.log(this.state.count)
    let {count,text} = this.state
    let textMap= text.map((e)=>{
      return <li key={e}>{e}</li>
    })
    let httpAxios = this.state.persons.map((e)=>{
      return <li key={e.id}>{e.name}</li>
    })
    return (
      <div className="App">
        <h1>Count: {count}</h1>
        <button onClick={()=>{this.handleAddOne()}}> + </button>
        <button onClick={()=>{this.handleDeleteOne()}}> - </button>
        <button onClick={()=>{this.handleReset()}}>reset</button>
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
        <h3>randum toggle btn</h3>
        <Toggle />
        <h3>Axios get request</h3>
        <div style={{marginTop:"35px"}}>{httpAxios}</div>
      </div>
    );
  }
}

export default App;