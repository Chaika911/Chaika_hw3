import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render(){


        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={() => this.setState({count: this.state.count +1})}>click for +</button>
                <button onClick={() => this.setState({count: this.state.count -1})}>click for -</button>

            </div>
        )
    }
}

export default Counter;