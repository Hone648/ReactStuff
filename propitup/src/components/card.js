import React, { Component } from 'react';
import Names from './names';
import Age from './age';
import Hair from './hair';

const Card = (props) => {
        return(
            <div>
                <Names firstname={"Jane"} lastname={"Doe"}/>
                <Age age={43}/>
                <Hair haircolor={"Black"}/>
            </div>
        ) 
}
export default Card;