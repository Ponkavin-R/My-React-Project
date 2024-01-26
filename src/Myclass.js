import React, { Component } from 'react'

export default class Myclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "hi"
        };
    }
    handleclick = () => {
        this.setState({
            message: "Button Click!"
        });
    }
    para = () => {
        document.getElementById("p").style = "display:block"
    }
    function = () => {
        document.getElementById("p1").innerHTML = "Hi"
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onMouseOver={this.handleclick}>Click</button>
                <h2 onClick={this.para}>Click here</h2>
                <div id='p1'></div>
                <br>
                </br>
                <br></br>
                <p id='p'>naveen kavin dharanish</p>
            </div>
        )
    }
}
