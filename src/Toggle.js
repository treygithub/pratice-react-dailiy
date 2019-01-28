import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props){
        super(props);
        this.state={
            toggle:false
        }
    }

    handleToggle=()=>{
        this.setState((state)=>{return{toggle:state.toggle = !this.state.toggle}})
    }

  render() {
    return (
    <div className="App">
        {}
       <button onClick={this.handleToggle}>
           {this.state.toggle? "Untoggle" : "Toggle"}
       </button>
    </div>
    )
  }
}
