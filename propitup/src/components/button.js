import React from 'react';
import Names from './names';

const Button = (props) => {
    return(
        <div>
            <button onClick={ () => { props.setAge(props.age+1)} }>Birthday button for {props.firstname} {props.lastname}</button>
        </div>
    )
}
export default Button;