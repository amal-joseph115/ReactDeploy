import Card from './Card';
import {useState} from 'react';

const Person=(props)=>{
    let name=props.x;
    const [age,setAge]=useState(props.y);
    const buttonClickHandler=()=>{
        let val=age+1;
        setAge(val);
    }
    return (
        <Card>
            <p>My name is {name}</p>
            <p>I am {age} years old</p>
            <button onClick={buttonClickHandler}>Click me</button>
        </Card>
    );
}

export default Person;