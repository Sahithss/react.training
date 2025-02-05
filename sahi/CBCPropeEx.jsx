import React, { Component } from 'react';

export default class CBCPropEx extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>

        <ul>
          {this.props.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>

        <h1>{this.props.address.city}</h1>

        <button onClick={this.props.sendFun}>Click</button>
      </div>
    );
  }
}