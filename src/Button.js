import React, { Component } from 'react'

export default class Button extends Component {

    state={
        open:false
    }

    handClick=()=>{
        this.setState((state)=>{
            return {open: !state.open}
        })
    }
  render() {
    return (
      <div>
        <button onClick={this.handClick}>
        {this.state.open ? "Hide details" : "Show details"}
        </button>
        {this.state.open && <p>Hello World</p>}
      </div>
    )
  }
}
