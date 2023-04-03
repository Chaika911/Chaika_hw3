import React  from "react";
import { v4 } from 'uuid';
import LiItem from "../LiItem/LiItem";


class SecondList extends React.Component {


    render(){

        return(
            <ul style={{border: '3px solid #fff'}}>
                {this.props.arr.map(item => {
                    const id = v4();
                    return <LiItem key={id} text={item}/>
                })}
            </ul>
        )
    }
}

export default SecondList;