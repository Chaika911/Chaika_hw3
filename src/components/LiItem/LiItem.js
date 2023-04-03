import React from "react";

class LiItem extends React.Component{
    constructor(props){
        super(props);

    }
    render(){

        return(
            <li>{this.props.text}</li>
        )
    }

}

export default LiItem;