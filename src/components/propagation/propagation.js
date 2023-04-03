import React from "react";

class Propagation extends React.Component {

    divClick(e){
        // e.stopPropagation();
        console.log('Div clicked');
    }
    buttonClick(e){
        e.stopPropagation();
        console.log('Button clicked');
    }

    render(){


        return(
            <div
            onClick={this.divClick}
            style={{ backgroundColor:'gold', width:'100px', height:'100px'}}>
                <button onClick={this.buttonClick}>button</button>
            </div>
        )
    }
}

export default Propagation;