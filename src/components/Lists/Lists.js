import React from "react";
import FirstList from "./FirstList";
import SecondList from "./SecondList";





class List1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            array : ['one', 'two', 'three', 'four', 'five', 'six' ,'seven', 'eight', 'nine' ,'ten'],
            array2 : ['red', 'green', 'blue']
        }
    }

    changeLists(){
        let newArray = [...this.state.array];
        let firstItem = newArray.shift();
        let newArray2 = [...this.state.array2, firstItem];
        this.setState({array: newArray, array2: newArray2})
    }
    render(){
        return(
            <div>
                <FirstList arr={this.state.array}/>
                <SecondList arr={this.state.array2}/>
                <button
                        onClick={()=> this.changeLists()}
                        style={{marginBottom: '50px'}}>
                            click for change lists
                </button>
            </div>
        )
    }
}

export default List1;