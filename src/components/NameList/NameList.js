import React from "react";
import { v4 } from 'uuid';


const LiItem = (props) => <li>{props.num}</li>


class NameList extends React.Component {
    render() {
        const array = ['Vasiliy', 'Olena', 'Andriy', 'Bogdan', 'Stepan'];

        return(
            <ul>
                {array.map((num) => {
                const id = v4();
                return <LiItem key={id} num={num} />
                })}
            </ul>
        )
    }

}

export default NameList;