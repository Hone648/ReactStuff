import React, { Component, useState } from 'react';
import Names from './names';
import Age from './age';
import Hair from './hair';
import Button from './button';

const Card = (props) => {
        const [age, setAge] = useState(43);

        return(
            <div>
                <Names firstname={"Jane"} lastname={"Doe"}/>
                <Age age={age}/>
                <Hair haircolor={"Black"}/>
                <Button firstname={"Jane"} lastname={"Doe"} age={age} setAge={setAge}/>
            </div>
        ) 
}
export default Card;