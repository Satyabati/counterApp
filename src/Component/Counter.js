import React, { Component } from 'react';

export class Counter extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { counter: this.props.count };
      }
       increaseCount = ()=>{
          this.setState((prevState) => {
              return{
                  counter: prevState.counter+1
              }
          }
          )
      }
      decrementCount = ()=>{
        this.setState((prevState) => {
            return{
                counter: prevState.counter -1
            }
        }
        )
    }
    resetCount = ()=>{
        this.setState(() => {
            return{
                counter: this.props.count
            }
        }
        )
    }
    
  render() {
    return (<div>
        <h1>The count is {this.state.counter}</h1>
    <button onClick={this.increaseCount}>+1</button>
    <button onClick={this.decrementCount}>-1</button>
    <button onClick={this.resetCount}>Reset</button>
    </div>);
  }
}

export default Counter;
