import React, { Component } from 'react'

// calling steps:
// Mounting (when component load and we can see) ->
// --> constructor -> render -> componentDidMount(we can/should call api here)
//Updating (when component become update like props/state changed, and we can see)->
// --> shouldComponentUpdate -> render -> componentDidUpdate
// Unmounting -->

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log("constructor")
        this.state = {
            count: 0,
            products: []
        }
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true
    }
    componentDidMount() { 
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(products => {
            this.setState({products: products})
        } )
     }
    componentDidUpdate() { console.log("componentDidUpdate") }
    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        { console.log("Render") }
        return (
            <div>
                <p>LifeCycle</p>
                <h4>Counter: {this.state.count}</h4>
                <button onClick={this.handleIncrement}>+</button>
                <div style={{background: '#ddd', padding: '20px'}}>
                    <h5>Id: {this.state.products.id}</h5>
                    <p>Title: {this.state.products.title}</p>
                    <p>Completed: {this.state.products.completed ? 
                    <span style={{color: 'green'}}>Yes</span> : <span style={{color: 'red'}}>No</span>}</p>
                </div>
            </div>
        )
    }
}
